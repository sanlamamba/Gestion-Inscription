const express= require("express");
const mysql= require("mysql");


const port = 3006;


const app = express();

app.use(express.json());

app.use(express.urlencoded({extended:true}));



// CONNECTION
const db =mysql.createConnection({
     host : "localhost",
     user : "root",
     password : "",
     database : "gestioninscription"
});


// INIT DB
app.get("/initdb",(res,req)=>{
     const sqlQuery = "CREATE DATABASE gestioninscription";
     db.query(sqlQuery,(err,res)=>{
          if(err) throw err;
          console.log(res);
          res.send("Success....")
     })
})

// CREATE TABLES
app.get("/createtable/admin",(res,req)=>{
     const sqlQuery = "CREATE TABLE admin(id int AUTO_INCREMENT, nom VARCHAR(255), mail VARCHAR(255), adresse VARCHAR(255), tel VARCHAR(255), specialite VARCHAR(255), fonction VARCHAR(255), role VARCHAR(255), PRIMARY KEY (id))";
     db.query(sqlQuery,(err,res)=>{
          if(err) throw err;
          console.log(res);
          res.send("Success....")
     })
})

app.get("/createtable/etudiant",(res,req)=>{
     const sqlQuery = "CREATE TABLE etudiant(id int AUTO_INCREMENT, nom VARCHAR(255), sexe VARCHAR(25), date_naissance VARCHAR(255), nationalite VARCHAR(255), adresse VARCHAR(255), groupe int(11), matricule int(11), mail VARCHAR(255),status BOOLEAN, password VARCHAR(255), PRIMARY KEY (id))";
     db.query(sqlQuery,(err,res)=>{
          if(err) throw err;
          console.log(res);
          res.send("Success....")
     })
})
app.get("/createtable/groupe",(res,req)=>{
     const sqlQuery = "CREATE TABLE groupe(id int AUTO_INCREMENT, groupe VARCHAR(255), annee_groupe VARCHAR(25), PRIMARY KEY (id))";
     db.query(sqlQuery,(err,res)=>{
          if(err) throw err;
          console.log(res);
          res.send("Success....")
     })
})
app.get("/createtable/dossier",(res,req)=>{
     const sqlQuery = "CREATE TABLE dossier(id int(11) AUTO_INCREMENT, id_filiere int(11), annee_inscrit TEXT, id_etudiant int(11), PRIMARY KEY (id))";
     db.query(sqlQuery,(err,res)=>{
          if(err) throw err;
          console.log(res);
          res.send("Success....")
     })
})
app.get("/createtable/filiere",(res,req)=>{
     const sqlQuery = "CREATE TABLE filiere(id int(11) AUTO_INCREMENT, nom VARCHAR(255),duree VARCHAR(25),date_debut VARCHAR(255),img VARCHAR(200), PRIMARY KEY (id))";
     db.query(sqlQuery,(err,res)=>{
          if(err) throw err;
          console.log(res);
          res.send("Success....")
     })
})


// inser delete
app.get("/addadmin/:nom/:mail/:adresse/:tel/:specialite/:fonction/:role/:password",(req,res)=>{
     const user ={
          nom:`${req.params.nom}`,
          mail : `${req.params.mail}`,
          adresse : `${req.params.adresse}`,
          tel : `${req.params.tel}`,
          specialite : `${req.params.specialite}`,
          fonction : `${req.params.fonction}`,
          role : `${req.params.role}`,
          password:`${req.params.password}`
     }
     const sqlQuery = "INSERT INTO admin SET ?";
     db.query(sqlQuery, user, (err, result)=>{
          if(err) throw err;
          console.log(result);
          res.send({express:"Success...."})
     })
})
app.get("/addetudiant/:nom/:sexe/:date/:mail/:mdp/:anneeC/:filiere",(req,res)=>{
     const accessT = "ASDSD"
     const user ={
          nom:`${req.params.nom}`,
          sexe : `${req.params.sexe}`,
          date_naissance : `${req.params.date}`,
          mail : `${req.params.mail}`,
          password : `${req.params.mdp}`,
          status : `${accessT}`,
          annee_inscription : `${req.params.anneeC}`,
          filiere_choisi : `${req.params.filiere}`,
     }
     const sqlQuery = "INSERT INTO etudiant SET ?";
     db.query(sqlQuery, user, (err, result)=>{
          if(err) throw err;
          console.log(result);
          res.send({express:"Success...."})
     })
})


//SHOW
app.get("/showusers",(req,res)=>{

     const sqlQuery = "SELECT * FROM admin";
     db.query(sqlQuery,(err, result)=>{
          if(err) throw err;
          console.log(result);
          res.send(result)
     })
})
app.get("/showformation",(req,res)=>{

     const sqlQuery = "SELECT * FROM filiere";
     db.query(sqlQuery,(err, result)=>{
          if(err) throw err;
          console.log(result);
          res.send(result)
     })
})

app.get("/showadmin/:mail/:password",(req,res)=>{
     
     const sqlQuery = `SELECT * FROM admin WHERE mail = '${req.params.mail}' AND password = '${req.params.password}' `;
     db.query(sqlQuery,(err, result)=>{
          if(err) throw err;
          console.log(result);
          res.send(result)
     })
})
app.get("/showetudiant/:mail/:password",(req,res)=>{
     
     const sqlQuery = `SELECT * FROM etudiant WHERE mail = '${req.params.mail}' AND password = '${req.params.password}' `;
     db.query(sqlQuery,(err, result)=>{
          if(err) throw err;
          console.log(result.length);
          if(result.length > 0){
               res.send(result);
          }else{
               res.send(false);
          }
     })
})
app.get("/authenticate/etudiant/:token",(req,res)=>{
     
     const sqlQuery = `SELECT * FROM etudiant LEFT JOIN groupe ON etudiant.id_groupe = groupe.id LEFT JOIN filiere ON groupe.id_filiere = filiere.id_filiere_TB WHERE access_token ="${req.params.token}"`;
     
     db.query(sqlQuery,(err, result)=>{
          if(err) throw err;
          console.log(result.length);
          res.send(result)
     })
})

app.get("/authenticate/admin/:token",(req,res)=>{
     
     const sqlQuery = `SELECT * FROM ${req.params.role} WHERE access_token ='${req.params.token}'`;
     db.query(sqlQuery,(err, result)=>{
          if(err) throw err;
          console.log(result.length);
          res.send(result)
     })
})


// ESTABLISH CONNECTION
db.connect((err)=>{
     if(err) throw err;
     console.log("MYSQL RUNNING....")
})


app.listen(port,()=>{
     console.log(`Running on localhost:${port}`)
})