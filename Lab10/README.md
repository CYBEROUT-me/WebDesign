# 🌐 Lab 10 — Node.js + Express.js Web Application

Клієнт-серверний веб-додаток, створений за допомогою **Node.js** та **Express.js**, який повертає окремі HTML-сторінки через маршрути.  
Проєкт виконано в рамках лабораторної роботи.

---

## 📦 Структура проєкту

```
/project
│── server.js                  # Сервер Express.js
│── package.json               # Інформація про проєкт і залежності
│── YukhnoLab10-index.html     # Головна сторінка
│── YukhnoLab10-float.html     # Float layout
│── YukhnoLab10-flexbox.html   # Flexbox layout
│── YukhnoLab10-grid.html      # CSS Grid layout
│── README.md                  # Документація
```

---

## 🚀 Можливості застосунку

Сервер повертає HTML-сторінки через **окремі маршрути**, як вимагається завданням.

### 🔗 Таблиця маршрутів

| Маршрут | Опис | Повертає |
|--------|------|-----------|
| `/` | Головна сторінка | `YukhnoLab10-index.html` |
| `/float` | Приклад верстки на float | `YukhnoLab10-float.html` |
| `/flexbox` | Flexbox верстка | `YukhnoLab10-flexbox.html` |
| `/grid` | CSS Grid верстка | `YukhnoLab10-grid.html` |

### 📁 Доступ до файлів напряму

Через статичну роздачу доступні й такі маршрути:

- `/YukhnoLab10-index.html`
- `/YukhnoLab10-float.html`
- `/YukhnoLab10-flexbox.html`
- `/YukhnoLab10-grid.html`

---

## 🛠 Встановлення та запуск

### 1. Встановити залежності

```bash
npm install
```

### 2. Запустити сервер

```bash
npm start
```

### 3. Відкрити у браузері

```
http://localhost:3000/
http://localhost:3000/float
http://localhost:3000/flexbox
http://localhost:3000/grid
```

---

## 📄 Використані технології

| Технологія | Призначення |
|------------|-------------|
| Node.js | Серверне середовище |
| Express.js | Маршрути та сервер |
| HTML5 | Структура |
| CSS3 (Float, Flexbox, Grid) | Приклади верстки |

---

## ⚙️ Код сервера (server.js)

```js
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Статична роздача HTML-файлів
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'YukhnoLab10-index.html'));
});

app.get('/float', (req, res) => {
  res.sendFile(path.join(__dirname, 'YukhnoLab10-float.html'));
});

app.get('/flexbox', (req, res) => {
  res.sendFile(path.join(__dirname, 'YukhnoLab10-flexbox.html'));
});

app.get('/grid', (req, res) => {
  res.sendFile(path.join(__dirname, 'YukhnoLab10-grid.html'));
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
```

---

## 📚 Автор
**Юхно Олександр**
