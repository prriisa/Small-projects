# 🌗 Dark / Light Theme Toggle (OS Aware)

A simple and practical **Dark–Light mode switcher** made using **HTML, CSS, and JavaScript**.
It supports **system theme detection** and also lets users **manually toggle** the theme.

---

## ✨ Features

* Detects **OS theme (dark / light)** on first load
* Manual toggle button to change theme
* Saves user preference using **localStorage**
* User-selected theme gets **priority over OS theme**
* Listens to OS theme changes when no manual theme is set
* Built with **pure vanilla JavaScript** (no libraries)

---

## 🧠 How Theme Logic Works

1. If a theme is saved in **localStorage** → that theme is applied
2. If no saved theme exists → website follows the **OS theme**
3. Once user toggles manually → OS changes are ignored

This avoids conflicts like applying both `dark` and `light` classes together.

---

## 🎨 CSS Usage

Only two global classes are used:

```css
.dark { }
.light { }
```

All theme styles are handled using these classes.

---

## ⚙️ JavaScript Concepts Used

* `window.matchMedia()` for OS theme detection
* `classList.add()` / `classList.remove()`
* `localStorage` for saving theme
* Event listeners for toggle button and OS theme change

---

## 🔁 Reset to System Theme (Optional)

```js
localStorage.removeItem('theme');
```

This will make the website follow the OS theme again.

---

## ✅ Use Cases

* Personal websites
* Portfolios
* Dashboards
* Any project needing dark/light mode

---

Made with ❤️ using HTML, CSS & JavaScript
