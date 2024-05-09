'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    res.json({
        message1: 'Hello FS2024 DevOps Course! These changes are made by murridim',
        message2: 'Weitere Änderungen um Verknüpfung der Jobs zu prüfen',
        message3: 'Weitere Änderungen um SCM Prüfungsintervall zu prüfen'
    });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
