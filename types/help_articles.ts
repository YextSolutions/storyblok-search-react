// src/types/products.ts

export enum Condition {
    NEW = "New",
    REFURBISHED = "Refurbished",
    USED = "Used",
  }
  
  // ...other enums such as CurrencyCode

  export interface EntityReference {
    entityId: string;
    name: string;
  }
  
  export interface ImageThumbnail {
    url: string;
    width: number;
    height: number;
  }
  
  export interface Image {
    url: string;
    width: number;
    height: number;
    thumbnails?: ImageThumbnail[];
    alternateText?: string;
  }

  export interface c_mainPhoto {
    sourceUrl: string;
    width: number;
    height: number;
    thumbnails?: ImageThumbnail[];
    alternateText?: string;
  }
  
  export interface ComplexImage {
    image: Image;
    details?: string;
    description?: string;
    clickthroughUrl?: string;
  }

  export interface Name {
    value?: string;
  }
  
  export interface c_author {
    name: string;
    entityId: string;
  }

  export interface externalArticlePostDate {
    name?: Date;
    value?: Date;
  }
  
  // ...other interfaces such as StockStatus and ShippingHeight

  export interface HelpArticle {
    name: string;
    id: string;
    c_author?: c_author[];
    c_mainPhoto?:Image[];
    externalArticlePostDate: Date;
    shortDescription?: string;
    // ...other fields such as color and shippingHeight
  }