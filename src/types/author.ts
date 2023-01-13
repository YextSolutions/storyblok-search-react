export interface ImageThumbnail {
	url: string,
	width: number,
	height: number,
}

export interface Image {
	url: string,
	width: number,
	height: number,
	thumbnails?: ImageThumbnail[],
	alternateText?: string,
}

export interface ComplexImage {
	image: Image,
	details?: string,
	description?: string,
	clickthroughUrl?: string,
}

export interface EntityReference {
	entityId: string,
	name: string,
}

export default interface Ce_author {
	datePosted?: string,
	landingPageUrl?: string,
	primaryPhoto?: ComplexImage,
	richTextDescription?: string,
	name: string,
	c_author?: EntityReference[],
	c_dateCreated?: string,
	c_shortIntro?: string,
	id: string,
}
