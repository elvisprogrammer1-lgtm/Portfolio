# Elvis Niyomwungere, portfolio

Personal portfolio of Elvis Niyomwungere, software architect and full-stack developer.
Plain HTML, CSS and a few lines of JavaScript. No build step, no dependencies.

## Deploy on GitHub Pages

This repository includes a GitHub Actions workflow that deploys the static site whenever a change
is pushed to `main`.

1. Create a repository on GitHub. For a personal site at the root domain, name it
   `<your-username>.github.io`. Otherwise the URL will be
   `https://<your-username>.github.io/<repo-name>/`.
2. Push the contents of this folder to the repository root (keep `index.html` at the top level):

   ```bash
   git init
   git add .
   git commit -m "Add portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

3. On GitHub, open **Settings > Pages** and set **Build and deployment > Source** to
   **GitHub Actions**.
4. The workflow deploys on the first push to `main`. Check the **Actions** tab for its status;
   the published URL appears in **Settings > Pages**.

To use your own domain, add it under **Settings > Pages > Custom domain** and follow GitHub's DNS instructions.

### Contact form

GitHub Pages only hosts static files; it cannot run a private server-side backend. To deliver
contact form messages without opening the visitor's email app, connect the form to a hosted form
service such as Formspree. Create the form in that service, verify the receiving email address,
then use its form endpoint in the HTML. The service provides its own dashboard for submissions;
no admin dashboard needs to be built into this portfolio.

## Preview locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Customize

| What | Where |
| --- | --- |
| Text, projects, experience, links | `index.html` |
| Colors, fonts, spacing | `:root` variables at the top of `assets/css/style.css` |
| Portrait | replace `assets/img/elvis.png` (keep a square-ish crop; the two detection boxes in the hero are positioned in `.box-face` and `.box-laptop` in the CSS) |
| CV download | replace `assets/Elvis_Niyomwungere_Resume.pdf` (keep the file name, or update the two links in `index.html`) |

Fonts (Bricolage Grotesque and Public Sans) load from Google Fonts. If they are blocked, the page falls back to system fonts.
