# JUBIA Website

Bilingual (English / Arabic, RTL) static website for **JUBIA Armor Joint – AJ Type**.
Plain HTML, CSS and JavaScript. No build step, no Node.js, no database.

```
index.html          page content (English, default)
css/style.css       styles (responsive, RTL-aware)
js/main.js          settings (CONFIG), Arabic translations, menu, form
assets/images/      logo, favicon and PLACEHOLDER images
```

## 1. Settings you must edit (top of `js/main.js`)

| Setting | What to put |
|---|---|
| `whatsapp` | Number in international format, digits only, e.g. `201001234567`. A warning shows on the page while it is still `000000000000`. |
| `phoneDisplay` | Phone as you want it displayed. |
| `phoneTel` | Same phone with `+` and no spaces, for call links. |
| `email` | Your real email. |
| `formEndpoint` | Leave `""` to use the WhatsApp quotation workflow. Or paste a form-service URL (e.g. a free Formspree form: `https://formspree.io/f/xxxx`). |

**How the quote form works:** with `formEndpoint` empty, the visitor fills the form, sees a preview of the message, and must click "Confirm and open WhatsApp". Nothing is sent before that, and the site never claims a submission succeeded. With a `formEndpoint`, a success message appears only if the service answers with success.

## 2. Placeholders to replace

| Placeholder | Where | How |
|---|---|---|
| Logo | `assets/images/logo.svg` | Replace the file (keep the name, or edit the `<img>` in `index.html`). |
| Favicon | `assets/images/favicon.svg` | Replace the file. |
| Hero image | `assets/images/hero-placeholder.svg` | Add your photo, e.g. `hero.jpg`, and change the `src` in `index.html`. |
| Product images (3) | `assets/images/product-1.svg` … `product-3.svg` | Add real photos (`.jpg`/`.webp`, about 1200 px wide, compressed) and update the three `src` values. Remove the "Placeholder image" captions (`data-i18n="ph"`). |
| Social preview image | `<meta property="og:image">` in `index.html` | Use the full `https://…` URL of a 1200×630 JPG/PNG. |
| Telephone, WhatsApp, email | `CONFIG` in `js/main.js` | See section 1. |
| Address | `index.html` (`data-i18n="addr"`) and `addr` in `js/main.js` (Arabic) | Replace `[Your company address here]` in both. |
| Domain in titles | `index.html` | Optional: add a canonical URL once you have your domain. |
| Datasheet | Product section of `index.html` | Put a real PDF in `assets/`, then follow the comment next to the disabled "coming soon" button. No datasheet was invented. |
| Pending specifications | Product section of `index.html` + `js/main.js` | Move items from "Awaiting confirmation" to "Confirmed" only once JUBIA verifies them. |
| Arabic text | `AR` object in `js/main.js` | Have a native Arabic speaker review it before launch. |

## 3. Editing text

English text is in `index.html`. Each element has a `data-i18n="key"` attribute; its Arabic version is the same key in the `AR` object in `js/main.js`. Edit both. Keep the product name *JUBIA Armor Joint – AJ Type* untranslated.

## 4. Deploy to GitHub Pages (beginner steps)

1. Create a free account at <https://github.com>.
2. Click **+** (top right) → **New repository**. Name it (e.g. `jubia-website`), choose **Public**, click **Create repository**.
3. Click **uploading an existing file**. Unzip this project on your computer, then drag the **contents** (`index.html`, `css`, `js`, `assets`, `README.md`) into the page. `index.html` must be at the top level, not inside another folder. Click **Commit changes**.
4. Go to **Settings** → **Pages** (left menu).
5. Under **Build and deployment → Source**, choose **Deploy from a branch**. Under **Branch**, choose `main` and `/ (root)`, then **Save**.
6. Wait 1–2 minutes and refresh the Pages screen. It shows your address: `https://YOUR-USERNAME.github.io/jubia-website/`.
7. To update later: open a file in the repository, click the pencil icon, edit, and commit. To add images use **Add file → Upload files**.

Custom domain: Settings → Pages → *Custom domain*.

## 5. Test locally

Open `index.html` in a browser by double-clicking it. Check both languages, the mobile menu (narrow the window) and the form.
