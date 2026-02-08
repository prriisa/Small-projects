# 🔍 Real-Time User Search Filter

This project demonstrates a **real-time search filter** built using **HTML, CSS, and JavaScript**.  
Users are filtered instantly as you type, based on whether their **name starts with the entered text**.

---

## ✨ Features

- 🔎 Real-time filtering using `input` event
- 👤 Filters users by **name starting letters**
- 🚫 Shows **“No User Found”** message when no match exists
- 🎨 Clean UI with:
  - Profile image (DP)
  - Blurred background layer
  - Name & bio section
- ⚡ Fast & lightweight (Vanilla JS only)

---

## 🛠️ Technologies Used

- **HTML** – Structure  
- **CSS** – Styling & blur effect  
- **JavaScript** – DOM manipulation & search logic  


---

## 🧠 How It Works

1. User types in the input box
2. `input` event listener triggers
3. Each user card is checked using:
    ```javascript
   name.startsWith(inputValue)
    ```
4. Matching cards remain visible.
5. Non-matching cards are hidden.
6. If no cards match, a message is shown:
`"No User Found Starting From {input}"`
--- 

## 🧩 JavaScript Concepts Used

- `addEventListener("input")`

- `startsWith()` 

- `querySelector()` / `querySelectorAll()`

- `createElement()`

- `appendChild()`

- Conditional rendering using `display`.
---
## 🚫 No User Found Logic

When no user matches the search input, a message is dynamically added:

```javascript
if (visibleCount === 0 && value !== "") {
    let note = document.createElement("h4");
    note.textContent = `No User Found Starting From ${value}`;
    entries.appendChild(note);
}
```