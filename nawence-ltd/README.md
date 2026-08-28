# NAWENCE LTD — Official Corporate Website

Official static corporate website for **NAWENCE LTD** (Company Number: **16612355**), a private limited company incorporated in England and Wales on 29 July 2025, specializing in mobile application development, digital products, and Google Play publishing preparation.

Designed for instant, free deployment on **GitHub Pages** with **zero server dependencies** and zero build steps.

---

## IMPORTANT — REPLACE THESE BEFORE PUBLISHING

Before deploying the website to production or submitting the URL to your **Google Play Console organization account**, search and replace the following placeholder strings across the project files:

| Placeholder | Description | Example Replacement |
| :--- | :--- | :--- |
| `YOUR OFFICIAL EMAIL` | Official contact / support email | `contact@nawence.com` |
| `YOUR OFFICIAL PHONE` | Official business phone number | `+44 20 1234 5678` |
| `YOUR GITHUB URL` | Organization GitHub profile | `https://github.com/nawence` |
| `YOUR LINKEDIN URL` | Company LinkedIn page (or remove if none) | `https://linkedin.com/company/nawence-ltd` |
| `YOUR WEBSITE URL` | Live website address (GitHub Pages or Custom Domain) | `https://nawence.github.io/website` or `https://nawence.com` |

---

## 1. PROJECT STRUCTURE

```text
NAWENCE-LTD/
│
├── index.html          # Main homepage (Hero, About, Services, Google Play, Apps, Why Us, Contact)
├── company.html        # Statutory company profile & Companies House verification page
├── privacy.html        # Comprehensive UK GDPR compliant Privacy Policy
├── terms.html          # Official Website Terms & Conditions under English law
├── style.css           # Pure CSS3 modern dark theme (responsive, accessible, fast)
├── script.js           # Vanilla JavaScript (nav, interactive checklist, mailto generator, dynamic year)
├── robots.txt          # Search engine crawler directives
├── sitemap.xml         # XML Sitemap for search indexing
├── README.md           # This setup & deployment documentation
│
└── assets/
    ├── logo.svg        # Modern vector geometric brand logo
    ├── favicon.svg     # Scalable dark tile favicon
    └── images/
        ├── tech-hero.svg            # Hero abstract interface graphic
        └── app-placeholder.svg     # Coming soon / app card artwork
```

---

## 2. GITHUB PAGES DEPLOYMENT STEPS (NO BUILD NEEDED)

Because this website is built with pure semantic **HTML5**, **CSS3**, and **Vanilla JavaScript**, you do not need Node.js, npm, or any build commands on GitHub:

1. **Create a GitHub Repository**:
   - Go to [GitHub](https://github.com/) and click **New Repository**.
   - Name it (e.g. `nawence-website` or `<your-username>.github.io`).
   - Set visibility to **Public**.
2. **Upload All Files**:
   - Upload all files from this directory (`index.html`, `style.css`, `script.js`, `privacy.html`, `terms.html`, `company.html`, `robots.txt`, `sitemap.xml`, and the `assets/` folder) directly to the repository root.
3. **Enable GitHub Pages**:
   - In your repository, go to **Settings** > **Pages** (in the left sidebar).
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Under **Branch**, select `main` (or `master`) and folder `/ (root)`.
   - Click **Save**.
4. **Access Your Live Site**:
   - Within 1–2 minutes, GitHub will generate your live URL (e.g. `https://<username>.github.io/<repo-name>/`).
   - Open the URL in any browser to verify your site.

---

## 3. HOW TO UPDATE EMAIL, PHONE, AND CONTACT CHANNELS

1. **Email & Phone in `index.html`**:
   - Open `index.html` and search for `YOUR OFFICIAL EMAIL` and `YOUR OFFICIAL PHONE`.
   - Replace with your actual contact email and telephone number.
2. **Email in `script.js`**:
   - Open `script.js` and locate:
     ```javascript
     const officialEmail = 'YOUR OFFICIAL EMAIL';
     ```
   - Update it with your active business inbox address so the contact form properly routes emails.
3. **Legal Pages**:
   - Check `privacy.html`, `terms.html`, and `company.html` for `YOUR OFFICIAL EMAIL` to ensure regulatory consistency.

---

## 4. HOW TO ADD FUTURE PUBLISHED APPS

When NAWENCE LTD releases an Android or cross-platform application on Google Play, open `index.html` and locate the `<div class="apps-container">` section (around line 340).

Replace the `.app-empty-state` container with your app card HTML:

```html
<article class="app-card">
  <div class="app-icon-wrapper">
    <img src="assets/images/my-app-icon.png" alt="App Name Icon" class="app-icon-img" />
  </div>
  <div class="app-info">
    <span class="app-category-tag">Productivity / Utility</span>
    <h4>Your App Name</h4>
    <p>A concise description of the application's core functionality and user benefits.</p>
    <div class="app-feature-pills">
      <span class="app-feature-pill">Android 14+</span>
      <span class="app-feature-pill">Clean UI</span>
      <span class="app-feature-pill">Offline Capable</span>
    </div>
  </div>
  <div>
    <a href="https://play.google.com/store/apps/details?id=com.nawence.yourapp" target="_blank" rel="noopener" class="btn btn-primary btn-sm">
      Get it on Google Play
    </a>
  </div>
</article>
```

---

## 5. CONNECTING A CUSTOM DOMAIN (e.g. nawence.com)

To use your own domain name with GitHub Pages:

1. **Add CNAME file**:
   - Create a file named `CNAME` in the repository root containing your domain (e.g. `nawence.com`).
2. **Configure DNS Records** at your domain registrar (e.g. Namecheap, Cloudflare, GoDaddy):
   - **Apex domain (`@` / `nawence.com`)**: Add 4 `A` records pointing to GitHub Pages IP addresses:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - **`www` subdomain**: Add a `CNAME` record with host `www` pointing to `<username>.github.io`.
3. **Enable HTTPS**:
   - In GitHub repository **Settings** > **Pages**, enter your custom domain and check **Enforce HTTPS**.

---

## 6. GOOGLE PLAY CONSOLE ORGANIZATION ACCOUNT CHECKLIST

Before submitting this website URL to the **Google Play Developer Console** for organizational identity verification:

- [ ] **Exact Legal Match**: Verify that the company name on the website matches your Companies House registration exactly (**NAWENCE LTD**).
- [ ] **Company Number**: Ensure Company Number **16612355** is visible (found in the header, about section, company page, and footer).
- [ ] **Working Privacy Policy**: Ensure `privacy.html` is accessible and linked in the footer.
- [ ] **Corporate Email**: Ensure the contact email matches your domain (e.g. `@nawence.com`) or your official business communications channel.
- [ ] **Official Verification**: Verify that the Companies House link on `company.html` correctly points to:
  `https://find-and-update.company-information.service.gov.uk/company/16612355`
- [ ] **No Misleading Claims**: Confirm the site does not claim unauthorized partnerships or certifications.

---

## 7. STATUTORY COMPANY INFORMATION

- **Legal Entity Name:** NAWENCE LTD
- **Company Registration Number:** 16612355
- **Company Type:** Private company limited by shares
- **Jurisdiction:** England and Wales
- **Incorporation Date:** 29 July 2025
- **Governing Legislation:** UK Companies Act 2006
