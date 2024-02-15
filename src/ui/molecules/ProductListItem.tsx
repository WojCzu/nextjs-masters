import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { type Product } from "@/ui/types";

type ProductListItemProps = {
	product: Product;
};

export function ProductListItem({ product }: ProductListItemProps) {
	return (
		<article>
			<ProductCoverImage src={product.coverImage.src} alt={product.coverImage.alt} />
			<ProductListItemDescription product={product} />
		</article>
	);
}
