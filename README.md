# Dashboard-UI

A modern, feature-rich dashboard and content management interface built with **React** and **Vite**, designed for managing, generating, and publishing articles across various categories and platforms.

---

## Features

- **Article Management:**  
  - Categorize articles as Generated, Published, Scheduled, or Archived.
  - Search, filter, and paginate through articles.
  - Bulk actions on multiple articles.
  - View and manage article details (title, keyword, traffic, word count, creation date).

- **Article Generation & Publishing:**  
  - Create new articles manually or using AI-powered keyword-to-article generation.
  - Import keywords (e.g., from Google Search Console).
  - Generate articles in bulk or for longtail keywords.
  - Schedule articles for future publication.

- **Project & Keyword Management:**  
  - Organize articles by keyword projects.
  - Steal competitor keywords for content inspiration.

- **Integrations:**  
  - Publish articles directly to external platforms (e.g., WordPress, GitHub, web).
  - Manage internal links, backlinks, and other site integrations.

- **User Experience:**  
  - Responsive sidebar navigation with customizable sections.
  - Domain selection for multi-site management.
  - Profile management and subscription handling.
  - Help Center, Updates, Live Chat Support.

---

## Tech Stack

- **Frontend:**  
  - [React](https://reactjs.org/) (with [Vite](https://vitejs.dev/) for rapid development)
  - [React Router](https://reactrouter.com/) (multi-page navigation)
  - [Tailwind CSS](https://tailwindcss.com/) (utility-first styling)
  - [clsx](https://github.com/lukeed/clsx) and [tailwind-merge](https://github.com/dcastil/tailwind-merge) (class name utilities)
  - [Radix UI Primitives](https://www.radix-ui.com/) (unstyled, accessible components)
  - [Lucide Icons](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)

---

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sonikakannan/Dashboard-UI.git
   cd Dashboard-UI
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

4. **Visit:**  
   [http://localhost:5173](http://localhost:5173) (default Vite port)

---

## Project Structure

- `src/components/` — Reusable React components (Sidebar, Dashboard, Tables, Forms, etc.)
- `src/pages/` — Page-level components for routing
- `src/utils/` — Static data and utility functions
- `src/lib/` — Common helpers (class name merging, etc.)
- `index.html` — Main HTML entry point

---

## Customization & Extending

- Easily add new article categories, integrations, or dashboard widgets.
- Modify sidebar navigation to suit your workflow.
- Integrate other publishing platforms or analytics as needed.

---

## License

[MIT](LICENSE)

---

> **Note:**  
> This project is a work in progress and may require further setup for production use, including authentication, deployment configuration, and securing integrations.
