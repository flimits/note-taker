const express = require('express');
const path = require('path');
const notes = require('./public/assets/')
cost PORT = 3001;
const app = express();

const db = require('./db/db.json');

app.get('*', (req, res) => {
    return res.json()
})