import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function handler(req, res) {
    const { user } = getSession(req, res);
    if (req.method === 'GET') {
        res.status(200).end(JSON.stringify({ data }))
    } else {
        if(!user) {
            res.status(401).end(JSON.stringify({ message: 'Unauthorized access.' }))
        } else {
            res.json({ protected: 'My Secret', id: user.sub })
        }
    }
})