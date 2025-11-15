const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Дозволяємо доступ до всіх .html файлів напряму
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
