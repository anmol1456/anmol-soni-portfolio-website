# Professional Cybersecurity Portfolio - Anmol Soni

[![Available for Hire](https://img.shields.io/badge/Status-Available%20for%20Hire-brightgreen)](mailto:anmolsoni1456@gmail.com)
[![Role](https://img.shields.io/badge/Role-VAPT%20Professional-blue)](#)

A high-performance, industry-standard portfolio website designed for a Cybersecurity Professional specializing in **Vulnerability Assessment and Penetration Testing (VAPT)**.

## 🚀 Live Demo
Deploy this project to Netlify or GitHub Pages to see it in action! (Example: `https://anmol-soni.netlify.app`)

## 🛠️ Tech Stack
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Styling**: Custom CSS with Glassmorphism and CSS variables
- **Icons**: [FontAwesome 6.4+](https://fontawesome.com/)
- **Typography**: [Google Fonts (Inter)](https://fonts.google.com/specimen/Inter)
- **Data Management**: Externalized JavaScript Data Controller (`js/data.js`)
- **PDF Generation**: Python, Playwright

## ✨ Key Features
- **Dynamic Content**: All text, projects, and experiences are managed via a central `js/data.js` file for easy updates without touching HTML.
- **Industry Standard VAPT Summaries**: Professionally written descriptions focusing on OWASP Top 10, Burp Suite, and Python security automation.
- **Local Certificate Viewer**: Secure, self-contained viewer pages for internal/external certifications.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing.
- **Modern Aesthetics**: Sleek dark theme with glowing accent elements and smooth animations.

## 📂 Project Structure
```text
Portfolio-Root/
├── index.html              # Main entrance (Template)
├── README.md               # Project documentation
├── requirements.txt        # Python dependencies for tools
├── extract_v2.py           # Tool for analyzing PDF links
├── css/
│   ├── style.css           # Global styles and animations
│   └── cert-viewer.css     # Styles for certificate viewer pages
├── js/
│   └── data.js             # CENTRAL DATA FILE (Edit this to update content)
├── assets/
│   ├── img/                # All profile, project, and certificate images
│   └── docs/               # Resume and official documents
│       ├── Anmol_Soni_Resume.md          # Source Markdown Resume
│       ├── Anmol_Soni_Resume.html        # Intermediate HTML Resume
│       ├── Anmol_Soni_Resume.pdf         # Final Generated PDF
│       └── generate_high_quality_pdf.py  # Script to generate PDF
└── cert-views/             # Individual HTML pages for certifications
```

## ⚙️ How to Update Your Content
To change any information on the website (e.g., add a new project or change your email), you only need to edit one file:
1. Open `js/data.js`.
2. Update the strings in the `portfolioData` object.
3. Save the file and refresh your browser.

## 🔨 Development Tools Setup

This project includes Python scripts for generating high-quality resumes. If you are moving to a new PC, follow these steps to set up the environment:

### 1. Install Dependencies
Ensure you have Python 3.10+ installed. Then run:
```bash
# Create virtual environment (optional but recommended)
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install requirements
pip install -r requirements.txt
```

### 2. Install Browser Binaries (Critical Step)
The PDF generator uses Playwright, which requires specific browser binaries that are NOT installed by pip.
```bash
playwright install chromium
```
*If you skip this step, the PDF generation script will fail with a "Executable doesn't exist" error.*

### 3. Generate Resume PDF
To generate a new PDF from the `assets/docs/Anmol_Soni_Resume.html` file:
```bash
python assets/docs/generate_high_quality_pdf.py
```

## 📦 Deployment Instructions

### Option 1: Netlify (Recommended)
1. Go to [Netlify](https://www.netlify.com/).
2. Drag and drop the `web/` folder into the Netlify "Sites" area.
3. Your site is live!

### Option 2: GitHub Pages
1. Create a new public repository on GitHub.
2. Push the contents of the `web/` folder to your repository.
3. Go to **Settings > Pages**.
4. Select `Deploy from a branch` and choose the `main` branch.
5. Your site will be live at `https://yourusername.github.io/your-repo-name/`.

---
**Maintained by Anmol Soni** - *Cybersecurity Professional & VAPT Expert*
