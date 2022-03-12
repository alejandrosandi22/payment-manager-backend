const { Router } = require('express');
const { getAllClients, getClient, createClient, deleteClient, updateClient } = require('../controllers/controller');

const router = Router();

router.get('/clients', getAllClients)

router.get('/clients/:id', getClient)

router.post('/clients', createClient)

router.put('/clients/:id', updateClient)

router.delete('/clients/:id', deleteClient)

module.exports = router;