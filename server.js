const express = require('express');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/api/chat', async (req, res) => {
    const headers = {
        "Accept": "*/*",
        "Accept-Language": "id-ID,en;q=0.5",
        "Referer": "https://www.blackbox.ai/",
        "Content-Type": "application/json",
        "Origin": "https://www.blackbox.ai",
        "Alt-Used": "www.blackbox.ai"
    };

    const data = req.body;

    try {
        const blackboxResponse = await fetch('https://www.blackbox.ai/api/chat', {
            method: "POST",
            headers,
            body: JSON.stringify(data)
        });

        const blackboxData = await blackboxResponse.text();
        res.send(blackboxData);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send(`Eror: ${error.message}`);
    }
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});