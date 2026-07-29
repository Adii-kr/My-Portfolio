# Aditya Kumar – Personal Portfolio Website

A responsive personal portfolio website built with vanilla HTML, CSS, and JavaScript — no frameworks, no build step. It showcases skills, projects, certificates, and contact details in a single-page layout, with SEO and Open Graph metadata set up for sharing.

**Live demo:** _add your deployed link here (e.g. GitHub Pages / Netlify / Vercel)_

## Features

- Sticky navbar with a mobile hamburger menu and smooth-scroll section links
- Hero section introducing the developer, with a link to GitHub
- About section summarizing background and current focus areas
- Skills grid rendered with Font Awesome brand icons (Java, Python, JavaScript, HTML5, React, CSS3, Bootstrap, GitHub)
- Project showcase grid with image overlays linking to live projects/repos
- Certificate gallery displaying nine professional certifications
- Contact section with address, social links, email, and phone, plus a floating WhatsApp chat button
- Downloadable resume link (Java Full-Stack resume PDF)
- Back-to-top button that appears on scroll
- SEO-friendly `<meta>` tags, Open Graph, and Twitter Card metadata for link previews

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (`style.css` for base styles, `responsive.css` for breakpoints) |
| Icons | [Font Awesome 6.4.0](https://fontawesome.com/) (via CDN) |
| Interactivity | Vanilla JavaScript (`script.js`) — mobile menu toggle, back-to-top button |

No package manager, bundler, or framework is used — everything runs directly in the browser.

## Project Structure

```
Portfolio/
├── index.html                 # Main page markup and content
├── style.css                   # Base styles
├── responsive.css              # Media queries / responsive breakpoints
├── script.js                   # Mobile menu + back-to-top logic
└── src/
    ├── logo.png
    ├── whatsapp.png
    ├── Aditya_Kumar_Frontend_Developer_Resume.pdf
    ├── Aditya_Kumar_Java_FullStack_Resume.pdf
    ├── project/
    │   ├── project 1.png       # Salon website (Bootstrap)
    │   ├── project 2.png       # Real-time chat app (Socket.IO)
    │   ├── project 3.png       # Hostel website (HTML/CSS/JS)
    │   ├── project 4.png       # Car game (HTML/CSS/JS)
    │   ├── project 5.png       # Digital Restaurant Menu (Servlets/JSP/Hibernate/MySQL)
    │   ├── project 6.png       # Blog Website (Servlets/JSP/SpringBoot/MySQL)
    │   ├── project 7.png       # College Website (ReactJS/NodeJS/PostgreSQL)
    │   └── project 8.png       # Weather App (React.js/Hooks/OpenWeather API)
    └── certificates/
        ├── certificate 1.png   # Java Programming
        ├── certificate 2.png   # DSA with Java
        ├── certificate 3.png   # Web Development
        ├── certificate 4.png   # React JS
        ├── certificate 5.png   # AutoDesk AutoCAD
        ├── certificate 8.jpeg  # Data Analytics on AWS (Amazon)
        └── certificate 9.png   # Introduction to LLM (Google)
```

## Customization

- **Personal info:** update the name, bio, and description text in the `home` and `about` sections of `index.html`, and the meta tags in `<head>` for SEO.
- **Skills:** add or remove `<i>` icon entries in the `#skills` section (Font Awesome brand classes).
- **Projects:** update the `href`, image, and `alt`/overlay text for each `.project-item` in the `#project` section. Several project links currently point to `#` and should be updated to live URLs or repos.
- **Certificates:** add new certificate images to `src/certificates/` and a matching `.certificate-item` entry.
- **Contact details:** update address, email, phone, and social links in the `#contact` section and footer.
- **Resume:** replace the PDFs in `src/` and update the `href`/`download` attributes on the resume link.
- **Open Graph image:** the `og:image` and `og:url` meta tags currently point to placeholder `yourdomain.com` values — update these once the site is deployed.

## Known Limitations

- Several project links (Salon Website, ChatApp, Car Game) currently point to `#` instead of live URLs or GitHub repos.
- Certificate and project links open `#` in a new tab rather than the certificate image or verification page.
- Image paths use root-relative URLs (`/src/...`), so the site must be served from the domain/subdirectory root, or these paths should be changed to relative (`src/...`) if hosting from a subfolder like GitHub Pages project sites.

## Author

**Aditya Kumar** — Frontend Developer & Java Programmer
[GitHub](https://github.com/ADI-7065) · [LinkedIn](https://www.linkedin.com/in/adityakumar-fullstack/) · [Instagram](https://www.instagram.com/aditya_may_16/) · [Twitter/X](https://x.com/kumar_adit64273?s=11)
