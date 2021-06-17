import {Link} from 'react-router-dom'


function Header(menuDisplay, ctaDisplay,links){
	
	return (
		<header className = "header grided">
			<div className="logo">

			</div>
			<div className="menuZone">
				
				<ul className="headerMenu menuLinks">
					<Link to="/" attribute="home" className="menuChild"><li>Accueil</li></Link>
					<Link to="/about" attribute="about" className="menuChild"><li>A propos</li></Link>
					<Link to="/formation" attribute="formation" className="menuChild"><li>Nos formations</li></Link>
					<Link to="/faq" attribute="faq" className="menuChild"><li>FAQ</li></Link>
					<Link to="/contact" attribute="contact" className="menuChild"><li>Contact</li></Link>
				</ul>
			
			
				
			</div>
		</header>
	)
}

export default Header