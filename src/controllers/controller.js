const pool = require('../database');

const getAllClients = async (req, res, next) => {
  try {
    const allClients = await pool.query('SELECT * FROM clients');
    res.json(allClients.rows);
  } catch (error){
    next(error); 
  }
};

const getClient = async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await pool.query('SELECT * FROM clients WHERE id = $1', [id]);
    console.log(result);

    if (result.rows.length === 0) 
      return res.status(404).json({
        message: 'Client not found'
      });

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const createClient = async (req, res, next) => {
  const { id, name, payment } = req.body;

  try {
    const result = await pool.query("INSERT INTO clients (id, name, payment) VALUES ($1, $2, $3) RETURNING *", [
      id,
      name,
      payment
    ]);

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }


};

const updateClient = async (req, res, next) => {
  const { id } = req.params;
  const { name, payment } = req.body;

  try {
    
    const result = await pool.query('UPDATE clients SET name = $1, payment = $2 WHERE id = $3 RETURNING *', [
      name, payment, id
    ]);
  
    if (result.rows.length === 0)
      return res.status(404).json({
        message: "Client not found"
      })
  
    res.json(result.rows[0])
  } catch (error) {
    next(error);
  }

};

const deleteClient = async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await pool.query('DELETE FROM clients WHERE id = $1', [id]);
    
  if (result.rowCount === 0)
    return res.status(404).json({
      message: "Client not found"
    });
  
    return res.sendStatus(204);
    
  } catch (error) {
    next(error);
  }
  
};

module.exports = {
  getAllClients,
  getClient,
  createClient,
  updateClient,
  deleteClient
};