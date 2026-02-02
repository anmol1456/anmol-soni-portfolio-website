const portfolioData = {
    "personal": {
        "name": "Anmol Soni",
        "firstName": "Anmol",
        "lastName": "Soni",
        "title": "Cybersecurity Professional & VAPT Expert",
        "badge": "Available for Full-Time Roles",
        "email": "anmolsoni1456@gmail.com",
        "phone": "+91 7905826699",
        "location": "Varanasi, Uttar Pradesh, India",
        "linkedin": "https://linkedin.com/in/anmol-soni-29b566265",
        "github": "https://github.com/anmol1456",
        "resume": "assets/docs/Anmol_Soni_Resume.pdf",
        "profileImg": "assets/img/profile.jpeg",
        "summary": "Result-oriented <strong>Cybersecurity Professional</strong> specializing in Vulnerability Assessment and Penetration Testing (VAPT). Proven track record of identifying critical security flaws across web applications and networks. Hands-on experience with <strong>OWASP Top 10</strong>, industry-standard tools (Burp Suite, Nessus), and custom security automation in Python."
    },
    "experience": [
        {
            "id": "megamind",
            "title": "Networking & Cybersecurity Intern",
            "company": "Megamind IT Services",
            "date": "March 2025 - August 2025",
            "bullets": [
                "Analyzed network traffic with <strong>Wireshark</strong> to detect intrusion attempts and protocol anomalies.",
                "Engineered Python monitoring scripts that improved threat detection efficiency by 40%.",
                "Designed social engineering simulations that significantly increased employee security awareness and phishing resilience."
            ],
            "certLink": "cert-views/cert-megamind.html"
        },
        {
            "id": "bornsec",
            "title": "Security Tester Intern",
            "company": "Bornsec",
            "date": "April 2025 - June 2025",
            "bullets": [
                "Executed comprehensive penetration tests on web applications, identifying 12+ critical vulnerabilities including <strong>SQLi, XSS, and IDOR</strong>.",
                "Utilized Burp Suite and Nessus for hybrid manual/automated auditing, ensuring strict compliance with <strong>OWASP Top 10</strong> standards.",
                "Authored detailed technical reports with remediation strategies, directly improving client security posture."
            ],
            "certLink": "cert-views/cert-bornsec.html",
            "delay": "0.2s"
        },
        {
            "id": "deltaware",
            "title": "Penetration Tester Intern",
            "company": "Deltaware Solutions",
            "date": "June 2025 (1 Month)",
            "bullets": [
                "Conducted network-level vulnerability assessments using Nessus, identifying critical misconfigurations and unpatched services.",
                "Developed a multi-threaded <strong>Python-based password cracker</strong> to demonstrate risk exposure in brute-force scenarios.",
                "Collaborated on security hardening projects, reducing attack surface area for client infrastructure."
            ],
            "certLink": "cert-views/cert-deltaware.html",
            "delay": "0.4s"
        }
    ],
    "projects": [
        {
            "title": "Malware Analysis Sandbox",
            "img": "assets/img/malware_analysis_thumb.png",
            "description": "A secure virtualized environment utilizing custom Python scripts for behavior profiling and indicator of compromise (IOC) extraction from suspicious binaries.",
            "tags": ["Static/Dynamic Analysis", "Python", "Cuckoo"],
            "github": "https://github.com/anmol1456/Malware-Analysis-Sandbox"
        },
        {
            "title": "Vulnerability Automation Suite",
            "img": "assets/img/web_vulnerability_thumb.png",
            "description": "High-performance Python scanner specializing in deep-crawl detection for SQLi and XSS, with integrated logic to bypass common WAF filters.",
            "tags": ["Security Automation", "OWASP 10", "WAF Bypass"],
            "github": "https://github.com/anmol1456/Web-Application-Vulnerability-Scanner",
            "delay": "0.2s"
        },
        {
            "title": "Shield Guardian (IPS/IDS)",
            "img": "assets/img/ddos_protection_thumb.png",
            "description": "Real-time DDoS detection system utilizing rate-limiting and behavioral anomaly detection to proactively block volumetric attacks at the firewall level.",
            "tags": ["IPS/IDS", "Networking", "Firewall Automation"],
            "github": "https://github.com/anmol1456/DDOS-protect-system",
            "delay": "0.4s"
        }
    ],
    "certifications": [
        {
            "title": "Cisco Ethical Hacker",
            "date": "September 2024",
            "link": "cert-views/cert-cisco.html"
        },
        {
            "title": "EC-Council SQL Injection",
            "date": "August 2024",
            "link": "cert-views/cert-eccouncil.html"
        },
        {
            "title": "Cyber Security Threats",
            "date": "August 2024",
            "link": "cert-views/cert-greatlearning.html"
        },
        {
            "title": "Ethical Hacking Bundle",
            "date": "December 2023",
            "link": "cert-views/cert-techhacker.html"
        }
    ],
    "skills": {
        "technical": ["Vulnerability Assessment", "Penetration Testing", "Nmap", "Burp Suite", "Nessus", "Wireshark", "Python", "Linux", "SQL Injection", "Social Engineering"],
        "soft": ["Problem Solving", "Team Player", "Adaptability", "Communication", "Time Management"]
    }
};

