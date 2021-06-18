import { Component } from 'react';

class LoginPage extends Component{

     invalidContent=(inputOne,inputTwo)=>{    
          inputOne.style.border = "3px solid red"
          inputTwo.style.border = "3px solid red"
     }
     validContent=(inputOne,inputTwo)=>{    
          inputOne.style.border = "1px solid grey"
          inputTwo.style.border = "1px solid grey"
     }
     getData = async(mail,password,table) =>{
          let response = await fetch(`/show${table}/${mail}/${password}`);
          const body = await response.json();
       
       return body
     }
     
     login=(e)=>{
          e.preventDefault();
          const emailTxt = document.getElementById("emailTxt")
          const passwordTxt = document.getElementById("passwordTxt")
          const roleTxt = document.getElementById("roleSelect")
          // console.log(roleTxt.value)
          /*HANDLING EMAIL ERRORS*/
          
          if(roleTxt.value == "connect"){
               alert("Sight");
          }else{
               if(emailTxt.textLength == 0 || passwordTxt.textLength == 0){
                    this.invalidContent(emailTxt,passwordTxt,roleTxt)
               }else{
                     this.getData(emailTxt.value,passwordTxt.value,roleTxt.value)
                    .then(res=>{
                         if(res.length == 0){
                              this.invalidContent(emailTxt,passwordTxt,roleTxt);
                              setTimeout(this.validContent,3000,emailTxt,passwordTxt,roleTxt)
                         }else{
                              // console.log(res[0]["access-token"])
                              if(res == false){
                                   this.invalidContent(emailTxt,passwordTxt,roleTxt);
                                   setTimeout(this.validContent,3000,emailTxt,passwordTxt,roleTxt)
                              }else{
                                   const access_token = res[0]["access_token"]
                                   console.log(access_token)
                                   sessionStorage.setItem("token",`${access_token}`)
                                   sessionStorage.setItem("user",`${emailTxt.value}`)
                                   sessionStorage.setItem("role",`${roleTxt.value}`)
                                   window.location.assign(`dashboard/${roleTxt.value}`)
                              }
                         }
                    })
               }
          }
     }

     render(){
          return (
               <div className="page login authenticate">
                    <img src ='/img/connection.png' className='imageCont'/>
                    <div className="authenticate-form">
                         <form>
                              <span className="formText">
                                   <h2>
                                        Connection
                                   </h2>
                                   <p>
                                        Connectez vous dans notre monde numerique <br/> et profitez de la magie!
                                   </p>
     
                              </span>
                              <span className="formInputs login">
                                   <input id="emailTxt" type="email" placeholder="Email"/>
                                   <input id="passwordTxt" type="password" placeholder="mot de passe"/>
                                   <select className='inputStyle' id="roleSelect">
                                        <option value="connect">Connection entant que:</option>
                                        <option value="etudiant">Etudiant</option>
                                        <option value="admin">Administrateur</option>
                                   </select>
                                   <label>
                                        <input className="rememberCheck" type="checkbox"/>
                                        &nbsp;Se souvenir de moi?  
     
                                   </label>
     
                              </span>
                              <span className="formSubmit">
                                   
                                   <input onClick={this.login} type="submit" value="connection" className="button primBtn" />
     
                              </span>
                              
                         </form>
                    </div>
                    
               </div>
          )
       
     }
}

class SignUppage extends Component{

     state ={
       user : "",
       formation:""
     }
     
