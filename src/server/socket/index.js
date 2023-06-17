const ws = require('ws')
const { uuid } = require('../utils')

const log = console.log.bind(console)

/**
 * Map of clients
 * @type {Map<string, ws.WebSocket>}
 */

const clients = new Map()

/**
 * Abstract for getting the Client
 * @param {String} uuid
 * @returns {ws.WebSocket}
 */

function getClient(uuid) {
  return clients.get(uuid)
}

/**
 * Abstract for setting the Client
 * @param {String} uuid
 * @param {ws.WebSocket} client
 * @returns {void}
 */

function setClient(uuid, client) {
  clients.set(uuid, client)
}

/**
 * Returns Clients uuid and no of active clients
 * @returns {{ noOfClients: number; clients: Array<string> }}
 */

function getClientsDetails() {
  return {
    noOfClients: clients.size,
    clients: [...clients.keys()],
  }
}

/**
 * Handler for WebSocket Connection
 * @param {ws.WebSocket} client
 */

function onConnectionHandler(client) {
  const id = uuid()

  log('Client Connected:', id)

  clients.set(id, client)
  client.send(JSON.stringify({ type: 'uuid', value: id }))

  client.on('close', () => {
    clients.delete(id), log('Client Disconnected:', id)
  })
}

module.exports = {
  setClient,
  getClient,
  getClientsDetails,
  onConnectionHandler,
}
