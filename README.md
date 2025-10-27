# YouTube Links SPA

This is a tiny single-page app that displays multiple traffic camera links in Jamaica.

Files added:

- `index.html` — SPA entrypoint
- `src/styles.css` — styles for layout, cards and modal
- `src/main.js` — app logic: render cards, parse YouTube IDs, open modal player

How to run

1. Open `index.html` in your browser (double-click or drag to browser). For full embedded playback and to avoid some browser restrictions, serving over HTTP is preferred.

2. To serve locally using Python (if installed):

```powershell
cd "c:\Users\Kraine\Desktop\ProgrammingShenanigans\jamaica_live_cams"
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

3. Or use VS Code Live Server extension to serve the folder.

Usage

- Once page is loaded, videos will autoplay. All regular controls are available.
