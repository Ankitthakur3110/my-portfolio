# Ankit Thakur — Portfolio

A modern, single-page portfolio built with **Next.js 14**, **Material UI**, and **Framer Motion**.  
Deployed automatically to **GitHub Pages** via GitHub Actions on every push to `main`.

---

## ✨ Features

- **Single-page** with smooth-scroll navigation
- **Framer Motion** animations — scroll-triggered reveals, staggered entries, floating orbs
- **Material UI** components — fully themed dark mode
- **Fully responsive** — mobile, tablet, desktop
- **Static export** — zero server required, perfect for GitHub Pages
- **Sections**: Hero · About · Experience · Skills · Achievements · Education · Contact

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Local Development

```bash
# 1. Clone the repo
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## 📦 Build & Export

```bash
npm run build
# Outputs static files to /out directory
```

---

## 🌐 Deploy to GitHub Pages

### Step 1 — Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**

### Step 2 — Configure base path (if needed)

If your repo is named anything **other than** `<username>.github.io`, uncomment and update these two lines in `next.config.js`:

```js
basePath: '/your-repo-name',
assetPrefix: '/your-repo-name/',
```

Replace `your-repo-name` with your actual repo name.

### Step 3 — Push to main

```bash
git add .
git commit -m "initial portfolio"
git push origin main
```

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:
1. Install dependencies
2. Build and export the static site
3. Deploy `/out` to GitHub Pages

Your portfolio will be live at:  
`https://<your-username>.github.io/<your-repo-name>/`

---

## 🎨 Customisation

All personal content lives in **one file**:

```
src/data/portfolio.ts
```

Update your name, summary, experience, skills, etc. there — everything else updates automatically.

### Changing the theme

Edit `src/theme/theme.ts` to change colours, fonts, or component overrides.

---

## 🗂 Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions CI/CD
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout, fonts, metadata
│   │   └── page.tsx          # Composes all sections
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── AchievementsSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── SectionWrapper.tsx
│   │   └── ThemeRegistry.tsx
│   ├── data/
│   │   └── portfolio.ts      # ← Edit your content here
│   └── theme/
│       └── theme.ts          # MUI theme configuration
├── next.config.js
├── package.json
└── tsconfig.json
```

---

## 📄 License

MIT — free to use and adapt.
