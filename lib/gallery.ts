export type GalleryImage = {
	year: number;
	src: string;
	alt: string;
};

export type GalleryByYear = {
	year: number;
	images: GalleryImage[];
};

export function groupGalleryByYear(images: GalleryImage[]): GalleryByYear[] {
	const grouped = new Map<number, GalleryImage[]>();

	for (const image of images) {
		const yearImages = grouped.get(image.year) ?? [];
		yearImages.push(image);
		grouped.set(image.year, yearImages);
	}

	return Array.from(grouped.entries())
		.sort(([yearA], [yearB]) => yearB - yearA)
		.map(([year, yearImages]) => ({ year, images: yearImages }));
}
