const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
{
    host: 'phtfaw4p6a970uc0.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: '	lgq161uopfaxxtd4',
    password: '	q98b0qr5gcqx9mmm',
    database: '	y4qbo7npggm2h2zo'
},
    console.log(`Connected to the database.`)
);

app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});