     addEtudiant= async(nom,sexe,date,mail,mdp,anneeC,filiere) =>{
          const response = await fetch(`/addetudiant/${nom}/${sexe}/${date}/${mail}/${mdp}/${anneeC}/${filiere}`);
          const body = await response.json();
          if (response.status !=200) throw Error(body.message);
          return body;
        }

      
     signup=(e)=>{
          e.preventDefault();
          const nomTxt = document.getElementById("nomTxt")
          const emailTxt = document.getElementById("emailTxt")
          const sexeTxt = document.getElementById("sexeTxt")
          const dateTxt = document.getElementById("dateTxt")
          const passwordTxt = document.getElementById("passwordTxt")
          const anneeTxt = document.getElementById("anneeTxt")
          const filiereTxt = document.getElementById("filiereTxt")
          /*HANDLING EMAIL ERRORS*/
          if(emailTxt.textLength == 0 || dateTxt.textLength ==0 || passwordTxt.textLength ==0 || sexeTxt.value == "null" || anneeTxt.textLength == 0 || filiereTxt.value == "null"){
               alert("CHIPEUR")
          }else{
               this.addEtudiant(nomTxt.value,sexeTxt.value, dateTxt.value,emailTxt.value,passwordTxt.value,anneeTxt.value,filiereTxt.value)
                    .then(res=>{
                         console.log(res["token"])
                         sessionStorage.setItem("token",`${res["token"]}`)
                         sessionStorage.setItem("user",`${emailTxt.value}`)
                         sessionStorage.setItem("role","etudiant")
                         window.location.assign(`dashboard/etudiant`)
                    })
                    
          }
          
     }
     getData = async() =>{
          const response = await fetch("/showformation");
          const body = await response.json();
          if (response.status !=200) throw Error(body.message);
          return body;
     }
     componentDidMount() {
     this.getData()
          .then(res=>{
          const data = res;
          this.setState({formation: data});
          })
     }   

     render(){
          let formationArr= [];

       const {formation } = this.state;
       console.log(formation)
          
          {for(let i in formation){
               console.log(formation)
               const formationChild = [formation[i]['nom_filiere_TB'],formation[i]['id_filiere_TB']];
               formationArr.push(formationChild);
          }}
          console.log(formationArr)
          return (
               <div className="page signup authenticate">
                    <img src ='/img/inscription.png' className='imageCont'/>
                    <div className="authenticate-form">
                         <form id='signUpForm'>
                              <span className="formText">
                                   <h2>
                                        Inscription
                                   </h2>
     
                              </span>
                              <span className="formInputs signup">
                                   <input id="nomTxt" required type="text" placeholder="Nom et prenom"/>
                                   <input className='inputStyle' id="emailTxt" required type="email" placeholder="email"/>
                                   <input id="passwordTxt" required type="password" placeholder="saisir un mot de passe"/>
                                   <span className="grided twoCol">
                                        <input id="dateTxt" required type="text" placeholder="date de naissance: jj-mm-aaaa"/>
                                        <select id='sexeTxt' required className="inputStyle">
                                             <option value="null">Sexe:</option>
                                             <option value="homme">Homme</option>
                                             <option value="femme">Femme</option>
                                        </select>
                                   </span>
                                   <select id="filiereTxt" required className="inputStyle">
                                        <option value="null">Choisir votre filiere:</option>
                                        {formationArr.map(formatChild=>{
                                             return(
                                                  <option value={formatChild["0"]}>{formatChild["0"]}</option>
                                             )
                                             
                                        })}
                                   </select>
                                   <select id="anneeTxt" required className="inputStyle">
                                        <option value="null">Annee Inscription</option>
                                        <option value="L1">L1</option>
                                        <option value="L2">L2</option>
                                        <option value="L3">L3</option>
                                        <option value="M1">M1</option>
                                        <option value="M2">M2</option>
                                   </select>
                                      
                                   
                                   <label>
                                        <input required className="rememberCheck" type="checkbox"/>
                                        &nbsp;Vous accepter tous nos termes d'utilisation
     
                                   </label>
     
                              </span>
                              <span className="formSubmit">
                              <input onClick={this.signup} type="submit" value="inscription" className="button primBtn" />
     
                              </span>
                              
                         </form>
                    </div>
                    
               </div>
          )
       
     }
}
   
export {LoginPage, SignUppage}

