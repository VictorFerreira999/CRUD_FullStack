import mysql from 'mysql2'; //

export const db = mysql.createConnection({
  host: 'localhost',
  user: 'victor',
  password: '123456789',
  database: 'crud'
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados.');
});
