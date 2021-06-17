import main from './../main.png'

function HomePage(){
	
	return (
		<div className="page home">
               <div className="homeText">
                    <h1>
                         Decollez votre carriere numerique grace a notre aide !
                    </h1>
                    <div classNamte="cta">
                         <a href="./portal/signup"><button className="button primBtn">s'inscire</button></a>
                         <a href="./formation"><button className="button secBtn">En savoir plus</button></a>
                    </div>
               </div>
               <img src ={main} width='100%' className='imageCont'/>
          </div>
	)
}

export default HomePage