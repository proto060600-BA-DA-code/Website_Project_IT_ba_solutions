const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Database Error');
    }
});
app.post('/api/leads', async (req, res) => {
  try {
    const { name, email, company, service, message } = req.body;

    const result = await pool.query(
      `INSERT INTO leads
      (name, email, company, service, message)
      VALUES ($1,$2,$3,$4,$5)
      RETURNING *`,
      [name, email, company, service, message]
    );

    res.status(201).json(result.rows[0]);

  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: 'Failed to save lead'
    });
  }
});
app.listen(5000, () => {
    console.log('Server running on port 5000');
});