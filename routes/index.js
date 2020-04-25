const axios = require('axios');
require('./lib/smtp');

module.exports = function (server, handle, app) {

    server.post('/email', async function (req, res) {

    });
    server.get('*', (req, res) => {
        return handle(req, res);
    })
}