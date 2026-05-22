# 🌸 Bloom — Flower Shop Website

A responsive flower shop e-commerce project built with **HTML**, **Tailwind CSS**, and **Vanilla JavaScript**.

---

## 📄 Pages

| Page | Description |
|------|-------------|
| `index.html` | Home — hero section, flower showcase, bouquet gallery, contact form |
| `order.html` | Shop — product cards with color filter |
| `cart.html` | Cart — shows added items, empty state, and delete functionality |

---

## ⚙️ Features

### 🛒 Shopping Cart
- Add items from the order page with one click
- Cart count badge updates in real time
- Items saved in **localStorage** — persist across page refreshes
- Cart page dynamically renders saved items
- **Empty cart state** with a friendly message and a "Buy Now" link back to the shop
- **Remove items** individually with a delete button

### 🔍 Product Filter
- Filter flowers by color: **All**, **White**, **Pink**, **Red**
- Instant show/hide with no page reload

### 📬 Contact Form Validation
- Validates name, email, and message before submit
- Red border on empty fields
- Real-time feedback as the user types

### 📱 Responsive Navigation
- Hamburger menu for mobile screens
- Smooth open/close toggle with CSS transition

### ✨ Scroll Animations
- Sections animate on scroll using **AOS (Animate On Scroll)**

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| HTML5 | Page structure |
| Tailwind CSS v4 (CDN) | Styling & responsiveness |
| Vanilla JavaScript | Interactivity & cart logic |
| localStorage | Cart state persistence |
| AOS | Scroll animations |
| Font Awesome | Icons |
| Lobster (custom font) | Typography |

---

## 📁 Project Structure

```
bloom/
├── index.html
├── order.html
├── cart.html
├── css/
│   ├── style.css
│   └── all.min.css       # Font Awesome icons
├── js/
│   └── script.js
├── fonts/
│   └── Lobster-Regular.ttf
└── images/
    ├── background.jpg
    ├── card1.jpg – card4.jpg
    ├── b1.jpg – b4.jpg
    └── (product images)
```

---

## 🚀 Getting Started

1. Clone or download the project
2. Add your flower images inside the `images/` folder
3. Open `index.html` directly in any browser — no build step needed

> ⚠️ Tailwind runs via browser CDN. For production, install Tailwind as a proper build tool for better performance.

---

## 🎨 Design Tokens

| Token | Value |
|-------|-------|
| Primary color | `#e4098d` |
| Hover color | `#c20875` |
| Light background | `#fce4ec` |
| Dark footer | `#2f2d2d` |
| Font | Lobster (custom) |

---

## 🐛 Bug Fixed

- `removeItem()` in the cart was passing `item.index` (undefined) instead of the loop `index` from `forEach` — now correctly removes the selected item.

---

© 2026 Bloom Flower Shop — Built with 💗
