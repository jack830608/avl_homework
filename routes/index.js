const axios = require('axios');

module.exports = function (server, handle, app, mailTransport) {

    server.post('/email', async function (req, res) {
        mailTransport.sendMail(
            {
                from: 'JackLin <jack830608@gmail.com>',
                // to: 'AVL <hr@avancevl.com>',
                to: 'JackLin <jack.lin@vpon.com>',
                subject: req.body.subject,
                html: `<p>${req.body.body}</p>`,
            },
            function (err) {
                if (err) {
                    console.log('Unable to send email: ' + err);
                    res.send('error')
                }else{
                    console.log('send email success')
                    res.send('success')
                }
            },
        );
    });
    server.get('*', (req, res) => {
        return handle(req, res);
    })
}