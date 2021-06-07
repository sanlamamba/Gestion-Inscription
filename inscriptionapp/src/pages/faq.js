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
                         <h6>asd asdas das da ffqrfqfdada das das dffdafadfhja 1jhaj sdha jdj</h6>
                    </div>
                    <div className="faqCont">
                         <button class="faqChild">Section 1</button>
                         <div class="faqResponse">
                         <p>Lorem ipsum...</p>
                         </div>

                         <button class="faqChild">Section 2</button>
                         <div class="faqResponse">
                         <p>Lorem ipsum...</p>
                         </div>

                         <button class="faqChild">Section 3</button>
                         <div class="faqResponse">
                         <p>Lorem ipsum...</p>
                         </div> 

                    </div>


               </div>
          )
     }
}

export default FaqPage