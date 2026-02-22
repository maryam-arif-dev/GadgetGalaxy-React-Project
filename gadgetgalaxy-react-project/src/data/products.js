// Import images from assets folder
import iphone_15_pro from "../assets/iphone_15_pro.jpg";
import sumsung_glaxy_tab_s9 from "../assets/sumsung_glaxy_tab_s9-1.webp";
import mackbook_air_m3 from "../assets/mackbook_air_m3.webp";
import google_pixel_8 from "../assets/google_pixel_8.jpg";
import iPad_pro from "../assets/mackbook_air_m3.webp";
import dell_xps_15 from "../assets/dell_xps_15.webp";
import microsoft_surface_pro_9 from "../assets/microsoft_surface_pro_9.jpeg";
import asus_rog_zephyrus_g14 from "../assets/asus_rog_zephyrus_g14.webp";

// gadgetProducts data array
export const gadgetProducts = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 999.99,
    category: "phone",
    iamge: iphone_15_pro,
    description:
      "Experience the power of titanium, the A17 Pro chip, and a pro-grade camera system.",
  },
  {
    id: 2,
    name: "Samsung Galaxy Tab S9",
    price: 799.0,
    category: "tablet",
    iamge: sumsung_glaxy_tab_s9,
    description:
      "A premium Android tablet with a vibrant AMOLED display and S-Pen included for creativity.",
  },
  {
    id: 3,
    name: "MacBook Air M3",
    price: 1099.0,
    category: "laptop",
    iamge: mackbook_air_m3,
    description:
      "Supercharged by the M3 chip, this thin and light laptop is built for speed and portability.",
  },
  {
    id: 4,
    name: "Google Pixel 8",
    price: 699.0,
    category: "phone",
    iamge: google_pixel_8,
    description:
      "The helpful Google phone with a sophisticated camera and all-day battery life.",
  },
  {
    id: 5,
    name: "iPad Pro 12.9-inch",
    price: 1199.99,
    category: "tablet",
    iamge: iPad_pro,
    description:
      "The ultimate iPad experience with the Liquid Retina XDR display and M2 chip performance.",
  },
  {
    id: 6,
    name: "Dell XPS 15",
    price: 1499.0,
    category: "laptop",
    iamge: dell_xps_15,
    description:
      "A high-performance laptop featuring a stunning 4K display and powerful Intel Core processors.",
  },
  {
    id: 7,
    name: "Microsoft Surface Pro 9",
    price: 999.0,
    category: "tablet",
    iamge: microsoft_surface_pro_9,
    description:
      "The most powerful Surface Pro yet, combining laptop power with tablet flexibility.",
  },
  {
    id: 8,
    name: "Asus ROG Zephyrus G14",
    price: 1599.99,
    category: "laptop",
    iamge: asus_rog_zephyrus_g14,
    description:
      "A compact but incredibly powerful gaming laptop with high-end graphics and cooling.",
  },
];

export function getProductById(id) {
  return gadgetProducts.find((p) => p.id === Number(id));
}
