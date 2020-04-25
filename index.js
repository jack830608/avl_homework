const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes');
const morgan = require('morgan');
const dev = process.env.NODE_ENV !== 'production';
const server = express();
const next = require('next');
const app = next({ dev });
const handle = app.getRequestHandler();
require('dotenv').config();
const nodemailer = require('nodemailer');

app.prepare()
    .then(() => {
        console.log(process.env.EMAIL_USER)
        console.log(process.env.EMAIL_PASSWORD)
        const mailTransport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });
        server.use(morgan('dev'));
        server.use(bodyParser.urlencoded({ extended: true }));
        server.use(bodyParser.json());
        server.use(express.static(path.join(__dirname, 'public')));
        routes(server, handle, app, mailTransport);
        const port = process.env.PORT || 3000
        server.listen(port, (err) => {
            if (err) throw err
            console.log(`Server is listening on ${port}`)
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })