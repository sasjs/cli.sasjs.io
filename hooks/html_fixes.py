"""Post-build HTML fixes for Material for MkDocs.

Material 9.8 ships two bits of markup that fail Lighthouse and that no theme
setting reaches:

  * the search panel is <div class="md-search" role="dialog"> with no accessible
    name, which fails `aria-dialog-name`;
  * the header logo <img> carries no width/height and an uninformative alt of
    "logo", which fails `unsized-images` and tells a screen reader nothing.

Both are patched across the built site (including 404.html, which MkDocs writes
outside the normal page flow). Every patch is counted and checked afterwards, so
a Material upgrade that changes this markup fails the build here rather than
quietly regressing the scores the CI Lighthouse run gates on.
"""

import pathlib
import re

# <div class="md-search" data-md-component="search" role="dialog">
SEARCH_DIALOG = re.compile(r'<div class="md-search"([^>]*?)role="dialog"')

# <img src="../img/logo/favicon/32.svg" alt="logo">  (src is relative per page)
LOGO_IMG = re.compile(r'<img src="([^"]*img/logo/[^"]+)" alt="logo">')


def on_post_build(config):
    site_dir = pathlib.Path(config["site_dir"])
    pages = sorted(site_dir.rglob("*.html"))
    if not pages:
        raise RuntimeError("hooks/html_fixes.py: no HTML in the site dir - nothing to patch")

    labelled = 0
    dialogs = 0
    logos = 0

    for page in pages:
        text = page.read_text(encoding="utf-8")

        text, patched = SEARCH_DIALOG.subn(
            r'<div class="md-search"\1role="dialog" aria-label="Search"', text
        )
        dialogs += text.count('role="dialog"')
        labelled += patched

        text, fixed = LOGO_IMG.subn(r'<img src="\1" alt="" width="32" height="32">', text)
        logos += fixed

        page.write_text(text, encoding="utf-8")

    if dialogs and labelled != dialogs:
        raise RuntimeError(
            f"hooks/html_fixes.py: {dialogs} dialogs, {labelled} labelled - "
            "the search markup changed, update SEARCH_DIALOG"
        )
    if dialogs == 0:
        raise RuntimeError(
            "hooks/html_fixes.py: no search dialog found - update SEARCH_DIALOG"
        )
    if logos == 0:
        raise RuntimeError(
            "hooks/html_fixes.py: no logo image found - update LOGO_IMG"
        )
