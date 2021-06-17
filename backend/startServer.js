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
app.get("/initadmin",(req,res)=>{
     
     const sqlQuery =[
          "CREATE TABLE `admin` ( `id` int(11) NOT NULL, `nom` varchar(255) DEFAULT NULL, `mail` varchar(255) DEFAULT NULL, `adresse` varchar(255) DEFAULT NULL, `tel` varchar(255) DEFAULT NULL, `specialite` varchar(255) DEFAULT NULL, `fonction` varchar(255) DEFAULT NULL, `password` text NOT NULL, `access_token` varchar(255) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;",
          "INSERT INTO `admin` (`id`, `nom`, `mail`, `adresse`, `tel`, `specialite`, `fonction`, `password`, `access_token`) VALUES(14, 'JEAN', 'jvp@gmail.com', 'Dakar', '77 889 32 14', 'JAVASCRIPT', 'directeur des etudes', 'asd123', 'sdwasdA5'),(15, 'Paul', 'jeanpaul@gmail.com', 'thies', '7799685213', 'securite', 'proffesseur', 'zBest1122', 'Qwreas63');",
     ]
     sqlQuery.forEach(query=>{
          db.query(query,(err,result)=>{
               if(err) throw err;
               console.log(res);
               res.send({status:"Success...."})
          })
     })
     
})
app.get("/initfiliere",(req,res)=>{
     
     const sqlQuery =[
          "CREATE TABLE `admin` ( `id` int(11) NOT NULL, `nom` varchar(255) DEFAULT NULL, `mail` varchar(255) DEFAULT NULL, `adresse` varchar(255) DEFAULT NULL, `tel` varchar(255) DEFAULT NULL, `specialite` varchar(255) DEFAULT NULL, `fonction` varchar(255) DEFAULT NULL, `password` text NOT NULL, `access_token` varchar(255) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;",
          "INSERT INTO `admin` (`id`, `nom`, `mail`, `adresse`, `tel`, `specialite`, `fonction`, `password`, `access_token`) VALUES(14, 'JEAN', 'jvp@gmail.com', 'Dakar', '77 889 32 14', 'JAVASCRIPT', 'directeur des etudes', 'asd123', 'sdwasdA5'),(15, 'Paul', 'jeanpaul@gmail.com', 'thies', '7799685213', 'securite', 'proffesseur', 'zBest1122', 'Qwreas63');",
          "CREATE TABLE `filiere` (`id_filiere_TB` int(11) NOT NULL,`nom_filiere_TB` varchar(255) DEFAULT NULL,`duree_filiere_TB` varchar(25) DEFAULT NULL,`date_debut_filiere_TB` varchar(255) DEFAULT NULL,`img_filiere_TB` varchar(200) DEFAULT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;",
          "INSERT INTO `filiere` (`id_filiere_TB`, `nom_filiere_TB`, `duree_filiere_TB`, `date_debut_filiere_TB`, `img_filiere_TB`) VALUES(1, 'Dev Web', '3 ans', '20 novembre 2021', 'web_fil.png'),(2, 'Dev Appli', '3 ans', '28 Septembre 2021', 'appli_dev.png'),(3, 'IA', '3 ans', '24 novembre 2021', 'ia_fil.png'),(4, 'IOT', '3 ans', '25 Novembre 2021', 'iot_fil.png'),(5, 'Machine Learning', '2 ans', '25 juillet 2020', 'ml_fil.png'),(6, 'Infographe', '3 ans', '18 Novembre 2021', 'info_fil.png');",
        ]
     sqlQuery.forEach(query=>{
          db.query(query,(err,result)=>{
               if(err) throw err;
               console.log(res);
               res.send({status:"Success...."})
          })
     })
     
})
app.get("/initgroupe",(req,res)=>{
     
     const sqlQuery =[
          "CREATE TABLE `groupe` (`id` int(11) NOT NULL,`label` varchar(255) NOT NULL,`initial` varchar(25) NOT NULL,`id_filiere` int(11) NOT NULL,`annee_en_cours` int(11) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;",
          "INSERT INTO `groupe` (`id`, `label`, `initial`, `id_filiere`, `annee_en_cours`) VALUES(315, 'Dev Appli 2022', 'DA', 2, 2022),(685, 'IOT 2022', 'iot', 4, 2022),(963, 'Web 2022', 'web', 1, 2022),(2365, 'IA 2022', 'ia', 3, 2022),(36521, 'Infographe 2022', 'inf', 6, 2022),(45678, 'IOT 2022', 'iot', 4, 2022),(45687, 'Machine Learning', 'ML', 5, 2022);",
         ]
     sqlQuery.forEach(query=>{
          db.query(query,(err,result)=>{
               if(err) throw err;
               console.log(res);
               res.send({status:"Success...."})
          })
     })
     
})
app.get("/initetudiant",(req,res)=>{
     
     const sqlQuery =[
          "CREATE TABLE `etudiant` ( `id_etudiant` int(11) NOT NULL, `nom` varchar(255) DEFAULT NULL, `sexe` varchar(25) DEFAULT NULL, `date_naissance` varchar(255) DEFAULT NULL, `mail` varchar(255) DEFAULT NULL, `status` varchar(25) NOT NULL DEFAULT 'attente', `password` varchar(255) DEFAULT NULL, `access_token` varchar(255) DEFAULT NULL, `matricule` int(11) DEFAULT NULL, `id_groupe` int(11) DEFAULT NULL, `annee_inscription` varchar(25) DEFAULT NULL, `filiere_choisi` text NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;",
          "INSERT INTO `etudiant` (`id_etudiant`, `nom`, `sexe`, `date_naissance`, `mail`, `status`, `password`, `access_token`, `matricule`, `id_groupe`, `annee_inscription`, `filiere_choisi`) VALUES(3, 'George Likemba', 'M', '18-06-2001', 'georgelikemba@gmail.com', 'rejeter', 'kata2021', 'qwe123', 9874, 315, 'License 2', ''),(4, 'Pata Mata', 'M', '24-06-2021', 'patamata@gmail.com', 'inscrit', 'asd123', 'azsx123', 9632, 685, 'L3', 'Machine learning'),(21, 'san lamamba', 'homme', '06-08-2004', 'san@gmail.com', 'inscrit', 'asd123', ' GkG6A5ct', 44625, 685, 'M1', 'IOT'),(22, 'draxx', 'homme', '05-03-2000', 'da@gmail.com', 'attente', 'asd123', ' yAZIQ0Rx', NULL, NULL, 'L2', 'Machine Learning'),(23, 'Geraud', 'homme', '06-05-2000', 'draxx@gmail.com', 'attente', 'asd123', ' qgoUw1uX', NULL, NULL, 'M1', 'Dev Appli'),(24, 'Aziz', 'femme', '02-03-2000', 'zizi@gmail.com', 'rejeter', 'asd123', ' r2QcnpZV', NULL, NULL, 'L2', 'IA'),(25, 'SAN Lamamba Popoda', 'homme', '26-05-2001', 'lamamba@gmail.com', 'inscrit', 'thepassword1234', ' 63jc3t6C', 49238, 45687, 'L2', 'Machine Learning');"
     ]
     sqlQuery.forEach(query=>{
          db.query(query,(err,result)=>{
               if(err) throw err;
               console.log(res);
               res.send({status:"Success...."})
          })
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

     function generateString() {
          const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          let result = ' ';
          const charactersLength = characters.length;
          for ( let i = 0; i < 8; i++ ) {
               result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }

          return result;
     }
     const accessT = generateString()

     const user ={
          nom:`${req.params.nom}`,
          sexe : `${req.params.sexe}`,
          date_naissance : `${req.params.date}`,
          mail : `${req.params.mail}`,
          password : `${req.params.mdp}`,
          access_token : `${accessT}`,
          annee_inscription : `${req.params.anneeC}`,
          filiere_choisi : `${req.params.filiere}`,
     }
     const sqlQuery = "INSERT INTO etudiant SET ?";
     db.query(sqlQuery, user, (err, result)=>{
          if(err) throw err;
          console.log(result);
          res.send({created:true,token:accessT})
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
app.get("/showInscription",(req,res)=>{

     const sqlQuery = "SELECT * FROM etudiant LEFT JOIN filiere ON etudiant.filiere_choisi = filiere.nom_filiere_TB LEFT JOIN groupe ON filiere.id_filiere_TB = groupe.id_filiere WHERE etudiant.status = 'attente' ";
     db.query(sqlQuery,(err, result)=>{
          if(err) throw err;
          console.log(result);
          res.send(result)
     })
})
app.get("/makeInscrit/:matricule/:groupe/:etudiant",(req,res)=>{

     const sqlQuery = `UPDATE etudiant SET status='inscrit', matricule = ${req.params.matricule}, id_groupe = ${req.params.groupe} WHERE etudiant.id_etudiant = ${req.params.etudiant} `
     db.query(sqlQuery,(err, result)=>{
          if(err) throw err;
          console.log(result);
          res.send(result)
     })
})
app.get("/makeRejecter/:etudiant",(req,res)=>{

     const sqlQuery = `UPDATE etudiant SET status = 'rejeter' WHERE etudiant.id_etudiant = ${req.params.etudiant};  `
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
     
     const sqlQuery = `SELECT * FROM admin WHERE access_token ='${req.params.token}'`;
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