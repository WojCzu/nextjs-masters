import { ProductList } from "@/ui/oranisms/ProductList";
import { type Product } from "@/ui/types";

const products: Product[] = [
	{
		id: "1",
		category: "plants",
		name: "Bonsai",
		price: 6969,
		coverImage: {
			alt: "bonsai plant",
			src: "/bonsai.webp",
		},
	},
	{
		id: "2",
		category: "plants",
		name: "Some Plant",
		price: 6969,
		coverImage: {
			alt: "plant",
			src: "/plant.webp",
		},
	},
	{
		id: "3",
		category: "plants",
		name: "Plum Blossom",
		price: 6969,
		coverImage: {
			alt: "plum blossom plant",
			src: "/plum_blossom.webp",
		},
	},
	{
		id: "4",
		category: "plants",
		name: "Orchid",
		price: 6969,
		coverImage: {
			alt: "orchid plant",
			src: "/orchid.webp",
		},
	},
];

export default function Home() {
	return (
		<main className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
			<ProductList products={products} />
		</main>
	);
}
