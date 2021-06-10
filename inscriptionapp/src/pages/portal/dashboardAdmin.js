import { Component } from 'react';
import news from "../../components/news"

class DashboardAdmin extends Component{
	
	state ={
		user:[],
		liste:[]
	   }
	   
	   getData = async() =>{
		const token = sessionStorage.getItem("token");
		const role_token = sessionStorage.getItem("role");
		// console.log(token)
		let response = await fetch(`/authenticate/${role_token}/${token}`);
		const body = await response.json();
		return body[0];
		
	   }
	getInscriptionAttente = async() =>{
			
			let response = await fetch(`/showInscription`);
			const body = await response.json();
			return body;
			
		}
	getInscrit = async(matricule,groupe,etudiant) =>{
		
		let response = await fetch(`/makeInscrit/${matricule}/${groupe}/${etudiant}`);
		const body = await response.json();
		return body;
		
	}
	getRejection = async(etudiant) =>{
			
			let response = await fetch(`/makeRejecter/${etudiant}`);
			const body = await response.json();
			return body;
			
		}

		makeRejection=(e)=>{
			console.log(e.target.value)
			const etudiantId = e.target.value
			this.getRejection(etudiantId)
				.then(()=>{
					this.getInscriptionAttente()
						.then(res=>{
							const data= res;
							this.setState({liste:data})
						})
				})
		}
		startInscrit=(e)=>{
			console.log(e.target.value)
			const etudiantId = e.target.value
			const groupe = e.target.parentNode.children[2].children[1].value
			const matricule = e.target.parentNode.children[1].children[1].value
			this.getInscrit(matricule,groupe,etudiantId)
				.then(()=>{
					this.getInscriptionAttente()
						.then(res=>{
							const data= res;
							this.setState({liste:data})
						})
				})
		}
	   deconnection = ()=>{
		sessionStorage.clear()
			window.location.assign("/portal/login")
	   }
	   componentDidMount() {
		if(sessionStorage.getItem("role") != "admin") this.deconnection();
		
		this.getData()
			.then(res=>{
		    		const data = res;
				//     console.log(data)
		    		this.setState({user:data})
		  	})
		
		this.getInscriptionAttente()
			  .then(res=>{
				  const data = res;
				  this.setState({liste:data})
			  })
		}
		
		generateMatricule=()=>{
			const characters ='0123456789';
			let result = ' ';
			const charactersLength = characters.length;
			for ( let i = 0; i < 5; i++ ) {
				result += characters.charAt(Math.floor(Math.random() * charactersLength));
			}
	
			return result;
		}
	 
	   
   
	render(){
		const PanelInfo=(props)=>{
			const {liste} = this.state
			if(props.page == "1"){
				return(
					<div>
						<div className="zoneTitle">Inscription en attente</div>
						{liste.map(member=>{
							{console.log(member)}
							return(
								<div className='etudiant enAttente'>
									<h4 className='nom'>{member.nom}</h4>
									<h6 className='infoPerso'>
										Sexe : {member.sexe}, filiere voulue : {member.filiere_choisi}, date de naissance : {member.date_naissance}
									</h6>
									<h6 className='infoPerso'>
										{member.sexe=="homme"?"Il":"Elle"} s'est inscrit en {member.annee_inscription} avec comme mail est : {member.mail}
									</h6>
									<div className="guiAdmin">
										<button onClick={this.makeRejection} className='reject' value={member.id_etudiant}>
											rejeter
										</button>
										<span>
											<label>matricule</label>
											<input value={this.generateMatricule()} type='text' id='matriculeSlt'/>

										</span>
										<span>
											<label>groupe</label>
											<select id='groupeSlt'>
												<option value={member.id} >{member.label}</option>
											</select>
										</span>
										

										<button onClick={this.startInscrit} className='accept' value={member.id_etudiant}>
											Accepter
										</button>
									</div>
								</div>
							)
						})}
					</div>
				)
			}
		}
		let {user} = this.state;
		// console.log(user)
		return (
			<div className="page grided dashboard">
				<aside className="grided infoPanel">
					<div className="infoImg">
						<div className="userImg">

						</div>
					</div>
					<div className="infoPerson">
						<h2>{user.nom}</h2>
						<h4>{user["mail"]}</h4>
						<h4>{user["tel"]}</h4>
						<h4>specialite : {user["specialite"]}</h4>
						<h4> {user["fonction"]}</h4>


					</div>
					<div className="disconnectCta">
						<a href="#" className='deconnexion' onClick={this.deconnection} >Deconnexion</a>
					</div>
				</aside>
				<div className="grided information">
					<div className="usefulInfo">
						<PanelInfo page="1"/>
					</div>
					
				</div>
			</div>
		)
	}
   }


export default DashboardAdmin;