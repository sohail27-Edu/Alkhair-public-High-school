Al-Khair Public High School Umary — Official Website
A simple, static, responsive website for Al-Khair Public High School Umary, Umary Mamund, District Bajaur, Khyber Pakhtunkhwa, Pakistan.
Built with plain HTML5, CSS3 and vanilla JavaScript — no backend, no database, no build tools. Works directly on GitHub Pages.
Motto: "Come and Read, Go and Lead"
⚠️ IMPORTANT — About the Images in This Project
No real school photographs or logo file were supplied when this website was built. Every image you see (school building, gate, faculty, students, sports, awards, exams, events, results record, and the logo) is a clearly labeled placeholder graphic generated in the school's colour palette — not a stock photo, and not an AI-generated person. Each placeholder states plainly which real file it stands in for, e.g. "File: school/school-front.jpg".
Before publishing this site, replace every placeholder with the school's real photographs and logo, using the exact same filenames listed below so nothing else in the site needs to change.
Replace this file...
...with a real photo of
images/logo/logo.png
The official school logo (square, transparent background recommended)
images/school/school-front.jpg
The school's front/building
images/school/school-gate.jpg
The school gate/premises
images/faculty/principal.jpg
Principal Bahader Said
images/faculty/faculty-group-01.jpg / 02.jpg
Faculty/staff group photos
images/students/students-01.jpg / 02.jpg / 03.jpg
Students in class / activities / leadership
images/activities/activity-01.jpg / 02.jpg
Classroom activities
images/sports/sports-01.jpg / 02.jpg
Sports day / sports activities
images/awards/award-01.jpg / 02.jpg
Award ceremonies
images/exams/exam-01.jpg
Examinations
images/events/school-event-01.jpg / 02.jpg
School events
images/results/results-record.jpg
The official BISE results record/document
After replacing, also regenerate images/logo/favicon.ico from the new logo (any free favicon generator works), or simply keep using the PNG logo — browsers will still show it as a tab icon fallback in most cases.
Tip: Keep photos reasonably optimized for the web (roughly under 300–500 KB each, and no larger than ~1600px on the long edge) so the site stays fast on mobile data connections.
📁 File Structure
/
├── index.html          Home
├── about.html           About School (history, philosophy, vision, mission, Principal's message)
├── faculty.html          Faculty
├── students.html          Student Life
├── academics.html          Academics & subjects
├── admissions.html          Admission info + online application form
├── results.html          BISE results & achievements
├── gallery.html          Filterable photo gallery + lightbox
├── news.html            News & Events
├── contact.html          Contact details + map placeholder
│
├── css/
│   └── style.css        All site styling (single stylesheet)
│
├── js/
│   ├── script.js         Shared: mobile nav, active link, scroll-reveal
│   ├── application.js     Admission form: ID generation, preview, print
│   └── gallery.js         Gallery filtering + lightbox
│
├── images/
│   ├── logo/             logo.png, favicon.ico
│   ├── school/            school-front.jpg, school-gate.jpg
│   ├── faculty/            principal.jpg, faculty-group-01/02.jpg
│   ├── students/           students-01/02/03.jpg
│   ├── activities/          activity-01/02.jpg
│   ├── sports/             sports-01/02.jpg
│   ├── awards/             award-01/02.jpg
│   ├── exams/              exam-01.jpg
│   ├── events/             school-event-01/02.jpg
│   └── results/            results-record.jpg
│
└── README.md
🚀 Publishing on GitHub Pages
Create a new GitHub repository (e.g. al-khair-school-website).
Upload all files and folders exactly as they are, keeping the folder structure above.
In the repository, go to Settings → Pages.
Under "Build and deployment", set Source: Deploy from a branch, branch: main, folder: / (root). Save.
GitHub will publish the site at: https://<your-username>.github.io/<repository-name>/
Wait 1–2 minutes, then visit the link. index.html loads automatically.
No server, database, PHP, or Node.js is required — everything runs in the visitor's browser.
📝 What Still Needs to Be Added
The website intentionally leaves a few things as clearly marked placeholders, rather than inventing information that was not supplied:
Real photographs and logo — see the table above.
Google Maps location — the school's Contact page has a marked placeholder in contact.html (search for map-placeholder). Once the official Google Maps link/embed is available, replace that block with an embedded map iframe.
Individual faculty names/designations — the Faculty page currently shows the Principal (Bahader Said) by name, and group photos labeled "Our Faculty." Add individual teacher profiles once names and subjects are confirmed by the school.
Event dates — the News & Events page intentionally does not show invented dates. Add real dates once confirmed.
🎓 Admission Application Form — How It Works
The form on admissions.html:
Collects student, parent/guardian, address and document-checklist information.
On submit, generates a unique Application ID (e.g. AKPHS-2026-48213) entirely in the browser using JavaScript — no server involved.
Shows a printable preview of the completed application.
Lets the applicant print or save as PDF (via the browser's print dialog) and clearly states that the application must be printed and submitted physically to the school, since there is no backend to receive online submissions.
No data is sent anywhere or stored anywhere — everything happens locally in the visitor's browser and disappears when they close the tab.
✅ Design Notes
Palette: deep school green (#0F5132 / #0B3A24) with gold accents (#C89B3C), on a warm cream background — chosen to complement a traditional school/Islamic-institution logo without overpowering it.
Typography: Lora (serif, headings) + Inter (sans-serif, body), loaded from Google Fonts.
Fully responsive from small phones up to desktop; mobile nav collapses into a toggled menu.
Scroll-reveal animations are subtle and respect prefers-reduced-motion.
Semantic HTML, visible focus states, alt text on every image, and a "Skip to main content" link for keyboard/screen-reader users.
🔧 Local Preview
No build step needed. Either:
Open index.html directly in a browser, or
Run a simple local server from the project folder, e.g. python3 -m http.server 8000 and visit http://localhost:8000.
This website was built to represent Al-Khair Public High School Umary accurately — using only the information supplied, with clearly marked placeholders wherever real content (photos, map, dates) was not yet available.
