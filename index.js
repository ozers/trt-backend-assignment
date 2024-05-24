const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    res.json('hello world')
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});