interface ProductInfo {
  brand: string;
  name: string;
  description: string;
  size: number;
  price: number;
  discount: number;
  quantity: number;
  originalPrice: number;
  mainPicture: string;
  miniaturePictures: string[];
}

export const productInfo: ProductInfo = {
  brand: "NIKE",
  name: "AIR JORDAN 1 LOW STARFISH",
  description:
    "The Air Jordan 1 Low Starfish features a smooth white leather upper with black Swooshes and sharp Starfish overlays, similar to the color uniform Michael Jordan wore when he famously broke the backboard in a 1985 exhibition game in Italy. A matching woven tongue label adds to the design's retro appeal.",
  size: 42.5,
  price: 130,
  discount: 50,
  quantity: 10,
  originalPrice: 260,
  mainPicture:
    "https://res.cloudinary.com/dmskvrfgc/image/upload/v1679902243/Sneakers/Starfish3_g05q0i.jpg",
  miniaturePictures: [
    "https://res.cloudinary.com/dmskvrfgc/image/upload/v1679902569/Sneakers/Starfish6_tjdhws.jpg",
    "https://res.cloudinary.com/dmskvrfgc/image/upload/v1679902243/Sneakers/Starfish3_g05q0i.jpg",
    "https://res.cloudinary.com/dmskvrfgc/image/upload/v1679902242/Sneakers/Starfish4_noizfi.jpg",
    "https://res.cloudinary.com/dmskvrfgc/image/upload/v1679902239/Sneakers/Starfish5_tzhbd8.jpg",
  ],
};
