# Génère les icônes PNG à partir de icons/icon.svg (Chromium sans interface via Playwright).
# Usage : python3 tools/generer-icones.py
import pathlib
from playwright.sync_api import sync_playwright

root = pathlib.Path(__file__).resolve().parent.parent
svg = (root / "icons" / "icon.svg").read_text(encoding="utf-8")

def page_html(size, inner_scale, bg):
    # inner_scale < 1 : motif réduit dans la zone de sécurité (icône maskable).
    s = int(size * inner_scale)
    return f"""<html><body style="margin:0;width:{size}px;height:{size}px;background:{bg};
    display:grid;place-items:center"><div style="width:{s}px;height:{s}px">{svg.replace('<svg ', f'<svg width="{s}" height="{s}" ')}</div></body></html>"""

targets = [
    ("icon-192.png", 192, 1.0, "transparent"),
    ("icon-512.png", 512, 1.0, "transparent"),
    ("maskable-512.png", 512, 0.78, "#4b32c3"),
    ("apple-touch-icon.png", 180, 1.0, "#4b32c3"),
]
with sync_playwright() as p:
    b = p.chromium.launch()
    for name, size, scale, bg in targets:
        pg = b.new_page(viewport={"width": size, "height": size})
        pg.set_content(page_html(size, scale, bg))
        pg.screenshot(path=str(root / "icons" / name), omit_background=(bg == "transparent"))
        pg.close()
    b.close()
print("icônes générées")
