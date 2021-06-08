import {Component} from "react";
class FaqPage extends Component{
     componentDidMount(){
          var acc = document.getElementsByClassName("faqChild");
          var i;

          for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var faqResponse = this.nextElementSibling;
          if (faqResponse.style.display === "block") {
               faqResponse.style.display = "none";
          } else {
               faqResponse.style.display = "block";
          }
          if (faqResponse.style.maxHeight) {
               faqResponse.style.maxHeight = null;
             } else {
               faqResponse.style.maxHeight = faqResponse.scrollHeight + "px";
             } 
          })
          }
     }
     

	render(){

          
          return (
               <div className="page faq">
                    <div className="faqTitle">
                         <h1>
                              FAQ
                         </h1>
                         <h6>Retrouvez ici toutes les réponses aux questions que vous vous posez concernant l'après bac.</h6>
                    </div>
                    <div className="faqCont">
                         <button class="faqChild">Je suis en terminale. Comment m’inscrire ?</button>
                         <div class="faqResponse">
                         <p>L’inscription se fait en suivant une procédure commune d’admission dans l’enseignement supérieur.</p>
                         </div>

                         <button class="faqChild">J’ai passé mon bac il y a 1 an. Comment m’inscrire ?</button>
                         <div class="faqResponse">
                         <p>Les titulaires du bac quelle que soit l’année d’obtention, âgés de moins de 26 ans, souhaitant démarrer des études supérieures ou reprendre des études en 1re année, doivent s'inscrire en suivant la procédure commune d’admission dans l’enseignement supérieur</p>
                         </div>

                         <button class="faqChild">Est-ce que la prépa, c’est vraiment l’enfer ?</button>
                         <div class="faqResponse">
                         <p>Une trentaine d’heures de cours, des colles (interrogations orales), 
                              des DST (devoirs sur table), des concours blancs. 
                              Comptez au moins 3 heures de travail quotidien en semaine, plus le week-end. 
                              Pour tenir, il faut choisir un établissement qui correspond à ses ambitions, 
                              s’intéresser aux disciplines, regarder loin devant (les écoles, l’avenir) 
                              et savoir aussi… se détendre.</p>
                         </div>
                         

                         <button class="faqChild">Puis-je contester mes notes aux examens ?</button>
                         <div class="faqResponse">
                         <p>C'est très difficile : le jury est souverain pour estimer la prestation d’un candidat. Il n’existe donc ni procédure d’appel, ni possibilité d’obtenir une nouvelle correction. Le médiateur de l’Enseignement supérieur, de la Recherche et de l'Innovation ne peut être saisi que si une erreur "matérielle" a été commise (erreur de saisie des notes, homonymie) ou lorsque le fonctionnement du jury a été irrégulier.</p>
                         </div>
                         

                         <button class="faqChild">Combien coûtent les études supérieures ?</button>
                         <div class="faqResponse">
                         <p>Le coût de la scolarité varie selon le statut de l’établissement. 
                              Dans le public, les tarifs publics annuels 
                              (hors sécurité sociale et mutuelle) sont les suivants 
                              (2020-2021) : cursus licence : de 113 € en taux réduit à 170 € ; 
                              cursus master : de 159 € en taux réduit à 243 € ; cursus ingénieurs : 
                              de 401 € en taux réduit à 601 € ; cursus doctorat : de 253 € en taux 
                              réduit à 380 € ; études médicales et vétérinaires : de 159 € à 502 € ; 
                              études paramédicales :  de 330 € à 1316 € selon les spécialités. 
                              Les boursiers sont exonérés des frais d’inscription. Dans le privé, 
                              les tarifs sont fixés librement par les établissements. 
                              Enfin, certaines filières (paramédicales, arts appliqués…) 
                              supposent d’acheter du matériel spécifique.</p>
                         </div> 

                    </div>


               </div>
          )
     }
}

export default FaqPage