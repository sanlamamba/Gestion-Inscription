import mysql from "mysql";
const db = mysql.createConnection({
     host:"localhost",
     user:"root",
     password:"",
     database:"gestioninscription"
})
export default db
