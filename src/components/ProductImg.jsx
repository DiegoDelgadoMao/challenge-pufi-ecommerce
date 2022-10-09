export let ProductImg = ({ imgUrl }) => {
	return (
		<div className="product-gallery__img">
			<img src={imgUrl} alt="" />
			<div className="hover">
				<button>Shop</button>
			</div>
		</div>
	)
}