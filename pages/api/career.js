import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';
const fs = require("fs")
var path = 'pages/api/datastore-career.json';

export default withApiAuthRequired(async function handler(req, res) {
    const { user } = getSession(req, res) || {}
    if (req.method === 'GET') {
        fs.readFile(path, 'utf8', function(err, data){
          res.status(200).end(JSON.stringify({ data: JSON.parse(data) }))
        })
      } else if (req.method === 'POST') {
        if (
          !req.body.payload ||
          !(req.body.payload.title && req.body.payload.title) ||
          !(req.body.payload.description && req.body.payload.description) ||
          !(req.body.payload.city && req.body.payload.city)
        ) {
          res.status(402).end(JSON.stringify({
            message: `Payload is required with keys: title: string, description: string, city: string`
          }))
        }
        fs.readFile(path, 'utf8', function(err, data){
          const currentData = JSON.parse(data)
          currentData.push({ 
            id: currentData[currentData.length-1].id + 1, 
            ...req.body.payload
          })
          const newData = JSON.stringify(currentData)
          console.log(data, newData);
          fs.writeFile(path, newData, function (err, data) {
            res.status(200).end(JSON.stringify({ data: currentData }))
          })
        })
      } else if (req.method === 'PATCH') {
        if (
          !req.body.payload ||
          !(req.body.payload.id && req.body.payload.id) ||
          !(req.body.payload.title && req.body.payload.title) ||
          !(req.body.payload.description && req.body.payload.description) ||
          !(req.body.payload.city && req.body.payload.city)
        ) {
          return res.status(402).end(JSON.stringify({
            message: `Payload is required with keys: id: number, title: string, description: string, city: string`
          }))
        }
        fs.readFile(path, 'utf8', function(err, data){
          let found = false
          const currentData = JSON.parse(data).map(i => {
            if(i.id === req.body.payload.id) {
              found = true
              return req.body.payload
            } else {
              return i
            }
          })
          if(found) {
            const newData = JSON.stringify(currentData)
            fs.writeFile(path, newData, function (err, data) {
              return res.status(200).end(JSON.stringify({ data: currentData }))
            })
          } else {
            return res.status(200).end(JSON.stringify({ message: 'id not found' }))
          }
        })
      } else {
        res.json({ protected: 'My Secret', id: user })
    }
})
