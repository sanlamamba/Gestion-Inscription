
function Header(menuDisplay, ctaDisplay,links){
	
	return (
		<header className = "header grided">
			<div className="logo">

			</div>
			<div className="menuZone">
				
				<ul className="headerMenu menuLinks">
					<a href="http://localhost:3000" attribute="home" className="menuChild"><li>Accueil</li></a>
					<a href="http://localhost:3000/about" attribute="about" className="menuChild"><li>A propos</li></a>
					<a href="http://localhost:3000/formation" attribute="formation" className="menuChild"><li>Nos formations</li></a>
					<a href="http://localhost:3000/faq" attribute="faq" className="menuChild"><li>FAQ</li></a>
					<a href="http://localhost:3000/contact" attribute="contact" className="menuChild"><li>Contact</li></a>
				</ul>
			
			
				
			</div>
		</header>
	)
}

export default Header