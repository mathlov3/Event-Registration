const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Парсити дані з форми у форматі JSON
app.use(bodyParser.json());

// Маршрут для обробки POST-запитів на /register
app.post('/register', (req, res) => {
    // Отримати дані з запиту
    const { name, email, dateOfBirth, whereDidYouHear } = req.body;

    // Повернути відповідь клієнту
    res.json({ message: 'Registration successful', data: req.body });
});

// Прослуховування сервером порта 3000
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
