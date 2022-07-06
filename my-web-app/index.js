const express = require('express');
const PORT = 8080;

const fib = n => {
    if (n <= 1) return 0;
    let a = 0, b = 1;
    for (let i = 2; i < n; i++) {
        const t = b;
        b += a;
        a = t;
    }
    return b;
}

const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use((req, res, next) => { console.log(req.method, req.url, req.body); next(); })
app.post('/api/fib', (req, res) => {
    const { n } = req.body;
    if (!Number.isInteger(n)) return res.status(400).json({ 'error': 'invalid integer' })
    if (n < 1) return res.status(400).json({ 'error': 'must be a positive integer' })
    res.json({ 'ans': fib(n) });
});

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
