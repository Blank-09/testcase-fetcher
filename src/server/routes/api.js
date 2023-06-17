const { Router } = require('express')
const { getClientsDetails, getClient } = require('../socket')

const ws = require('ws')
const router = Router()

// Base route
router.get('/', (req, res) => {
  res.send('API is Working!')
})

// Active Users Details
router.get('/getActiveClients', (req, res) => {
  res.send(getClientsDetails())
})

// Testcases Handler Route
router.post('/testcases/:uuid', (req, res) => {
  if (req.body && !req.body.message) {
    return res.status(400).send('Bad request')
  }

  const client = getClient(req.params.uuid)

  if (!client) {
    return res.status(404).send('Client not found')
  }

  // If WebSocket is open, then send the request body
  if (client.readyState === ws.OPEN) {
    client.send(JSON.stringify(req.body))
  }

  res.send('OK')
})

module.exports = router
