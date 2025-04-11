# 🌟 Harmonious PLP - Product Listing Page with Next.js

This is a modern, responsive **Product Listing Page (PLP)** built using [Next.js](https://nextjs.org), designed to display products with a clean layout, hover effects, interactive favorites, filtering, sorting, and loading skeletons. It follows the Pages Router and integrates modular CSS for styling.

> ✅ **Live Demo**: [harmonious-boba-f01177.netlify.app](https://harmonious-boba-f01177.netlify.app/)

---

## 📸 Screenshots

### 🖥️ Desktop View
<img width="452" alt="desktop" src="https://github.com/user-attachments/assets/898050bc-144d-41ae-bcbc-6d8d8aacf0ea" />
<img width="452" alt="desk2" src="https://github.com/user-attachments/assets/00dc45b5-cd76-418d-9288-bd6c8faedff0" />


### 📱 Mobile View
<img width="149" alt="mob" src="https://github.com/user-attachments/assets/1dc674ac-a1b7-46c8-a249-2868af0bb887" />


### 📲 Tablet View
<img width="245" alt="tab" src="https://github.com/user-attachments/assets/66a9b782-ec95-40f3-8b55-f20b03f3584a" />

---

## 🚀 Getting Started

First, install the dependencies and run the development server:

```bash
npm install
npm run dev
# or
yarn install
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 🛠 Features

- ✨ Responsive Product Grid Layout
- 🎯 Sorting and Filtering functionality
- 💡 Tooltip on hover
- ❤️ Toggleable Favorite button (UI only)
- 🔄 Loading Skeleton for graceful data loading
- ⚡ Hover effects for product cards
- 🔧 Modular and Scalable CSS
- 📦 (Optional) FakeStore API integration ready
- 📱 Fully responsive design for mobile, tablet, and desktop

---

## 📁 Project Structure

```bash
/pages
  index.js           # Main PLP page
  /api/hello.js      # Example API route

/components
  HeroSection.js     # Hero/banner section
  ProductCard.js     # Single product UI
  ProductGrid.js     # Responsive product grid
  SkeletonCard.js    # Loading placeholder

/styles
  globals.css
  ProductCard.module.css
  HeroSection.module.css
```

---

## 🔤 Tech Stack

- **Framework:** [Next.js](https://nextjs.org)
- **Language:** JavaScript (ES6+)
- **Styling:** Modular CSS + Plain CSS
- **State:** Local component state (React)
- **API:** (Optional) [FakeStoreAPI](https://fakestoreapi.com/) for dynamic data
- **Fonts:** [Geist](https://vercel.com/font)

---

## 📡 Deployment

Although built with Next.js, this version is deployed on **Netlify**:

> 🌐 **Live Project Link**: [https://harmonious-boba-f01177.netlify.app/](https://harmonious-boba-f01177.netlify.app/)

You can deploy it easily via [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) or [Netlify](https://www.netlify.com/).

---

## 🔗 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn-pages-router)
- [Next.js GitHub](https://github.com/vercel/next.js)
- [FakeStoreAPI](https://fakestoreapi.com/)

---

## 🙌 Contributing

Pull requests and suggestions are welcome! If you have feedback or ideas to enhance the PLP features, feel free to open an issue or PR.

---

Made with 💻 by Anjali
