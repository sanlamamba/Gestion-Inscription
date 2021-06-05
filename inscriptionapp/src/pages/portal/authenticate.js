import { Component } from 'react';
import formation from "../../components/formation"

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
                    <div className="offset"></div>
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
                                   <select id="roleSelect">
                                        <option value="connect">Connection entant que:</option>
                                        <option value="etudiant">Etudiant</option>
                                        <option value="users">Administrateur</option>
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
     invalidContent=(inputOne,inputTwo)=>{    
          inputOne.style.border = "2px solid red"
          inputTwo.style.border = "2px solid red"
     }
     validContent=(inputOne,inputTwo)=>{    
          inputOne.style.border = "1px solid grey"
          inputTwo.style.border = "1px solid grey"
     }
     getData = async(mail,password,table = true) =>{
          let response;
          if(table){
               response = await fetch(`/showetudiant/${mail}/${password}`);
          }else{
               response = await fetch(`/showusers/${mail}/${password}`);
          }
       const body = await response.json();
       if(body) return true
       
       if(!body){
          this.getData(mail,password,false)
       }
       return body
     }
     getformation= async() =>{
          const response = await fetch("/showformation");
          const body = await response.json();
          if (response.status !=200) throw Error(body.message);
          return body;
        }
     componentDidMount() {
          this.getformation()
               .then(res=>{
               const data = res;
               this.setState({formation: data});
          })

     }
      
     signup=(e)=>{
          e.preventDefault();
          const emailTxt = document.getElementById("emailTxt")
          const nameTxt = document.getElementById("emailTxt")
          const passwordTxt = document.getElementById("passwordTxt")
          /*HANDLING EMAIL ERRORS*/
          if(emailTxt.textLength == 0 || passwordTxt.textLength ==0){
               this.invalidContent(emailTxt,passwordTxt)
          }else{
               this.getData(emailTxt.value,passwordTxt.value)
                    .then(res=>{
                         if(!res){
                              this.invalidContent(emailTxt,passwordTxt);
                              setTimeout(this.validContent,3000,emailTxt,passwordTxt)
                         }else{
                              // alert(res)
                              sessionStorage.setItem("user",`${emailTxt.value}`)
                              window.location.assign("dashboard")
                         }
                    })
                    
          }
          
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
                    <div className="offset"></div>
                    <div className="authenticate-form">
                         <form>
                              <span className="formText">
                                   <h2>
                                        Inscription
                                   </h2>
     
                              </span>
                              <span className="formInputs signup">
                                   <input id="nom" required type="text" placeholder="Nom et prenom"/>
                                   <input id="email" required type="email" placeholder="email"/>
                                   <span className="grided twoCol">
                                        <input id="mdp" required type="password" placeholder="saisir un mot de passe"/>
                                        <input id="reqMdp" required type="password" placeholder="confirmer votre mot de passe"/>
                                   </span>
                                   <span className="grided twoCol">
                                        <input id="birthdate" required type="date" placeholder="date de naissance"/>
                                        <select id='sexe' required className="inputStyle">
                                             <option value="null">Sexe:</option>
                                             <option value="homme">Homme</option>
                                             <option value="femme">Femme</option>
                                        </select>
                                   </span>
                                   <select id="filiere" required className="inputStyle">
                                        <option>Choisir votre filiere:</option>
                                        {formationArr.map(formatChild=>{
                                             return(
                                                  <option value={formatChild["0"]}>{formatChild["0"]}</option>
                                             )
                                             
                                        })}
                                   </select>
                                   <select required className="inputStyle">
                                        <option value="null">Annee Inscription</option>
                                        <option>L1</option>
                                        <option>L2</option>
                                        <option>L3</option>
                                        <option>M1</option>
                                        <option>M2</option>
                                   </select>
                                      
                                   
                                   <label>
                                        <input required className="rememberCheck" type="checkbox"/>
                                        &nbsp;Vous accepter tous nos termes d'utilisation
     
                                   </label>
     
                              </span>
                              <span className="formSubmit">
                                   <input type="submit" value="s'inscrire" className="button primBtn" />
     
                              </span>
                              
                         </form>
                    </div>
                    
               </div>
          )
       
     }
}
   


// function SignUppage(){
	
// 	return (
// 		<div className="page signup authenticate">
//                <div className="offset"></div>
//                <div className="authenticate-form">
//                     <form>
//                          <span className="formText">
//                               <h2>
//                                    Inscription
//                               </h2>
//                               <p>
//                                    Debutez votre voyage numerique <br></br>un monde plein d'adventure !
//                               </p>

//                          </span>
//                          <span className="formInputs signup">
//                               <input type="text" placeholder="Nom et prenom"/>
//                               <input type="email" placeholder="email"/>
//                               <span className="grided twoCol">
//                                    <input type="date" placeholder="date de naissance"/>
//                                    <select className="inputStyle">
//                                         <option>Sexe:</option>
//                                         <option>Homme</option>
//                                         <option>Femme</option>
//                                    </select>
//                               </span>
//                               <select className="inputStyle">
//                                    <option>Choisir votre filiere:</option>
//                                    {formation.map(formatChild=>{
//                                         return(
//                                              <option>{formatChild.nom}</option>
//                                         )
                                        
//                                    })}
//                               </select>
//                               <span className="grided twoCol">
//                                    <select className="inputStyle">
//                                         <option>Annee Inscription</option>
//                                         <option>License 1</option>
//                                         <option>License 2</option>
//                                         <option>License 3</option>
//                                         <option>Master I</option>
//                                         <option>Master II</option>
//                                    </select>
//                                    <select className="inputStyle">
//                                         <option>Situation Matrimonial</option>
//                                         <option>Celibataire</option>
//                                         <option>Marie</option>
//                                         <option>Divorce</option>
//                                         <option>C'est complique</option>
//                                    </select>
                                   
//                               </span>
                              
//                               <label>
//                                    <input className="rememberCheck" type="checkbox"/>
//                                    &nbsp;Vous accepter tous nos termes d'utilisation

//                               </label>

//                          </span>
//                          <span className="formSubmit">
//                               <input type="submit" value="s'inscrire" className="button primBtn" />

//                          </span>
                         
//                     </form>
//                </div>
               
//           </div>
// 	)
// }

export {LoginPage, SignUppage}

