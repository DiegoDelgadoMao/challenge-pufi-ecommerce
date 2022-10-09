import { HomePage } from './HomePage';
import { ProductGallery } from './ProductGallery';
import { GallerySection } from './GallerySection';
import { Newsletter } from './Newsletter';
import { Footer } from './Footer';

export let App = () => {
	return (
		<>
			<HomePage />
			<ProductGallery />
			<GallerySection />
			<Newsletter />
			<Footer />
		</>
	)
}