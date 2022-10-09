import { useEffect, useState } from 'react'

import { BsArrowRightShort } from "react-icons/bs";

import { useForm } from '@formspree/react';

export let Newsletter = () => {
	const [suscribed, setSuscribed] = useState(false)
	const [state, handleSubmit] = useForm('xlevlebk');
	useEffect(() => {
		if (state.submitting) {
			setSuscribed(true)
		}
	}, [state])

	return (
		<section className='newsletter-section'>
			<span>newsletter</span>
			<h3>suscribite</h3>
			<p className='paragraph'>y enterate de todas las novedades</p>
			{
				!suscribed && (
					<form onSubmit={handleSubmit}>
						<input name="email" placeholder="ingresa tu email" type="email" required />
						<button type="submit" disabled={state.submitting} >
							<BsArrowRightShort />
						</button>
					</form>
				)
			}
			{
				suscribed && <p className='successfully'>SUSCRITO</p>
			}
			{
				state.submitting && <p className='sending'>ENVIANDO...</p>
			}
			{
				state.errors?.message && <p className='error'>{state.errors?.message}</p>
			}
		</section>
	)
}