import {Link} from 'react-router-dom'

function CtaCon(menuDisplay, ctaDisplay,links){
	
	return (
		<ul className="cta-connection">
               <Link to="/portal/login">connection</Link>
               <Link to="/portal/signup">inscription</Link>

          </ul>
	)
}

export default CtaCon