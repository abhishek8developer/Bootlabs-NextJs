// const appPass = 'llswgjakyhnebnax'
const appPass = 'otgnwwcqxqjmlxpw'

const send = require('gmail-send')({
    // user: 'abhishek8developer@gmail.com',
    user: 'mayank@bootslabtech.com',
    pass: appPass,
    cc: 'mayank@bootlabstech.com',
    to: 'hello@bootlabstech.com',
    bcc: 'abhishek8developer@gmail.com',
    subject: `Query for Bootslabtech at ${new Date().getDate()}-${new Date().getTime()}-${new Date().getDay()}-${new Date().getMonth()}`,
})

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { fname, lname, emailId, phone, message } = req.body
            const options = {
                to: emailId,
                subject: `Query from ${fname} ${lname} Bootlabstech at ${
                    new Date().getDate()}-${new Date().getTime()}-${
                        new Date().getDay()}-${new Date().getMonth()
                }`,
                // subject: `${fname} ${lname} has a query from Bootstrap Contact form.`,
                text: `${message} \n ${fname} ${lname}\nPhone Number: ${phone}`,
            }
            const { result, full } = await send(options);
            res.status(200).end(JSON.stringify({ message: 'Mailed successfully.' }))
        } catch (error) {
            console.error('ERROR', error);
            res.status(500).end(JSON.stringify({ message: error }))
        }
    } else {
        res.status(200).end(JSON.stringify({ message: 'Hello world' }))
    }
}