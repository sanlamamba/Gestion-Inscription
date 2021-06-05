import { Component } from 'react';
import news from "../../components/news"

class DashboardEtudiant extends Component{
	
	state ={
		user:[],
	   }
	   invalidContent=(inputOne,inputTwo)=>{    
		   inputOne.style.border = "3px solid red"
		   inputTwo.style.border = "3px solid red"
	   }
	   validContent=(inputOne,inputTwo)=>{    
		   inputOne.style.border = "1px solid grey"
		   inputTwo.style.border = "1px solid grey"
	   }
	   getData = async() =>{
		const token = sessionStorage.getItem("token");
		const role_token = sessionStorage.getItem("role");
		console.log(token)
		let response = await fetch(`/authenticate/${role_token}/${token}`);
		const body = await response.json();
		return body[0];
		
	   }
	   deconnection = ()=>{
		sessionStorage.clear()
	   }
	   componentDidMount() {
		if(sessionStorage.getItem("role") != "etudiant"){
			window.location.assign("/connection");
		}
		this.getData()
		  .then(res=>{
		    const data = res;
		//     console.log(data)
		    this.setState({user:data})
		  })
	 
	   }
	 
	   
   
	render(){
		
		let {user} = this.state;
		console.log(user)
		const UsefulInfo = (props)=>{
			if(props.status == "inscrit"){
				return(
					<div>
						<h4>SIDK{user["matricule"]}</h4>
						<h4>{user["initial"]}{user["id_groupe"]}</h4>
					</div>
				)
			}else{
				return(
					<h1>World</h1>
				)
			}
		}
		const MessageUser =(props)=>{
			if(props.status == 'inscrit'){
				return(
					<div className="infoStudent">
							
						<h4>Felicitation! Votre inscription fut valider, vous avez recu le matricule : SIDK{user["matricule"]} et vous integrez le groupe : {user["initial"]}{user["id_groupe"]} ! Les cours debuterons le {user["date_debut_filiere_TB"]}</h4>
						<h4>Veuillez vous rapprocher de l'administration pour tout besoin ou question, afin d'eviter tout desagrement !</h4>
						<h6>PS:Vous receverez par mail une liste de dossier a fournir pour completer votre dossier, merci beaucoup!</h6>     
					</div>
				)
			}else{
				return(
					<div className="infoStudent">
							
						<h4>Felicitation! Votre inscription fut valider, vous avez recu le matricule : SIDK5984 et vous integrez le groupe : PR631 ! Les cours debuterons le 24/09/2021</h4>
					</div>
				)
			}
		}
		return (
			<div className="page grided dashboard">
				<aside className="grided infoPanel">
					<div className="infoImg">
					</div>
					<div className="infoPerson">
						<h2>{user.nom}</h2>
						<UsefulInfo status={user["status"]} />
						<h4>{user["annee_inscription"]}</h4>
						<h4> status : {user["status"]}</h4>


					</div>
					<div className="disconnectCta">
						<a href="#" >Deconnexion</a>
					</div>
				</aside>
				<div className="grided information">
					<div className="usefulInfo">
						<div className="zoneTitle">Vos nouvelles</div>
						<MessageUser status={user["status"]} />
						{/* <div className="infoStudent">
							
							<h4>Felicitation! Votre inscription fut valider, vous avez recu le matricule : SIDK5984 et vous integrez le groupe : PR631 ! Les cours debuterons le 24/09/2021</h4>
							<h4>Veuillez vous rapprocher de l'administration pour tout besoin ou question, afin d'eviter tout desagrement !</h4>
							<h6>PS:Vous receverez par mail une liste de dossier a fournir pour completer votre dossier, merci beaucoup!</h6>     
						</div> */}
					</div>
					<div className="contentFiller">
						<div className="zoneTitle">Les news :</div>
						<div className="grided newsGrid">
							{
								news.map((newsChild)=>{
									return(
										<div className="newsChild grided">
											<div className="newsImg">

											</div>
											<div  className="newsInfo">
												<h2>{newsChild.titre}</h2>
												
											</div>

										</div>
									)
								})
							}
						</div>
					</div>
				</div>
			</div>
		)
	}
   }


export default DashboardEtudiant;