
function ContactPage(){
	
	return (
		<div className="page contact">
               <h2>Nous contacter</h2>
               <div className="grided contactCont generalCont">
                    <div className="mapsCont">
                         <h3>Retrouvez nous sur la carte:</h3>
                         <div className='maps'>

                         </div>
                    </div>
                    <div className="socials">
                         <h3>Retrouvez nous en ligne: </h3>
                         <span className="grided socialChild">
                              <span className="socialIcon">
                                   <img src='/social/home.png'/>
                              </span>
                              <h4>Dakar - Senegal</h4>
                              <span className="socialIcon">
                                   <img src='/social/mail.png'/>
                              </span>
                              <h4>contact@groupesupinfo.com</h4>
                              <span className="socialIcon">
                                   <img src='/social/facebook.png'/>
                              </span>
                              <h4>Groupe Supinfo Senegl</h4>
                              <span className="socialIcon">
                                   <img src='/social/phone.png'/>
                              </span>
                              <h4>+221 77 894 23 69</h4>
                              <span className="socialIcon">
                                   <img src='/social/instagram.png'/>
                              </span>
                              <h4>groupesupinfo_sn</h4>
                              
                         </span>
                    </div>
               </div>
               
          </div>
	)
}

export default ContactPage