import { ProductImg } from "./ProductImg";
import { ProductCard } from "./ProductCard";

export const ProductGallery = () => {
	return (
		<section className="product-gallery">

			<ProductImg imgUrl='https://images.pexels.com/photos/1451040/pexels-photo-1451040.jpeg?auto=compress&cs=tinysrgb&w=600' />
			<ProductCard>
				<img id="rain" src="http://pngimg.com/uploads/umbrella/umbrella_PNG69133.png" alt="" />
				<h2>Pufi RAIN</h2>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, officia.</p>
				<button className="product__button">
					>
					<span>ver más</span>
				</button>
			</ProductCard>
			<ProductCard>
				<div id="puf" className="product">
					<img src="https://static.wixstatic.com/media/2cd43b_4b58e1ed4a4d46fca7197f5e40c35b61~mv2_d_1920_1870_s_2.png/v1/fill/w_320,h_312,q_90/2cd43b_4b58e1ed4a4d46fca7197f5e40c35b61~mv2_d_1920_1870_s_2.png" alt="" />
					<h2>Pufi PUF</h2>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, officia.</p>
					<button className="product__button">
						>
						<span>ver más</span>
					</button>
				</div>
			</ProductCard>
			<ProductImg imgUrl='https://images.pexels.com/photos/871060/pexels-photo-871060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
			<ProductImg imgUrl='https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&w=600' />
			<ProductCard>
				<img id="cart" src="https://static.vecteezy.com/system/resources/thumbnails/010/870/087/small/clutch-bag-female-bag-isolated-png.png" alt="" />
				<h2>Pufi CART</h2>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, officia.</p>
				<button className="product__button">
					>
					<span>ver más</span>
				</button>
			</ProductCard>
			<ProductCard>
				<img id="nap" src="https://www.pngplay.com/wp-content/uploads/2/Black-Suitcase-PNG-Photos.png" alt="" />
				<h2>Pufi NAP</h2>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, officia.</p>
				<button className="product__button">
						>
					<span>ver más</span>
				</button>
			</ProductCard>
			<ProductImg imgUrl='https://images.pexels.com/photos/842921/pexels-photo-842921.jpeg?auto=compress&cs=tinysrgb&w=600' />
		</section>
	)
}
