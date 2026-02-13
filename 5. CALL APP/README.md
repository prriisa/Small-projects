# 📞 Call Note Manager

A simple and responsive Call Note Management web app built using **HTML, CSS, and JavaScript**.  
Users can create, store, and navigate call notes using the browser's Local Storage.

---

## 🚀 Features

- ➕ Add new call notes  
- ✅ Form validation (URL, Name, Town, Category required)  
- 💾 Data stored in Local Storage  
- 🔄 Persistent data after refresh  
- ⬆⬇ Arrow navigation between cards  
- 🎨 Clean stacked card UI design  
- 📱 Responsive layout  

---

## 🛠️ Technologies Used

- HTML5  
- CSS3  
- Vanilla JavaScript  
- Local Storage API  
- Boxicons  

---

## 📂 Project Structure

```
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🧠 How It Works

### 1️⃣ Creating a Note

- Click the ➕ icon  
- Fill in:
  - Image URL
  - Full Name
  - Home Town
  - Purpose
  - Category
- Click **Create Note**

### 2️⃣ Validation Rules

- URL must be valid format  
- Name must contain only letters (minimum 3 characters)  
- Town must contain valid characters  
- Category must be selected  

If validation passes:
- Data is stored in Local Storage  
- Page reloads  
- New card appears  

---

## 💾 Local Storage Structure

Each note is stored as an object:

```javascript
{
  link: "image-url",
  name: "User Name",
  town: "City",
  purpose: "Call purpose",
  category: "Business | Education | Medical | Personal"
}
```

All notes are stored inside:

```javascript
localStorage.getItem("tasks")
```

---

## 🔄 Card Navigation

- ⬇ Down Arrow → Next Card  
- ⬆ Up Arrow → Previous Card  
- Automatically loops back to start/end  

---


## 👩‍💻 Author

Built with ❤️ using pure JavaScript.
