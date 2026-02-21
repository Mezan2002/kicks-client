# 👟 Kicks — Boutique Sneaker Experience

A premium, gorgeous, and high-performance e-commerce frontend designed for the ultimate sneakerhead. Built with a focus on visual excellence, smooth interactions, and a seamless user flow.

[![Live URL](https://img.shields.io/badge/Live-Demo-blueviolet?style=for-the-badge&logo=vercel)](https://kicks-client-eta.vercel.app/)

## ✨ Overview

Kicks is a boutique sneaker store that prioritizes a state-of-the-art shopping experience. From the vibrant editorial Hero Banner to the interactive shopping bag, every element is crafted to WOW the user.

### 🚀 Key Features

- **Centralized Cart Ecosystem**: Powered by React Context API, providing a global state for the shopping bag.
- **Persistent Storage**: Integrated `localStorage` ensure's user selections are preserved across sessions.
- **Dynamic Interactive Bag**: Real-time quantity adjustments, size switching, and smart item merging logic.
- **Premium Carousel Systems**: Custom-engineered carousels for Categories and Related Products with smooth navigation and scroll-progress indicators.
- **State-of-the-Art Design**:
  - Minimalist and premium aesthetic.
  - Responsive layouts (Mobile/Tablet/Desktop).
  - High-performance asset loading with Next.js Image optimization.
- **Modular Component Architecture**: Clean, reusable, and well-documented codebase for scalability.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **UI & Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **State Management**: React Context API
- **Data Fetching**: [Axios](https://axios-http.com/) with a custom `useAxios` hook
- **Icons**: Hand-crafted Custom SVG Library
- **Architecture**: Atomic & Feature-based modular design

## 📦 Setup & Installation

Follow these steps to get the project running locally:

### 1. Clone the repository

```bash
git clone [repository-url]
cd kicks-client
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Implementation Notes

- **Client Boundaries**: Strategically placed `"use client"` directives to optimize for SEO while maintaining rich interactivity.
- **Cart Logic**: The `CartContext` handles complex state transformations like merging products when a size change matches an existing item in the bag.
- **Adaptive UI**: Grid systems in Categories and Product Detail pages dynamically adapt to screen size for an editorial look.

---

Built with ❤️ for the Zavisoft team.
