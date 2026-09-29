// Vérifie les données de l’application : node tools/verifier.js
// Contrôles : structure des questions, couverture du programme, formules KaTeX.
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const ctx = {};
vm.createContext(ctx);
for (const f of ["domains", "programme", "courses", "questions"]) {
  const src = fs.readFileSync(path.join(root, "data", f + ".js"), "utf8").replace(/^const (\w+)/gm, "this.$1");
  vm.runInContext(src, ctx);
}
const { DOMAINS, OBJECTIVES, COURSES, QUESTIONS } = ctx;

let errors = 0;
const err = m => { errors++; console.log("ERREUR  " + m); };
const warn = m => console.log("ATTENTION " + m);

const OBJ = {};
OBJECTIVES.forEach(o => { if (OBJ[o.id]) err("objectif en double " + o.id); OBJ[o.id] = o; });

// ---------- Questions ----------
const seen = new Map();
let multi = 0;
QUESTIONS.forEach((q, i) => {
  const tag = `Q${i + 1} [${q.o}] ${q.q.slice(0, 60)}`;
  if (!OBJ[q.o]) err(tag + " : objectif inconnu");
  else if (OBJ[q.o].d !== q.d) err(tag + " : domaine incohérent avec l’objectif");
  if (seen.has(q.q)) err(tag + " : énoncé en double (Q" + seen.get(q.q) + ")");
  seen.set(q.q, i + 1);
  if (!q.e || q.e.length < 20) err(tag + " : explication absente ou trop courte");
  if (new Set(q.a).size !== q.a.length) err(tag + " : réponses en double");
  const isMulti = Array.isArray(q.c);
  const cs = isMulti ? q.c : [q.c];
  cs.forEach(c => { if (!Number.isInteger(c) || c < 0 || c >= q.a.length) err(tag + " : index c invalide " + c); });
  if (new Set(cs).size !== cs.length) err(tag + " : index c en double");
  const m = q.q.match(/\(Choisissez (\d) réponses\)/);
  if (isMulti) {
    multi++;
    if (q.a.length !== 5) err(tag + " : 5 réponses attendues");
    if (!m || +m[1] !== cs.length) err(tag + " : « (Choisissez N réponses) » absent ou incohérent");
    if (!q.x) warn(tag + " : pas de justification par proposition");
  } else {
    if (q.a.length !== 4) err(tag + " : 4 réponses attendues");
    if (m) err(tag + " : « Choisissez » sur une question simple");
  }
  if (q.x && q.x.length !== q.a.length) err(tag + " : x doit avoir autant d’éléments que a");
  const texts = [q.q, q.e].concat(q.a, q.x || []);
  if (texts.some(t => /<\/?[a-z]/i.test(t))) err(tag + " : balise HTML dans une question (le texte est échappé)");
});

// ---------- Cours ----------
COURSES.forEach((c, i) => {
  const tag = `Module ${i + 1} « ${c.title} »`;
  if (c.sections.length < 2 || c.sections.length > 5) err(tag + " : 2 à 5 sections attendues");
  c.o.forEach(oid => {
    if (!OBJ[oid]) err(tag + " : objectif inconnu " + oid);
    else if (OBJ[oid].d !== c.d) err(tag + " : domaine incohérent avec " + oid);
  });
  const html = c.sections.map(s => [s.h, s.p || "", (s.points || []).join(" "), s.p2 || ""].join(" ")).join(" ");
  const tags = html.match(/<\/?[a-zA-Z][^>]*>/g) || [];
  tags.forEach(t => { if (!/^<\/?(b|i|sub|sup|br)>$/.test(t)) err(tag + " : balise non autorisée " + t); });
  if (/<[a-zA-Z]/.test(html.replace(/<\/?(b|i|sub|sup|br)>/g, ""))) err(tag + " : caractère < suivi d’une lettre (utiliser \\lt)");
});

// ---------- Volumes par domaine ----------
console.log("\nDomaine | Poids | examCount | Cours | Questions | Multiples");
let wsum = 0;
DOMAINS.forEach(d => {
  wsum += d.weight;
  const qs = QUESTIONS.filter(q => q.d === d.id);
  const cs = COURSES.filter(c => c.d === d.id);
  console.log(`D${d.id} | ${d.weight} % | ${d.examCount} | ${cs.length} | ${qs.length} | ${qs.filter(q => Array.isArray(q.c)).length}`);
  if (qs.length < 2 * d.examCount) err(`D${d.id} : moins de 2 × examCount questions`);
});
if (wsum !== 100) err("somme des pondérations = " + wsum);
console.log(`Total : ${COURSES.length} cours, ${QUESTIONS.length} questions, ${multi} à réponses multiples (${Math.round(multi / QUESTIONS.length * 100)} %)`);

// ---------- Couverture du programme ----------
console.log("\nObjectif | Modules | Questions | Notions introuvables");
const norm = s => s.toLowerCase().replace(/[’']/g, "’");
OBJECTIVES.forEach(o => {
  const cs = COURSES.filter(c => c.o.includes(o.id));
  const qs = QUESTIONS.filter(q => q.o === o.id);
  if (!cs.length) err(o.id + " : aucun module");
  if (qs.length < 3) err(o.id + " : moins de 3 questions");
  const text = norm(cs.map(c => JSON.stringify(c.sections)).join(" ") + " " + qs.map(q => JSON.stringify(q)).join(" "));
  const missing = o.notions.filter(n => !text.includes(norm(n)));
  console.log(`${o.id} ${o.title} | ${cs.length} | ${qs.length} | ${missing.join(", ")}`);
});

// ---------- Formules ----------
const kctx = { window: {}, console };
kctx.self = kctx.window;
vm.createContext(kctx);
vm.runInContext(fs.readFileSync(path.join(root, "vendor/katex/katex.min.js"), "utf8"), kctx);
kctx.katex = kctx.window.katex || kctx.katex;
vm.runInContext(fs.readFileSync(path.join(root, "vendor/katex/mhchem.min.js"), "utf8"), kctx);
const katex = kctx.katex;
let formulas = 0;
function checkMath(s, where) {
  const opens = (s.match(/\\\(/g) || []).length, closes = (s.match(/\\\)/g) || []).length;
  if (opens !== closes) { err(where + " : délimiteurs \\( \\) déséquilibrés"); return; }
  const re = /\\\(([\s\S]*?)\\\)/g;
  let m;
  while ((m = re.exec(s))) {
    formulas++;
    try { katex.renderToString(m[1], { throwOnError: true, strict: "error" }); }
    catch (e) { err(where + " : formule invalide « " + m[1] + " » → " + e.message); }
  }
}
function walk(v, where) {
  if (typeof v === "string") checkMath(v, where);
  else if (Array.isArray(v)) v.forEach((x, i) => walk(x, where));
  else if (v && typeof v === "object") Object.keys(v).forEach(k => walk(v[k], where));
}
COURSES.forEach((c, i) => walk(c, "Module " + (i + 1)));
QUESTIONS.forEach((q, i) => walk(q, "Q" + (i + 1)));
OBJECTIVES.forEach(o => walk(o, "Objectif " + o.id));
console.log(`\n${formulas} formules compilées avec KaTeX.`);

console.log(errors ? `\n${errors} erreur(s).` : "\nAucune erreur.");
process.exit(errors ? 1 : 0);
