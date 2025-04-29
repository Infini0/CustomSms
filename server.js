const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Point pour récupérer le config.json (le manifest de l'activité)
app.get('/journey-spec.json', (req, res) => {
    res.json({
        "workflowApiVersion": "1.1",
        "metaData": {
            "icon": "https://customsms.onrender.com/icon.png",
            "category": "message"
        },
        "type": "REST",
        "lang": {
            "en-US": {
                "name": "Mon Custom Activity",
                "description": "Custom activity pour SFMC"
            }
        },
        "arguments": {
            "execute": {
                "url": "https://customsms.onrender.comexecute",
                "verb": "POST",
                "body": "",
                "header": ""
            }
        },
        "configurationArguments": {
            "save": {
                "url": "https://customsms.onrender.com/save",
                "verb": "POST",
                "body": "",
                "header": ""
            },
            "publish": {
                "url": "https://customsms.onrender.com/publish",
                "verb": "POST",
                "body": "",
                "header": ""
            }
        },
        "userInterfaces": {
            "configModal": {
                "height": 400,
                "width": 600,
                "url": "https://customsms.onrender.com/index.html"
            }
        }
    });
});

// Endpoint pour "execute"
app.post('/execute', (req, res) => {
    console.log('Received execute call with data:', req.body);
    res.sendStatus(200);
});

// Endpoint pour "save"
app.post('/save', (req, res) => {
    console.log('Save configuration:', req.body);
    res.sendStatus(200);
});

// Endpoint pour "publish"
app.post('/publish', (req, res) => {
    console.log('Publish activity');
    res.sendStatus(200);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
});
