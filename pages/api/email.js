const appPass = 'llswgjakyhnebnax'

const send = require('gmail-send')({
    user: 'abhishekmicosoft@gmail.com',
    pass: appPass,
    // cc: 'sales@bootlabstech.com',
    to: 'abhishek8developer@gmail.com',
    subject: 'Test subject',
})

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { fname, lname, emailId, phone, message } = req.body
            const options = {
                to: emailId,
                subject: `${fname} ${lname} has a query from Bootstrap Contact form.`,
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