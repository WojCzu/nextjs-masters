import { ProductListItem } from "@/ui/molecules/ProductListItem";
import { type Product } from "@/ui/types";

type ProductListProps = { products: Product[] };

export function ProductList({ products }: ProductListProps) {
	return (
		<ul
			className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
			data-testid="products-list"
		>
			{products.map((product) => (
				<li key={product.id}>
					<ProductListItem product={product} />
				</li>
			))}
		</ul>
	);
}
