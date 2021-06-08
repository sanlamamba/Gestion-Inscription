import { Component } from 'react';

class FormationPage extends Component{

     state ={
       formation : ""
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
          let foramtionArr= [];

       const {formation } = this.state;
          let formationP  = Array(formation);
          formationP = formationP[0]
          {for(let i in formationP){
               console.log();
               const formationChild = [formationP[i]['nom_filiere_TB'],formationP[i]['duree_filiere_TB'],formationP[i]['img_filiere_TB'],formationP[i]['date_debut_filiere_TB']];
               foramtionArr.push(formationChild);
          }}
       return (
		<div className="page formation">
               <h1>Nos formations</h1>
               <div className="grided formationGrid">
                    
                    {console.log(foramtionArr)}
                    
                    {
                         foramtionArr.map((formationItem)=>{
                              return(
                                   <div className="formationChild grided">
                                      {console.log(formationItem)}

                                      <div className="formationImg">

                                      </div>
                                      <div  className="formationInfo">
                                            <h2>{formationItem['0']}</h2>
                                            <ul className="formationDetails">
                                                <li>Duree: {formationItem[1]}</li>
                                                <li key={formationItem.date}>date de debut: {formationItem[3]}</li>
                                            </ul>
                                      </div>

                                   </div>
                              )
                         })
                    }
              
               </div>
          </div>
	     )
     }
   }
   

export default FormationPage