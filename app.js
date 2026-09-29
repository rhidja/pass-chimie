/* PASS Médecine — Chimie : logique de l'application.
   Aucun contenu pédagogique ici : tout vient de data/*.js. */
(function () {
  "use strict";

  const STORAGE_KEY = "pass-chimie-v1";
  const LETTERS = ["A", "B", "C", "D", "E", "F"];
  const view = document.getElementById("view");

  // ---------- Utilitaires ----------

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  // Hachage djb2 : identifiant stable d'une question à partir de son énoncé.
  function hash(str) {
    let h = 5381;
    for (let i = 0; i < str.length; i++) h = ((h << 5) + h + str.charCodeAt(i)) | 0;
    return (h >>> 0).toString(36);
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function pct(x) { return Math.round(x * 100) + " %"; }
  function fmtScore(x) { return x.toFixed(1).replace(".", ","); }
  function range(n) { return Array.from({ length: n }, (_, i) => i); }

  function math(el) {
    if (typeof window.renderMathInElement !== "function") return;
    try {
      window.renderMathInElement(el, {
        delimiters: [{ left: "\\(", right: "\\)", display: false }],
        throwOnError: false
      });
    } catch (e) { /* une formule invalide ne doit pas bloquer la page */ }
  }

  // ---------- Données enrichies ----------

  const DOMAIN = {};
  DOMAINS.forEach(d => { DOMAIN[d.id] = d; });
  const OBJ = {};
  OBJECTIVES.forEach(o => { OBJ[o.id] = o; });

  const qByObj = {};
  const cByObj = {};
  OBJECTIVES.forEach(o => { qByObj[o.id] = []; cByObj[o.id] = []; });

  QUESTIONS.forEach((q, i) => {
    q.i = i;
    q.id = hash(q.q);
    q.multi = Array.isArray(q.c);
    q.cs = q.multi ? q.c.slice() : [q.c];
    if (qByObj[q.o]) qByObj[q.o].push(q);
  });
  COURSES.forEach((c, i) => {
    c.i = i;
    c.id = "c" + hash(c.title);
    c.o.forEach(oid => { if (cByObj[oid]) cByObj[oid].push(c); });
  });

  // ---------- Stockage ----------

  function blank() {
    return { answers: {}, read: {}, mastered: {}, exams: [], streak: 0 };
  }

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return Object.assign(blank(), JSON.parse(raw));
    } catch (e) { /* stockage indisponible */ }
    return blank();
  }

  function save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) { /* ignoré */ }
  }

  let state = load();

  function record(q, ok) {
    const prev = state.answers[q.id];
    state.answers[q.id] = { ok: ok, n: prev ? prev.n + 1 : 1, t: Date.now() };
  }

  // ---------- Statistiques ----------

  function objStats(oid) {
    let seen = 0, ok = 0;
    qByObj[oid].forEach(q => {
      const a = state.answers[q.id];
      if (a) { seen++; if (a.ok) ok++; }
    });
    return { total: qByObj[oid].length, seen, ok, acc: seen ? ok / seen : null };
  }

  function objStatus(oid) {
    const s = objStats(oid);
    if (state.mastered[oid] || (s.seen >= 3 && s.ok / s.seen >= 0.8)) return "done";
    if (s.seen > 0 || cByObj[oid].some(c => state.read[c.id])) return "doing";
    return "todo";
  }

  const STATUS_LABEL = { todo: "À découvrir", doing: "En cours", done: "Maîtrisé" };

  function globalStats() {
    let seen = 0, ok = 0;
    QUESTIONS.forEach(q => {
      const a = state.answers[q.id];
      if (a) { seen++; if (a.ok) ok++; }
    });
    return { seen, ok, acc: seen ? ok / seen : null };
  }

  function domainStats(did) {
    let seen = 0, ok = 0;
    QUESTIONS.forEach(q => {
      if (q.d !== did) return;
      const a = state.answers[q.id];
      if (a) { seen++; if (a.ok) ok++; }
    });
    return { seen, ok, acc: seen ? ok / seen : null };
  }

  function masteredCount() {
    return OBJECTIVES.filter(o => objStatus(o.id) === "done").length;
  }

  function examTotal() {
    return DOMAINS.reduce((s, d) => s + d.examCount, 0);
  }

  // ---------- Navigation ----------

  let tab = "programme";
  let courseOpen = null;

  function go(t) {
    tab = t;
    document.querySelectorAll(".tab").forEach(b => {
      const on = b.dataset.tab === t;
      b.classList.toggle("active", on);
      b.setAttribute("aria-selected", on ? "true" : "false");
    });
    render();
  }

  function render() {
    let html = "";
    if (tab === "programme") html = renderProgramme();
    else if (tab === "cours") html = courseOpen === null ? renderCourses() : renderCourse(courseOpen);
    else if (tab === "entrainement") html = renderPractice();
    else if (tab === "examen") html = renderExam();
    else html = renderProgress();
    view.innerHTML = html;
    math(view);
  }

  function scrollTop() {
    const top = view.getBoundingClientRect().top + window.scrollY - 10;
    if (window.scrollY > top) window.scrollTo(0, top);
  }

  function openCourse(i) {
    courseOpen = i;
    state.read[COURSES[i].id] = true;
    save();
    go("cours");
    window.scrollTo(0, view.getBoundingClientRect().top + window.scrollY - 10);
  }

  // ---------- Programme ----------

  function renderProgramme() {
    const m = masteredCount();
    const total = OBJECTIVES.length;
    let h = `<div class="card">
      <div class="row between"><h2 style="margin:0">Programme</h2><span class="weight">${m} / ${total} objectifs maîtrisés</span></div>
      <div class="bar" style="margin-top:12px"><span style="width:${(m / total) * 100}%"></span></div>
      <p class="small muted" style="margin:10px 0 0">Un objectif est « Maîtrisé » avec au moins 80 % de bonnes réponses sur au moins 3 de ses questions, ou si tu coches « Je maîtrise ».</p>
    </div>`;
    DOMAINS.forEach(d => {
      h += `<div class="section-head"><span class="dnum">Domaine ${d.id}</span><h2>${esc(d.name)}</h2><span class="weight">${d.weight} %</span></div><div class="card">`;
      OBJECTIVES.filter(o => o.d === d.id).forEach(o => {
        const s = objStats(o.id);
        const st = objStatus(o.id);
        const links = cByObj[o.id].map(c =>
          `<button type="button" class="linkbtn" data-act="open-course" data-i="${c.i}">Module ${c.i + 1} · ${esc(c.title)}</button>`).join(" ");
        h += `<div class="obj">
          <div>
            <h3><span class="oid">${o.id}</span>${esc(o.title)}</h3>
            <ul class="notions">${o.notions.map(n => `<li>${esc(n)}</li>`).join("")}</ul>
            <div class="obj-links">${links}</div>
          </div>
          <div class="obj-side">
            <span class="pill ${st}">${STATUS_LABEL[st]}</span>
            <span class="small muted">${s.acc === null ? "—" : pct(s.acc)} · ${s.seen} / ${s.total} questions vues</span>
            <label class="check"><input type="checkbox" data-act="master" data-o="${o.id}" ${state.mastered[o.id] ? "checked" : ""}> Je maîtrise</label>
            <button type="button" class="btn btn-small" data-act="train-obj" data-o="${o.id}">S’entraîner</button>
          </div>
        </div>`;
      });
      h += `</div>`;
    });
    return h;
  }

  // ---------- Cours ----------

  function renderCourses() {
    const read = COURSES.filter(c => state.read[c.id]).length;
    let h = `<div class="row between"><h2 style="margin:0">Cours</h2><span class="weight">${read} / ${COURSES.length} modules lus</span></div>
      <p class="intro">Chaque module suit le même plan : l’essentiel du cours, les formules, un exemple résolu, les pièges classiques et une fiche à retenir.</p>`;
    DOMAINS.forEach(d => {
      const list = COURSES.filter(c => c.d === d.id);
      if (!list.length) return;
      h += `<div class="section-head"><span class="dnum">Domaine ${d.id}</span><h2>${esc(d.name)}</h2><span class="weight">${d.weight} %</span></div><div class="course-grid">`;
      list.forEach(c => {
        h += `<button type="button" class="card course-card" data-act="open-course" data-i="${c.i}">
          <span class="num">MODULE ${String(c.i + 1).padStart(2, "0")}</span>
          <h3>${esc(c.title)}</h3>
          <p>${esc(c.summary)}</p>
          <span class="meta"><span class="tag">${c.o.join(" · ")}</span>${state.read[c.id] ? `<span class="pill read">LU</span>` : ""}</span>
        </button>`;
      });
      h += `</div>`;
    });
    return h;
  }

  function renderCourse(i) {
    const c = COURSES[i];
    const d = DOMAIN[c.d];
    let h = `<article class="card course-detail">
      <p class="overline" style="margin-top:0">Module ${i + 1} · Domaine ${d.id} — ${esc(d.name)}</p>
      <h2>${esc(c.title)}</h2>
      <p class="intro">${esc(c.summary)}</p>
      <div class="recall"><b>Objectifs du programme couverts</b><ul>${c.o.map(oid =>
        `<li><b>${oid}</b> ${esc(OBJ[oid].title)} — <span class="small muted">${OBJ[oid].notions.map(esc).join(", ")}</span></li>`).join("")}</ul></div>`;
    c.sections.forEach(s => {
      // Le texte des cours est du HTML de confiance (balises <b>, <sub>…) issu de data/courses.js.
      h += `<section class="course-section"><h3>${s.h}${s.extra ? ` <span class="pill extra">Hors programme</span>` : ""}</h3>`;
      if (s.p) h += `<p>${s.p}</p>`;
      if (s.points) h += `<ul>${s.points.map(p => `<li>${p}</li>`).join("")}</ul>`;
      if (s.p2) h += `<p>${s.p2}</p>`;
      h += `</section>`;
    });
    h += `<div class="course-nav">
        <button type="button" class="btn btn-ghost" data-act="courses-home">← Tous les cours</button>
        <button type="button" class="btn" data-act="train-objs" data-os="${c.o.join(",")}">S’entraîner sur ces objectifs</button>
        <button type="button" class="btn btn-ghost" data-act="open-course" data-i="${i + 1}" ${i + 1 >= COURSES.length ? "disabled" : ""}>Module suivant →</button>
      </div></article>`;
    return h;
  }

  // ---------- Entraînement ----------

  const practice = { base: "all", objs: null, queue: [], pos: 0, cur: null };

  function objPool() {
    if (!practice.objs) return QUESTIONS;
    return QUESTIONS.filter(q => practice.objs.indexOf(q.o) !== -1);
  }

  function applyBase(pool, base) {
    if (base === "new") return pool.filter(q => !state.answers[q.id]);
    if (base === "wrong") return pool.filter(q => state.answers[q.id] && !state.answers[q.id].ok);
    if (base.charAt(0) === "d") { const d = +base.slice(1); return pool.filter(q => q.d === d); }
    return pool;
  }

  function buildQueue() {
    practice.queue = shuffle(applyBase(objPool(), practice.base).map(q => q.i));
    practice.pos = 0;
    practice.cur = null;
    nextPractice();
  }

  function nextPractice() {
    if (practice.pos >= practice.queue.length) {
      // Fin de série : on recalcule la liste et on mélange à nouveau.
      practice.queue = shuffle(applyBase(objPool(), practice.base).map(q => q.i));
      practice.pos = 0;
    }
    if (!practice.queue.length) { practice.cur = null; return; }
    const q = QUESTIONS[practice.queue[practice.pos]];
    practice.cur = { q: q, order: shuffle(range(q.a.length)), sel: [], done: false };
  }

  function setPracticeFilter(base, objs) {
    practice.base = base;
    if (objs !== undefined) practice.objs = objs;
    buildQueue();
  }

  function renderPractice() {
    if (!practice.cur && practice.queue.length === 0) buildQueue();
    const g = globalStats();
    const pool = objPool();
    const chips = [["all", "Toutes"], ["new", "Jamais répondues"], ["wrong", "Erreurs à revoir"]]
      .concat(DOMAINS.map(d => ["d" + d.id, "D" + d.id + " · " + d.name]));
    let h = `<div class="stats">
      <div class="stat"><div class="v">${g.seen}</div><div class="l">questions différentes répondues</div></div>
      <div class="stat"><div class="v">${g.acc === null ? "—" : pct(g.acc)}</div><div class="l">précision</div></div>
      <div class="stat streak"><div class="v">${state.streak}</div><div class="l">bonnes réponses d’affilée</div></div>
    </div>
    <div class="filters" role="group" aria-label="Filtres">${chips.map(([k, l]) =>
      `<button type="button" class="chip ${practice.base === k ? "active" : ""}" data-act="filter" data-f="${k}">${esc(l)}<span class="n">${applyBase(pool, k).length}</span></button>`).join("")}</div>`;
    if (practice.objs) {
      const label = practice.objs.map(o => `${o} ${esc(OBJ[o].title)}`).join(" · ");
      h += `<div class="active-filter"><span>Filtre actif : objectif${practice.objs.length > 1 ? "s" : ""} <b>${label}</b></span>
        <button type="button" class="btn btn-small btn-ghost" data-act="clear-obj">Retirer ×</button></div>`;
    }
    if (!practice.cur) {
      if (practice.base === "wrong") {
        h += `<div class="card empty"><div class="big">🎉</div><h3>Aucune erreur à revoir</h3><p class="muted">Bravo : toutes les questions ratées ont été corrigées. Continue avec « Jamais répondues ».</p></div>`;
      } else {
        h += `<div class="card empty"><div class="big">✓</div><h3>Aucune question dans ce filtre</h3><p class="muted">Choisis un autre filtre pour continuer.</p></div>`;
      }
      return h;
    }
    h += `<div class="card" id="qcard">${renderPracticeQuestion()}</div>`;
    return h;
  }

  function answerButtons(q, order, sel, done, act) {
    return order.map((orig, k) => {
      let cls = "answer";
      const chosen = sel.indexOf(orig) !== -1;
      const right = q.cs.indexOf(orig) !== -1;
      if (done) {
        if (right) cls += " correct";
        else if (chosen) cls += " wrong";
      } else if (chosen) cls += " selected";
      let why = "";
      if (done && q.x && q.x[orig]) {
        why = `<span class="why"><span class="vf ${right ? "t" : "f"}">${right ? "Vrai" : "Faux"} —</span>${esc(q.x[orig])}</span>`;
      }
      return `<button type="button" class="${cls}" data-act="${act}" data-k="${k}" ${done ? "disabled" : ""} aria-pressed="${chosen}">
        <span class="letter">${LETTERS[k]}</span><span class="txt">${esc(q.a[orig])}</span>${why}</button>`;
    }).join("");
  }

  function expectedLetters(q, order) {
    return order.map((orig, k) => q.cs.indexOf(orig) !== -1 ? LETTERS[k] : null).filter(Boolean).join(", ");
  }

  function renderPracticeQuestion() {
    const cur = practice.cur;
    const q = cur.q;
    const o = OBJ[q.o];
    let h = `<div class="q-meta"><span class="tag">${o.id}</span><span>${esc(o.title)}</span><span>·</span>
      <span>Question ${practice.pos + 1} / ${practice.queue.length}</span>${q.multi ? `<span class="pill doing">${q.cs.length} réponses</span>` : ""}</div>
      <div class="q-text">${esc(q.q)}</div>
      <div class="answers">${answerButtons(q, cur.order, cur.sel, cur.done, "answer")}</div>`;
    if (cur.done) {
      const ok = sameSet(cur.sel, q.cs);
      h += `<div class="feedback ${ok ? "ok" : "ko"}"><h4>${ok ? "Bonne réponse" : "À revoir"}</h4>
        <p><b>Réponse${q.cs.length > 1 ? "s" : ""} attendue${q.cs.length > 1 ? "s" : ""} : ${expectedLetters(q, cur.order)}</b></p>
        <p>${esc(q.e)}</p></div>
        <div class="q-actions"><span class="kbd-hint">Entrée : question suivante</span>
        <button type="button" class="btn" data-act="next">Question suivante →</button></div>`;
    } else if (q.multi) {
      h += `<div class="q-actions"><span class="kbd-hint">Touches A à E pour choisir, Entrée pour valider</span>
        <button type="button" class="btn" data-act="validate" ${cur.sel.length === q.cs.length ? "" : "disabled"}>Valider (${cur.sel.length}/${q.cs.length})</button></div>`;
    } else {
      h += `<div class="q-actions"><span class="kbd-hint">Touches A à D pour répondre</span></div>`;
    }
    return h;
  }

  function sameSet(a, b) {
    return a.length === b.length && a.every(x => b.indexOf(x) !== -1);
  }

  function refreshPracticeCard() {
    // Met à jour la carte et les compteurs sans reconstruire les filtres (garde le défilement).
    view.innerHTML = renderPractice();
    math(view);
  }

  function practiceClick(k) {
    const cur = practice.cur;
    if (!cur || cur.done) return;
    const orig = cur.order[k];
    if (orig === undefined) return;
    if (cur.q.multi) {
      const at = cur.sel.indexOf(orig);
      if (at !== -1) cur.sel.splice(at, 1);
      else if (cur.sel.length < cur.q.cs.length) cur.sel.push(orig);
      refreshPracticeCard();
    } else {
      cur.sel = [orig];
      validatePractice();
    }
  }

  function validatePractice() {
    const cur = practice.cur;
    if (!cur || cur.done || cur.sel.length !== cur.q.cs.length) return;
    cur.done = true;
    const ok = sameSet(cur.sel, cur.q.cs);
    record(cur.q, ok);
    state.streak = ok ? state.streak + 1 : 0;
    save();
    refreshPracticeCard();
  }

  function nextPracticeClick() {
    practice.pos++;
    nextPractice();
    refreshPracticeCard();
    const card = document.getElementById("qcard");
    if (card && card.getBoundingClientRect().top < 0) card.scrollIntoView({ block: "start" });
  }

  function trainOn(objs) {
    practice.base = "all";
    practice.objs = objs;
    buildQueue();
    go("entrainement");
    scrollTop();
  }

  // ---------- Examen blanc ----------

  let exam = null;       // examen en cours
  let lastResult = null; // résultat affiché après la fin
  let timerId = null;

  function startExam() {
    let picked = [];
    DOMAINS.forEach(d => {
      const pool = shuffle(QUESTIONS.filter(q => q.d === d.id));
      picked = picked.concat(pool.slice(0, d.examCount));
    });
    picked = shuffle(picked);
    exam = {
      qs: picked,
      orders: picked.map(q => shuffle(range(q.a.length))),
      sel: picked.map(() => []),
      marked: picked.map(() => false),
      cur: 0,
      end: Date.now() + EXAM.minutes * 60000
    };
    lastResult = null;
    clearInterval(timerId);
    timerId = setInterval(tick, 1000);
    render();
    scrollTop();
  }

  function remaining() { return Math.max(0, Math.round((exam.end - Date.now()) / 1000)); }

  function fmtTime(s) {
    const m = Math.floor(s / 60), r = s % 60;
    return (m < 10 ? "0" : "") + m + ":" + (r < 10 ? "0" : "") + r;
  }

  function tick() {
    if (!exam) { clearInterval(timerId); return; }
    const s = remaining();
    const el = document.getElementById("timer");
    if (el) {
      el.textContent = fmtTime(s);
      el.classList.toggle("low", s < 300);
    }
    if (s <= 0) finishExam(true);
  }

  function renderExam() {
    if (exam) return renderExamRunning();
    if (lastResult) return renderResult(lastResult);
    return renderExamHome();
  }

  function renderExamHome() {
    const n = examTotal();
    let h = `<div class="card">
      <h2>Examen blanc</h2>
      <p class="notice"><b>Simulation interne — format non officiel.</b> Le nombre de questions, la durée et le barème de l’épreuve de chimie dépendent de ton université : réfère-toi toujours à ses modalités officielles de contrôle des connaissances.</p>
      <ul class="exam-rules">
        <li><b>${n} questions</b> tirées au hasard dans toute la banque, puis mélangées : chaque examen est différent.</li>
        <li><b>Durée : ${EXAM.minutes} minutes</b>. Le chronomètre passe à l’orange sous 5 minutes ; l’examen se termine automatiquement à zéro.</li>
        <li>Questions à une réponse et questions à réponses multiples (le nombre de réponses est indiqué). Une question n’est juste que si toutes les bonnes réponses, et elles seules, sont cochées.</li>
        <li>Aucune correction avant la fin. Tu peux revenir sur une question et la <b>marquer pour révision</b>.</li>
        <li>Note estimée sur ${EXAM.scale} (proportionnelle au nombre de bonnes réponses). <b>Seuil indicatif : ${EXAM.passScore}/${EXAM.scale}</b>. Le PASS étant un concours classant, ce seuil ne garantit rien : vise le plus haut possible.</li>
      </ul>
      <b class="small">Répartition par domaine</b>
      <ul class="dist">${DOMAINS.map(d => `<li><b>${d.examCount}</b> · D${d.id} ${esc(d.name)}</li>`).join("")}</ul>
      <div class="row" style="margin-top:18px"><button type="button" class="btn" data-act="exam-start">Commencer l’examen</button></div>
    </div>`;
    h += `<div class="card"><h3>Historique</h3>${historyTable()}</div>`;
    return h;
  }

  function historyTable() {
    if (!state.exams.length) return `<p class="muted">Aucun examen passé pour l’instant.</p>`;
    return `<div class="table-wrap"><table><thead><tr><th>Date</th><th>Note estimée</th><th>Bonnes réponses</th><th>Résultat</th></tr></thead><tbody>${
      state.exams.map(x => `<tr><td>${new Date(x.date).toLocaleDateString("fr-FR", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })}</td>
        <td><b>${fmtScore(x.score)}</b> / ${EXAM.scale}</td><td>${x.correct} / ${x.total}</td>
        <td><span class="pill ${x.passed ? "done" : "extra"}">${x.passed ? "Réussi" : "Non réussi"}</span></td></tr>`).join("")
    }</tbody></table></div>`;
  }

  function renderExamRunning() {
    const i = exam.cur;
    const q = exam.qs[i];
    const o = OBJ[q.o];
    const s = remaining();
    const answered = exam.sel.filter(x => x.length).length;
    const grid = exam.qs.map((_, k) => {
      let cls = "qnum";
      if (exam.sel[k].length) cls += " answered";
      if (exam.marked[k]) cls += " marked";
      if (k === i) cls += " current";
      return `<button type="button" class="${cls}" data-act="exam-goto" data-k="${k}" aria-label="Question ${k + 1}">${k + 1}</button>`;
    }).join("");
    return `<div class="exam-layout">
      <div class="card">
        <div class="q-meta"><span class="tag">Question ${i + 1} / ${exam.qs.length}</span><span>${o.id} · ${esc(o.title)}</span>
          ${q.multi ? `<span class="pill doing">${q.cs.length} réponses</span>` : ""}${exam.marked[i] ? `<span class="pill extra">Marquée</span>` : ""}</div>
        <div class="q-text">${esc(q.q)}</div>
        <div class="answers">${answerButtons(q, exam.orders[i], exam.sel[i], false, "exam-answer")}</div>
        <div class="q-actions">
          <div class="row">
            <button type="button" class="btn btn-ghost btn-small" data-act="exam-prev" ${i === 0 ? "disabled" : ""}>← Précédente</button>
            <button type="button" class="btn btn-ghost btn-small" data-act="exam-mark">${exam.marked[i] ? "Retirer la marque" : "Marquer pour révision"}</button>
          </div>
          <button type="button" class="btn btn-small" data-act="exam-next" ${i === exam.qs.length - 1 ? "disabled" : ""}>Suivante →</button>
        </div>
      </div>
      <aside class="card exam-side">
        <div class="exam-side-top"><span id="timer" class="timer ${s < 300 ? "low" : ""}" aria-live="off">${fmtTime(s)}</span>
          <span class="small muted">${answered} / ${exam.qs.length} répondues</span></div>
        <div class="qgrid">${grid}</div>
        <h3 class="small">Légende</h3>
        <div class="legend"><span><i class="l-ans"></i>répondue</span><span><i class="l-mark"></i>marquée</span><span><i class="l-cur"></i>en cours</span></div>
        <div class="row" style="margin-top:14px"><button type="button" class="btn btn-danger btn-small" data-act="exam-finish">Terminer l’examen</button></div>
      </aside>
    </div>`;
  }

  function examAnswer(k) {
    const i = exam.cur;
    const q = exam.qs[i];
    const orig = exam.orders[i][k];
    if (orig === undefined) return;
    const sel = exam.sel[i];
    const at = sel.indexOf(orig);
    if (q.multi) {
      if (at !== -1) sel.splice(at, 1);
      else if (sel.length < q.cs.length) sel.push(orig);
    } else {
      exam.sel[i] = at !== -1 ? [] : [orig];
    }
    render();
  }

  function examGoto(k) {
    if (k < 0 || k >= exam.qs.length) return;
    exam.cur = k;
    render();
    const grid = view.querySelector(".qgrid .current");
    if (grid && grid.scrollIntoView && window.innerWidth <= 760) grid.scrollIntoView({ block: "nearest", inline: "center" });
  }

  function finishExam(auto) {
    if (!exam) return;
    if (!auto) {
      const empty = exam.sel.filter(x => !x.length).length;
      const marked = exam.marked.filter(Boolean).length;
      let msg = "Terminer l’examen ?";
      if (empty || marked) msg = `Terminer l’examen ?\n\n• ${empty} question(s) sans réponse\n• ${marked} question(s) marquée(s) pour révision`;
      if (!window.confirm(msg)) return;
    }
    clearInterval(timerId);
    const items = exam.qs.map((q, k) => {
      const sel = exam.sel[k];
      const ok = sameSet(sel, q.cs);
      if (sel.length) record(q, ok);
      return { q, order: exam.orders[k], sel, ok };
    });
    const correct = items.filter(x => x.ok).length;
    const total = items.length;
    const score = Math.round((correct / total) * EXAM.scale * 10) / 10;
    const passed = score >= EXAM.passScore;
    state.exams.unshift({ date: Date.now(), score, correct, total, passed });
    state.exams = state.exams.slice(0, 20);
    save();
    lastResult = { items, correct, total, score, passed, auto: !!auto };
    exam = null;
    render();
    scrollTop();
  }

  function renderResult(r) {
    let h = `<div class="card">
      ${r.auto ? `<p class="notice">Temps écoulé : l’examen s’est terminé automatiquement.</p>` : ""}
      <div class="result-head">
        <div><div class="score-big">${fmtScore(r.score)}<small> / ${EXAM.scale}</small></div><div class="small muted">note estimée (${r.correct} / ${r.total} bonnes réponses)</div></div>
        <span class="verdict ${r.passed ? "pass" : "fail"}">${r.passed ? "Réussi" : "Non réussi"}</span>
      </div>
      <p class="small muted" style="margin-top:12px">Estimation linéaire sur ${EXAM.scale}, seuil indicatif ${EXAM.passScore}/${EXAM.scale}. Simulation interne : le barème réel (points négatifs, notation par item…) dépend de ton université.</p>
      <h3 style="margin-top:18px">Résultat par domaine</h3>`;
    DOMAINS.forEach(d => {
      const its = r.items.filter(x => x.q.d === d.id);
      if (!its.length) return;
      const ok = its.filter(x => x.ok).length;
      const acc = ok / its.length;
      h += `<div class="bar-line"><span class="lbl">D${d.id} · ${esc(d.name)}</span><span class="val">${ok} / ${its.length}</span>
        <div class="bar ${acc >= 0.7 ? "good" : "warn"}"><span style="width:${acc * 100}%"></span></div></div>`;
    });
    h += `</div>`;

    const failed = {};
    r.items.forEach(x => { if (!x.ok) failed[x.q.o] = (failed[x.q.o] || 0) + 1; });
    const fo = OBJECTIVES.filter(o => failed[o.id]);
    h += `<div class="card"><h3>Objectifs à retravailler</h3>`;
    if (!fo.length) h += `<p>Aucune erreur : excellent travail !</p>`;
    else {
      h += `<ul class="prio">${fo.map(o => `<li><span><b>${o.id}</b> ${esc(o.title)} <span class="small muted">(${failed[o.id]} erreur${failed[o.id] > 1 ? "s" : ""})</span></span>
        <span class="row">${cByObj[o.id].map(c => `<button type="button" class="linkbtn small" data-act="open-course" data-i="${c.i}">Module ${c.i + 1}</button>`).join(" ")}
        <button type="button" class="btn btn-small btn-ghost" data-act="train-obj" data-o="${o.id}">S’entraîner</button></span></li>`).join("")}</ul>`;
    }
    h += `</div>`;

    const errs = r.items.filter(x => !x.ok);
    if (errs.length) {
      h += `<div class="card"><details class="errors"><summary>Voir les ${errs.length} erreur${errs.length > 1 ? "s" : ""} corrigée${errs.length > 1 ? "s" : ""}</summary>`;
      errs.forEach(x => {
        const q = x.q;
        h += `<div class="err-item"><div class="q-meta"><span class="tag">${q.o}</span><span>${esc(OBJ[q.o].title)}</span></div>
          <div class="q-text">${esc(q.q)}</div><ul>${x.order.map((orig, k) => {
            const right = q.cs.indexOf(orig) !== -1;
            const chosen = x.sel.indexOf(orig) !== -1;
            const mark = right ? "✓ bonne réponse" : (chosen ? "✗ ta réponse" : "");
            const why = q.x && q.x[orig] ? ` <span class="muted">— ${esc(q.x[orig])}</span>` : "";
            return `<li class="${right ? "ok" : chosen ? "ko" : ""}"><b>${LETTERS[k]}.</b> ${esc(q.a[orig])}${mark ? ` <b>(${mark}${right && chosen ? ", cochée" : ""})</b>` : ""}${why}</li>`;
          }).join("")}</ul>
          ${x.sel.length ? "" : `<p class="small" style="color:var(--bad)"><b>Sans réponse.</b></p>`}
          <p class="small">${esc(q.e)}</p></div>`;
      });
      h += `</details></div>`;
    }
    h += `<div class="row"><button type="button" class="btn" data-act="exam-start">Nouvel examen</button>
      <button type="button" class="btn btn-ghost" data-act="exam-home">Retour à l’accueil de l’examen</button></div>`;
    return h;
  }

  // ---------- Progression ----------

  function renderProgress() {
    const g = globalStats();
    const read = COURSES.filter(c => state.read[c.id]).length;
    const best = state.exams.length ? Math.max.apply(null, state.exams.map(x => x.score)) : null;
    let h = `<div class="stats">
      <div class="stat"><div class="v">${masteredCount()} / ${OBJECTIVES.length}</div><div class="l">objectifs maîtrisés</div></div>
      <div class="stat"><div class="v">${read} / ${COURSES.length}</div><div class="l">cours lus</div></div>
      <div class="stat"><div class="v">${g.seen} / ${QUESTIONS.length}</div><div class="l">questions vues</div></div>
      <div class="stat"><div class="v">${best === null ? "—" : fmtScore(best)}</div><div class="l">meilleure note d’examen blanc (/${EXAM.scale})</div></div>
    </div>`;

    h += `<div class="card"><h3>Précision par domaine</h3>`;
    DOMAINS.forEach(d => {
      const s = domainStats(d.id);
      h += `<div class="bar-line"><span class="lbl">D${d.id} · ${esc(d.name)}</span><span class="val">${s.acc === null ? "—" : pct(s.acc)} <span class="small muted">(${s.seen} q.)</span></span>
        <div class="bar ${s.acc === null ? "" : s.acc >= 0.7 ? "good" : "warn"}"><span style="width:${s.acc === null ? 0 : s.acc * 100}%"></span></div></div>`;
    });
    h += `</div>`;

    const worked = OBJECTIVES.map(o => ({ o, s: objStats(o.id) }))
      .filter(x => x.s.seen > 0 && objStatus(x.o.id) !== "done")
      .sort((a, b) => a.s.acc - b.s.acc || b.s.seen - a.s.seen)
      .slice(0, 3);
    const never = OBJECTIVES.filter(o => objStats(o.id).seen === 0 && !state.mastered[o.id]);
    h += `<div class="card"><h3>Priorité de révision</h3>`;
    if (!worked.length && !never.length) h += `<p>Tous les objectifs sont maîtrisés. Passe un examen blanc pour confirmer !</p>`;
    else {
      h += `<ul class="prio">`;
      worked.forEach(x => {
        h += `<li><span><span class="pill extra">${pct(x.s.acc)}</span> <b>${x.o.id}</b> ${esc(x.o.title)} <span class="small muted">(${x.s.seen} q. vues)</span></span>
          <button type="button" class="btn btn-small" data-act="train-obj" data-o="${x.o.id}">S’entraîner</button></li>`;
      });
      never.slice(0, 5).forEach(o => {
        h += `<li><span><span class="pill todo">jamais abordé</span> <b>${o.id}</b> ${esc(o.title)}</span>
          <button type="button" class="btn btn-small btn-ghost" data-act="train-obj" data-o="${o.id}">S’entraîner</button></li>`;
      });
      h += `</ul>`;
      if (never.length > 5) h += `<p class="small muted" style="margin-top:8px">… et ${never.length - 5} autre(s) objectif(s) jamais abordé(s) : voir l’onglet Programme.</p>`;
    }
    h += `</div>`;

    h += `<div class="card"><h3>Historique des examens blancs</h3>${historyTable()}</div>`;
    return h;
  }

  // ---------- Événements ----------

  document.querySelectorAll(".tab").forEach(b => b.addEventListener("click", () => {
    if (b.dataset.tab === "cours") courseOpen = null;
    go(b.dataset.tab);
  }));

  view.addEventListener("click", e => {
    const el = e.target.closest("[data-act]");
    if (!el || el.disabled || el.tagName === "INPUT") return;
    const act = el.dataset.act;
    switch (act) {
      case "open-course": openCourse(+el.dataset.i); break;
      case "courses-home": courseOpen = null; render(); scrollTop(); break;
      case "train-obj": trainOn([el.dataset.o]); break;
      case "train-objs": trainOn(el.dataset.os.split(",")); break;
      case "filter": setPracticeFilter(el.dataset.f); render(); break;
      case "clear-obj": practice.objs = null; buildQueue(); render(); break;
      case "answer": practiceClick(+el.dataset.k); break;
      case "validate": validatePractice(); break;
      case "next": nextPracticeClick(); break;
      case "exam-start": startExam(); break;
      case "exam-home": lastResult = null; render(); break;
      case "exam-answer": examAnswer(+el.dataset.k); break;
      case "exam-goto": examGoto(+el.dataset.k); break;
      case "exam-prev": examGoto(exam.cur - 1); break;
      case "exam-next": examGoto(exam.cur + 1); break;
      case "exam-mark": exam.marked[exam.cur] = !exam.marked[exam.cur]; render(); break;
      case "exam-finish": finishExam(false); break;
    }
  });

  view.addEventListener("change", e => {
    const el = e.target;
    if (el.dataset && el.dataset.act === "master") {
      if (el.checked) state.mastered[el.dataset.o] = true;
      else delete state.mastered[el.dataset.o];
      save();
      const y = window.scrollY;
      render();
      window.scrollTo(0, y);
    }
  });

  document.addEventListener("keydown", e => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const t = e.target;
    if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA")) return;
    const key = e.key.toUpperCase();
    const k = LETTERS.indexOf(key);
    if (tab === "entrainement" && practice.cur) {
      if (k !== -1 && k < practice.cur.q.a.length && !practice.cur.done) { e.preventDefault(); practiceClick(k); }
      else if (e.key === "Enter") {
        if (t && t.tagName === "BUTTON" && t.closest("#view")) return; // Entrée sur un bouton : clic natif
        e.preventDefault();
        if (practice.cur.done) nextPracticeClick();
        else validatePractice();
      }
    } else if (tab === "examen" && exam) {
      if (k !== -1 && k < exam.qs[exam.cur].a.length) { e.preventDefault(); examAnswer(k); }
      else if (e.key === "Enter") {
        if (t && t.tagName === "BUTTON" && t.closest("#view")) return;
        e.preventDefault();
        examGoto(exam.cur + 1);
      }
    }
  });

  window.addEventListener("beforeunload", e => {
    if (exam) { e.preventDefault(); e.returnValue = ""; }
  });

  document.getElementById("reset-btn").addEventListener("click", () => {
    if (!window.confirm("Effacer toute ta progression (réponses, cours lus, examens) ? Cette action est définitive.")) return;
    state = blank();
    save();
    exam = null;
    lastResult = null;
    clearInterval(timerId);
    courseOpen = null;
    buildQueue();
    render();
  });

  // ---------- Application installable ----------

  const installBtn = document.getElementById("install-btn");
  let deferredPrompt = null;
  window.addEventListener("beforeinstallprompt", e => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.hidden = false;
  });
  installBtn.addEventListener("click", () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    deferredPrompt.userChoice.finally(() => { deferredPrompt = null; installBtn.hidden = true; });
  });
  window.addEventListener("appinstalled", () => { installBtn.hidden = true; deferredPrompt = null; });

  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    window.addEventListener("load", () => {
      try { navigator.serviceWorker.register("sw.js").catch(() => {}); } catch (e) { /* ignoré */ }
    });
  }

  // ---------- Démarrage ----------

  document.getElementById("hero-format").textContent =
    `Examen blanc : simulation interne de ${examTotal()} QCM en ${EXAM.minutes} min, note estimée sur ${EXAM.scale} — format non officiel, les modalités réelles sont fixées par ton université.`;
  buildQueue();
  go("programme");
})();
