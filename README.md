# 🚀 AppFlare

**AppFlare** is a sleek and modern web application for showcasing and discovering the latest apps, complete with user authentication, dynamic content, responsive design, and smooth UI interactions. Built using **React**, styled with **TailwindCSS** and **DaisyUI**, and enhanced by powerful libraries like **Embla Carousel** and **SweetAlert2**.

---

**🔗 Live Link:** [https://appflare-24094.web.app/](https://appflare-24094.web.app/)

---

## 🛠 Tech Stack

- ⚡ [Vite](https://vite.dev/guide/) — Lightning-fast build tool for development
- ⚛️ [React](https://reactjs.org/) — UI library for building component-based interfaces
- 🔀 [React Router](https://reactrouter.com/start/data/installation) — For client-side routing and navigation
- 🎨 [Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite) — Utility-first CSS framework for styling
- 💎 [DaisyUI](https://daisyui.com/docs/install/) — Tailwind-based component library
- 🎢 [Embla Carousel](https://www.embla-carousel.com/get-started/react/) — Lightweight and customizable carousel/slider
- 🎉 [SweetAlert2](https://sweetalert2.github.io/#download) — Beautiful, customizable alert popups
- 🧩 [React Icons](https://www.npmjs.com/package/react-icons) — Popular icons as React components

---

## ✨ Features

- 🔐 User Authentication (Email/Password & Google Sign-In)
- 🖼️ Lazy-loaded image banners with smooth carousel transitions
- 📊 Animated stats with `react-countup`
- 🧾 App details and dynamic routing
- 💬 SweetAlert2 feedback for user actions (login, register, update, etc.)
- 📱 Fully responsive, mobile-first design
- 🎨 Styled with TailwindCSS + DaisyUI for clean UI
- 🧠 Code-splitting and performance optimization for production

---

## 🚀 Getting Started

### 1. Clone the project

```bash
git clone https://github.com/HedaetShahriar/AppFLare.git
cd appflare
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

---

## 📦 Build for production

```bash
npm run build
```

---

## 🔐 Firebase Configuration

To connect this project with your own Firebase backend, follow these steps:

### 1. Create a Firebase Project

- Go to [Firebase Console](https://console.firebase.google.com/)
- Create a new project
- Navigate to **Project Settings > General**
- Under **Your Apps**, register a new web app
- Copy the Firebase config

### 2. Create a `.env` file in the root directory

```bash
touch .env
```

Paste your Firebase config like this:

```env
VITE_API_KEY=your_api_key
VITE_AUTH_DOMAIN=your_auth_domain
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_storage_bucket
VITE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_APP_ID=your_app_id
```

> ⚠️ All keys must be prefixed with `VITE_` for Vite to expose them to the app.

### 3. Update `firebase.config.js`

```js
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};

export default firebaseConfig;
```

### 4. Git Ignore your secrets

```gitignore
.env
```

---

## 📁 Folder Structure (Overview)

```
src/
├── assets/              # Static images and icons
├── components/          # Reusable components like Navbar, Footer
├── pages/               # Page components like Home, Login, Register
├── provider/            # Auth context provider
├── routes/              # Application routing
├── styles/              # Custom CSS or Tailwind extensions
└── main.jsx             # App entry point
```

---

## 💡 Tips

- Use `EmblaCarousel` for lazy-loaded sliders with autoplay and snapping
- Use `SweetAlert2` for stylish and minimal toast/alert modals
- Lazy load large components or routes using `React.lazy` and `Suspense`
- Use `customClass` with SweetAlert2 and define custom CSS for rounded modals

---

## 📚 Useful Links

| Tool           | Link                                                                 |
|----------------|----------------------------------------------------------------------|
| Vite           | https://vite.dev/guide/                                              |
| React Router   | https://reactrouter.com/start/data/installation                      |
| TailwindCSS    | https://tailwindcss.com/docs/installation/using-vite                 |
| DaisyUI        | https://daisyui.com/docs/install/                                    |
| SweetAlert2    | https://sweetalert2.github.io/#download                              |
| React Icons    | https://www.npmjs.com/package/react-icons                            |
| Embla Carousel | https://www.embla-carousel.com/get-started/react/                    |

---

## 🙌 Contributing

Pull requests and feature suggestions are welcome!

---

## 📝 License

This project is open-source and free to use.
