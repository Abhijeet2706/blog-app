# Frontend Developer Test Project

## Overview

This project is a modern, responsive frontend application built using React.js, Next.js, and Tailwind CSS. It demonstrates a strong understanding of component-based architecture, responsive design, and clean project structure. The application features a dynamic header with dropdown menus, a responsive mobile menu, a feature-rich footer, and an optional Blogs section with full CRUD functionality and an enhanced UI/UX.
🧠 Additionally, virtual scrolling has been implemented in the blog listing to efficiently render large datasets and enhance performance.


## 🚀 Live Demo

[![Click Here](https://img.shields.io/badge/Click%20Here-blue?style=for-the-badge)](https://blog-app-three-henna.vercel.app/)
---

## 🚀 Features


- **Framework:** React.js (with Next.js for routing and SSR)
- **CSS Framework:** Tailwind CSS (utility-first, highly customizable)
- **Header:**
  - Desktop navigation with dropdown menus
  - Mobile navigation with dropdown and hamburger menu
  - Theme toggle (light/dark mode)
  - Responsive design for all device sizes
- **Footer:**
  - Multi-column navigation
  - Social media icons (LinkedIn, GitHub, Instagram, X, YouTube)
  - Always visible, accessible, and styled for both themes
  - PCI badges and company info
- **Blogs Page:**
  - Blog listing with cards, images, and details
  - Dynamic blog details page (with breadcrumb)
  - Create Blog page with modern form, floating labels, tag input, image preview, character counter, and success toast
  - State management with Zustand for instant updates
- **General:**
  - Fully responsive (mobile, tablet, desktop)
  - Modern, clean UI with gradients, cards, and smooth transitions
  - Accessibility best practices (labels, focus, color contrast)
  - Dummy content and placeholder images

---

## 🛠️ Tech Stack

- **React.js** (core UI framework)
- **Next.js** (routing, SSR, app structure)
- **Tailwind CSS** (utility-first CSS framework)
- **Zustand** (state management for blogs)
- **React Icons** (iconography)
- **Canvas Confetti** (success animation)

---
## 📡 API Integration

This project uses an external API to handle blog data dynamically:

- **Fetch All Blogs:** Lists all available blogs from the API.
- **Fetch Individual Blog by ID:** Renders detailed blog data by fetching it using the blog ID.
- **Create Blog:** Sends a POST request to the API to create new blogs. Includes image preview, tag input, and validation.

> This API-driven architecture ensures scalability, real-time data updates, and production-ready structure.

---

## 🎉 Confetti & Loader Integration

- 🎊 **Confetti Animation:** A success confetti animation is triggered after a blog is successfully created using `canvas-confetti`.
- 🔄 **Loader Animation:** Loader appears while blog data is being fetched, improving UX during async operations.

---

## 📦 Project Structure

```
├── app/
│ ├── layout.tsx # Root layout with header/footer
│ ├── page.tsx # Home page
│ └── blogs/
│ ├── page.tsx # Blog listing page
│ ├── [id]/page.tsx # Blog details page
│ └── create/page.tsx# Create blog page
├── components/
│ ├── header.tsx # Header with navigation
│ ├── footer.tsx # Footer with navigation/socials
│ ├── blogStore.ts # Zustand store for blogs
│ ├── ReadyToTransform.tsx # CTA widget
│ ├── theme-provider.tsx # Theme context
│ ├── theme-toggle.tsx # Theme toggle button
│ └── layout/breadcrumb.tsx # Breadcrumb component
├── public/
│ └── ... # Static assets (e.g., favicon.ico)
├── tailwind.config.ts # Tailwind CSS config
├── postcss.config.js # PostCSS config
├── package.json # Project metadata & scripts
└── README.md # This file
```

---

## 🚀 Setup & Run Instructions

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

### Build for Production
```bash
npm run build
npm run start
```

---

## 🎨 CSS Framework Used
- **Tailwind CSS** (utility-first, highly customizable, responsive)

---

## 📝 Optional Features & Extra Design Elements
- Blogs CRUD-like experience (add, view, details)
- Modern floating label forms with tag input, image preview, and character counter
- Animated card mount and success toast
- Theme toggle (light/dark mode)
- PCI badges and social icons in footer
- Breadcrumb navigation
- Confetti animation on blog creation
- Accessibility improvements

---

## 📱 Responsiveness
- Fully responsive: mobile, tablet, desktop
- Header, footer, and all pages adapt to screen size
- Mobile menu with hamburger and dropdowns

---

## 💡 Development & Git
- Project initialized with Git
- Multiple meaningful commits documenting progress
- node_modules excluded from version control and ZIP

---

## 📄 Client Requirements Mapping
- [x] React.js used as main framework
- [x] Tailwind CSS used for styling
- [x] Next.js used for routing (optional, but included)
- [x] Dummy content and placeholder images
- [x] Responsive design for all device sizes
- [x] Desktop header with dropdown
- [x] Mobile header with dropdown
- [x] Responsive footer with navigation
- [x] Blogs page (optional, included)
- [x] README with setup, CSS framework, and extra features

---

## 📬 Contact
For any doubts, contact:
- **Abhijeet Kumar**
- Email: abhijeetkumar2706@gmail.com
- Phone: 8340290109

---

## 👨‍💻 Author
- [Abhijeet Kumar (GitHub)](https://github.com/Abhijeet2706)

---

**Thank you for reviewing this project!**
