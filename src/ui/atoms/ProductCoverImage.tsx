import { type Product } from "@/ui/types";

type ProductCoverImageProps = Product["coverImage"];

export function ProductCoverImage({ src, alt }: ProductCoverImageProps) {
	return (
		<div className="aspect-square overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-100">
			<img
				src={src}
				alt={alt}
				width={320}
				height={320}
				className="h-full w-full object-cover  object-center p-4 transition-transform hover:scale-105"
			/>
		</div>
	);
}
