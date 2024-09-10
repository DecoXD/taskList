import mysql from 'mysql'


const dbConfig  = {
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'test'
  }
var db = mysql.createConnection(dbConfig);

db.connect((err) =>{
    if(err) console.log('nao foi possivel conectar' + err)

    console.log('conectado')
})
export  {db}