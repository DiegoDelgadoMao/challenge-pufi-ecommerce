import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

export let Footer = () => {
	return (
		<footer>
			<div className="up">
				<h4>Pufin</h4>
				<ul>
					<li>pufi rain</li>
					<li>pufi puff</li>
					<li>pufi cart</li>
					<li>pufi nap</li>
				</ul>
				<ul>
					<li>contacto</li>
					<li>ayuda</li>
					<li>cómo comprar</li>
					<li>términos & condiciones</li>
				</ul>
				<p>compra 100% segura</p>
				<div className="social-networks">
					<p>siguenos en</p>
					<BsFacebook />
					<BsTwitter />
					<BsInstagram />
				</div>
			</div>
			<hr />
			<div className="down">
				<p>PUFI copyright 2017 - Todos los derechos reservados</p>
			</div>
		</footer>
	)
}