function populatePortfolio() {
    // Basic Details
    document.querySelectorAll('.logo').forEach(el => el.textContent = portfolioData.personal.name.toUpperCase());
    document.title = `${portfolioData.personal.name} | ${portfolioData.personal.title}`;

    const heroH1 = document.querySelector('.hero h1');
    if (heroH1) heroH1.innerHTML = `${portfolioData.personal.firstName} <span>${portfolioData.personal.lastName}</span>`;

    const heroP = document.querySelector('.hero p');
    if (heroP) heroP.innerHTML = portfolioData.personal.summary;

    document.querySelectorAll('a[href*="mailto"]').forEach(el => el.href = `mailto:${portfolioData.personal.email}`);
    document.querySelectorAll('a[href*="tel"]').forEach(el => el.href = `tel:${portfolioData.personal.phone.replace(/\s+/g, '')}`);
    document.querySelectorAll('a[href*="linkedin.com"]').forEach(el => el.href = portfolioData.personal.linkedin);
    document.querySelectorAll('a[href*="github.com"]').forEach(el => el.href = portfolioData.personal.github);
    document.querySelectorAll('a[download]').forEach(el => el.href = portfolioData.personal.resume);

    const profileImg = document.querySelector('.hero-image img');
    const loader = document.querySelector('.image-loader');

    if (profileImg) {
        profileImg.onload = () => {
            profileImg.classList.add('loaded');
            if (loader) loader.style.display = 'none';
        };

        // Handle cached images
        if (profileImg.complete && profileImg.naturalHeight !== 0) {
            profileImg.classList.add('loaded');
            if (loader) loader.style.display = 'none';
        }

        profileImg.src = portfolioData.personal.profileImg;
    }

    // Experience
    const expGrid = document.querySelector('.experience-grid');
    if (expGrid && portfolioData.experience) {
        expGrid.innerHTML = portfolioData.experience.map(exp => `
            <div class="exp-card animate" ${exp.delay ? `style="animation-delay: ${exp.delay};"` : ''}>
                <div class="exp-info">
                    <h3>${exp.title}</h3>
                    <div class="company">${exp.company}</div>
                    <ul>
                        ${exp.bullets.map(b => `<li>${b}</li>`).join('')}
                    </ul>
                    <a href="${exp.certLink}" class="btn btn-secondary"
                        style="margin-top: 1.5rem; font-size: 0.8rem; padding: 0.6rem 1.2rem;">View Certificate <i
                            class="fa-solid fa-up-right-from-square"></i></a>
                </div>
                <div class="exp-date">${exp.date}</div>
            </div>
        `).join('');
    }

    // Projects
    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid && portfolioData.projects) {
        projectsGrid.innerHTML = portfolioData.projects.map(proj => `
            <div class="project-card animate" ${proj.delay ? `style="animation-delay: ${proj.delay};"` : ''}>
                <div class="project-img">
                    <img src="${proj.img}" alt="${proj.title}">
                </div>
                <div class="project-content">
                    <h3>${proj.title}</h3>
                    <p>${proj.description}</p>
                    <div class="tags">
                        ${proj.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                    </div>
                    <a href="${proj.github}" target="_blank"
                        class="project-link">View Repository <i class="fa-brands fa-github"></i></a>
                </div>
            </div>
        `).join('');
    }

    // Certifications
    const certsGrid = document.querySelector('.certs-grid');
    if (certsGrid && portfolioData.certifications) {
        certsGrid.innerHTML = portfolioData.certifications.map(cert => `
            <a href="${cert.link}" class="cert-card animate" style="text-decoration: none; color: inherit;">
                <div class="cert-icon"><i class="fa-solid fa-certificate"></i></div>
                <div class="cert-info">
                    <h4>${cert.title}</h4>
                    <p>${cert.date}</p>
                </div>
            </a>
        `).join('');
    }

    // Skills
    const skillCategories = document.querySelectorAll('.skill-category');
    if (skillCategories.length >= 2) {
        skillCategories[0].querySelector('.skill-list').innerHTML = portfolioData.skills.technical.map(s => `<div class="skill-item">${s}</div>`).join('');
        skillCategories[1].querySelector('.skill-list').innerHTML = portfolioData.skills.soft.map(s => `<div class="skill-item">${s}</div>`).join('');
    }

    // Footer
    const footerP = document.querySelector('footer p');
    if (footerP) footerP.innerHTML = `&copy; ${new Date().getFullYear()} ${portfolioData.personal.name}. Built for the Cybersecurity community.`;
}

document.addEventListener('DOMContentLoaded', populatePortfolio);
