import { Nav } from './Nav.jsx'

export const HomePage = () => {
	return (
		<header>
			<Nav />
			<h1>Estár cómodo, <br /> nunca fue tan fácil.</h1>
			<a className='button' href="#shop">Shop</a>
		</header>
	)
}
