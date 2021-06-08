
function AboutPage(){
	
	return (
		<div className="page contact">
               <h2>Qui sommes nous?</h2>
               <div className="grided aboutCont">
                    <div className="grided generalCont mainInfo">
                         <div className="aboutImg">

                         </div>
                         <div className="grided aboutInfo">
                              <h5>
                                   Etablissement d'enseignement Supérieur agréé, basé à Dakar (Sénégal), l'institut SUP'INFO forme depuis plus d'une vingtaine d'années des générations d'étudiants africains issus des quatre coins du continent . Centre de certifications internationales et partenaire de différentes grandes institutions, SUP'INFO vous accueille pour des formations orientées 'Entreprise', par une approche pédagogique novatrice à forte composante technologique.
                                   Créativité et Innovation sont les maîtres mots de cet espace entièrement dédié à la communication DIGITALE. L'institut SUP'IMAX est le lieu idéal d'immersion des jeunes talents inspirés par une carrière touchant à l'Audiovisuel Numérique ou aux Arts Graphiques . De Graphic Designer à Web Analyst en passant par l'animation 3D ou la réalisation RADIO/TV, vous évoluerez au sein de SUP'IMAX en profitant de STUDIOS PROfessionnels et du meilleur encadrement technique.
                              </h5>
                              <div className="aboutCta">
                                   <a href="./portal/signup"><button className="button primBtn">s'inscire</button></a>
                                   <a href="./portal/login"><button className="button secBtn">se connecter</button></a>
                              </div>    
                         </div>
                    </div>
                    <div className="partners">
                         <h3>Partenaires</h3>
                         <div className='grided partnerGrid'>
                              <div className='partnerImg cisco'></div>
                              <div className='partnerImg google'></div>
                              <div className='partnerImg bluray'></div>
                              <div className='partnerImg sony'></div>
                              <div className='partnerImg qualcom'></div>
                         </div>
                    </div>
               </div>
               
          </div>
	)
}

export default AboutPage