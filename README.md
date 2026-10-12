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

GitHub Pages only hosts static files; it cannot run a private server-side backend. The contact
form submits to the configured Formspree endpoint, which sends submissions to
`elvisprogrammer1@gmail.com`:

The endpoint is configured as `FORMSPREE_ENDPOINT` near the top of `assets/js/main.js`. Form
submissions are sent over HTTPS, and the UI reports success only after Formspree accepts them.

Formspree's dashboard is optional for reviewing submissions; this portfolio does not need its own
administrator dashboard. The form endpoint identifier is public by design in a static site; never
put a private API key or other secret in the client-side files.

### Mobile projects

The portfolio presents IcoWipfuza and Burundi Services as Flutter projects in development. Their
descriptions and technology tags reflect the mobile codebases in the local `D:\PROJECTS` workspace;
they are not represented as released or production-deployed applications.

### Project images

Put each sanitized, publishable screenshot in `assets/img/projects/` using the exact name below.
The site checks these paths automatically: if an image exists, it replaces the placeholder; if it
does not, the placeholder remains. Use WebP files and keep the listed filenames unchanged.

| Project | Image filename |
| --- | --- |
| SmartVisionLab | `smartvision.webp` |
| SIGAF-Primature | `sigaf.webp` |
| PORTAIX | `portaix.webp` |
| IcoWipfuza | `icowipfuza.webp` |
| Burundi Services | `burundi-services.webp` |
| BeYou Nexus | `beyou-nexus.webp` |
| SOCOU-U | `socou-u.webp` |
| eCivilBurundi | `ecivilburundi.webp` |
| eID GovTech | `eid-govtech.webp` |

After copying an image into the folder, commit and push the file to `main` so GitHub Pages can
publish it. The browser may need a refresh after deployment. Never publish screenshots containing
personal records, credentials, signatures, internal URLs, or other confidential data.

### Custom domain

A custom domain is optional. Buy/register a domain with a registrar, add it under
**Settings > Pages > Custom domain**, then configure the DNS records requested by GitHub. Keep
the automatically provided `github.io` address if you do not want to manage a domain.

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
| CV downloads | replace `assets/Elvis_Niyomwungere_CV_FR.pdf` and `assets/Elvis_Niyomwungere_CV_EN.pdf`; both download links follow the selected site language |

Fonts (Bricolage Grotesque and Public Sans) load from Google Fonts. If they are blocked, the page falls back to system fonts.
