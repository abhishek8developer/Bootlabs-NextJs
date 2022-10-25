const appPass = 'otgnwwcqxqjmlxpw'

const currentDateTime = () => `${new Date().getDate()} ${
    new Date().getMonth() + 1} ${
    new Date().getFullYear()} ${
    new Date().getHours()}:${
    new Date().getMinutes()}`

const send = require('gmail-send')({
    user: 'mayank@bootlabstech.com',
    pass: appPass,
    cc: 'mayank@bootlabstech.com',
    to: 'contactus@bootlabstech.com',
    subject: `Query for Bootslabtech at ${currentDateTime()}`,
})

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { fname, lname, emailId, phone, message } = req.body
            const options = {
                to: emailId,
                subject: `Query from ${fname} ${lname} Bootlabstech on ${currentDateTime()}`,
                text: `${message} \n ${fname} ${lname}\nPhone Number: ${phone}`
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