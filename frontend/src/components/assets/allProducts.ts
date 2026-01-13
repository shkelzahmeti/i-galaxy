import p1_img from "./product_1.png";
import p2_img from "./product_1.png";
import p3_img from "./product_1.png";
import p4_img from "./product_1.png";
import p5_img from "./product_1.png";
import p6_img from "./product_1.png";
import p7_img from "./product_1.png";
import p8_img from "./product_1.png";
import p9_img from "./product_1.png";
import p10_img from "./product_1.png";
import p11_img from "./product_1.png";
import p12_img from "./product_1.png";
import p13_img from "./product_13.png";
import p14_img from "./product_36.png";
import p15_img from "./product_36.png";
import p16_img from "./product_36.png";
import p17_img from "./product_36.png";
import p18_img from "./product_36.png";
import p19_img from "./product_36.png";
import p20_img from "./product_36.png";
import p21_img from "./product_36.png";
import p22_img from "./product_36.png";
import p23_img from "./product_36.png";
import p24_img from "./product_36.png";
import p25_img from "./product_36.png";
import p26_img from "./product_36.png";
import p27_img from "./product_36.png";
import p28_img from "./product_36.png";
import p29_img from "./product_36.png";
import p30_img from "./product_36.png";
import p31_img from "./product_36.png";
import p32_img from "./product_36.png";
import p33_img from "./product_36.png";
import p34_img from "./product_36.png";
import p35_img from "./product_36.png";
import p36_img from "./product_36.png";

let allProducts = [
  // iPhones
  {
    id: 1,
    name: "iPhone 15 Pro Max 256GB",
    category: "iphone",
    image: p1_img,
    newPrice: 1199.0,
    oldPrice: 1299.0,
  },
  {
    id: 2,
    name: "iPhone 15 Pro 128GB",
    category: "iphone",
    image: p2_img,
    newPrice: 999.0,
    oldPrice: 1099.0,
  },
  {
    id: 3,
    name: "iPhone 15 256GB",
    category: "iphone",
    image: p3_img,
    newPrice: 899.0,
    oldPrice: 999.0,
  },
  {
    id: 4,
    name: "iPhone 15 128GB",
    category: "iphone",
    image: p4_img,
    newPrice: 799.0,
    oldPrice: 899.0,
  },
  {
    id: 5,
    name: "iPhone 14 Pro Max 256GB",
    category: "iphone",
    image: p5_img,
    newPrice: 1099.0,
    oldPrice: 1199.0,
  },
  {
    id: 6,
    name: "iPhone 14 Pro 128GB",
    category: "iphone",
    image: p6_img,
    newPrice: 999.0,
    oldPrice: 1099.0,
  },
  {
    id: 7,
    name: "iPhone 14 256GB",
    category: "iphone",
    image: p7_img,
    newPrice: 799.0,
    oldPrice: 899.0,
  },
  {
    id: 8,
    name: "iPhone 14 128GB",
    category: "iphone",
    image: p8_img,
    newPrice: 699.0,
    oldPrice: 799.0,
  },
  {
    id: 9,
    name: "iPhone SE 2022 128GB",
    category: "iphone",
    image: p9_img,
    newPrice: 429.0,
    oldPrice: 499.0,
  },
  {
    id: 10,
    name: "iPhone 13 Pro Max 256GB",
    category: "iphone",
    image: p10_img,
    newPrice: 999.0,
    oldPrice: 1099.0,
  },
  {
    id: 11,
    name: "iPhone 13 Pro 128GB",
    category: "iphone",
    image: p11_img,
    newPrice: 899.0,
    oldPrice: 999.0,
  },
  {
    id: 12,
    name: "iPhone 13 128GB",
    category: "iphone",
    image: p12_img,
    newPrice: 699.0,
    oldPrice: 799.0,
  },

  // Samsung Galaxy
  {
    id: 13,
    name: "Samsung Galaxy S23 Ultra 256GB",
    category: "galaxy",
    image: p13_img,
    newPrice: 1199.0,
    oldPrice: 1299.0,
  },
  {
    id: 14,
    name: "Samsung Galaxy S23+ 128GB",
    category: "galaxy",
    image: p14_img,
    newPrice: 999.0,
    oldPrice: 1099.0,
  },
  {
    id: 15,
    name: "Samsung Galaxy S23 256GB",
    category: "galaxy",
    image: p15_img,
    newPrice: 899.0,
    oldPrice: 999.0,
  },
  {
    id: 16,
    name: "Samsung Galaxy S22 Ultra 256GB",
    category: "galaxy",
    image: p16_img,
    newPrice: 1099.0,
    oldPrice: 1199.0,
  },
  {
    id: 17,
    name: "Samsung Galaxy S22+ 128GB",
    category: "galaxy",
    image: p17_img,
    newPrice: 999.0,
    oldPrice: 1099.0,
  },
  {
    id: 18,
    name: "Samsung Galaxy S22 128GB",
    category: "galaxy",
    image: p18_img,
    newPrice: 799.0,
    oldPrice: 899.0,
  },
  {
    id: 19,
    name: "Samsung Galaxy S21 FE 128GB",
    category: "galaxy",
    image: p19_img,
    newPrice: 699.0,
    oldPrice: 799.0,
  },
  {
    id: 20,
    name: "Samsung Galaxy Z Fold5 512GB",
    category: "galaxy",
    image: p20_img,
    newPrice: 1799.0,
    oldPrice: 1899.0,
  },
  {
    id: 21,
    name: "Samsung Galaxy Z Flip5 256GB",
    category: "galaxy",
    image: p21_img,
    newPrice: 1099.0,
    oldPrice: 1199.0,
  },
  {
    id: 22,
    name: "Samsung Galaxy A54 128GB",
    category: "galaxy",
    image: p22_img,
    newPrice: 449.0,
    oldPrice: 499.0,
  },
  {
    id: 23,
    name: "Samsung Galaxy A34 128GB",
    category: "galaxy",
    image: p23_img,
    newPrice: 399.0,
    oldPrice: 449.0,
  },
  {
    id: 24,
    name: "Samsung Galaxy Note20 Ultra 256GB",
    category: "galaxy",
    image: p24_img,
    newPrice: 949.0,
    oldPrice: 1099.0,
  },
  {
    id: 25,
    name: "Samsung Galaxy S21 Ultra 256GB",
    category: "galaxy",
    image: p25_img,
    newPrice: 999.0,
    oldPrice: 1099.0,
  },
  {
    id: 26,
    name: "Samsung Galaxy S21+ 128GB",
    category: "galaxy",
    image: p26_img,
    newPrice: 849.0,
    oldPrice: 949.0,
  },
  {
    id: 27,
    name: "Samsung Galaxy S21 128GB",
    category: "galaxy",
    image: p27_img,
    newPrice: 699.0,
    oldPrice: 799.0,
  },
  {
    id: 28,
    name: "Samsung Galaxy Z Fold4 512GB",
    category: "galaxy",
    image: p28_img,
    newPrice: 1599.0,
    oldPrice: 1699.0,
  },
  {
    id: 29,
    name: "Samsung Galaxy Z Flip4 256GB",
    category: "galaxy",
    image: p29_img,
    newPrice: 999.0,
    oldPrice: 1099.0,
  },
  {
    id: 30,
    name: "Samsung Galaxy A73 128GB",
    category: "galaxy",
    image: p30_img,
    newPrice: 499.0,
    oldPrice: 549.0,
  },
  {
    id: 31,
    name: "Samsung Galaxy A72 128GB",
    category: "galaxy",
    image: p31_img,
    newPrice: 449.0,
    oldPrice: 499.0,
  },
  {
    id: 32,
    name: "Samsung Galaxy S20 FE 128GB",
    category: "galaxy",
    image: p32_img,
    newPrice: 599.0,
    oldPrice: 699.0,
  },
  {
    id: 33,
    name: "Samsung Galaxy S20+ 128GB",
    category: "galaxy",
    image: p33_img,
    newPrice: 699.0,
    oldPrice: 799.0,
  },
  {
    id: 34,
    name: "Samsung Galaxy S20 Ultra 512GB",
    category: "galaxy",
    image: p34_img,
    newPrice: 999.0,
    oldPrice: 1099.0,
  },
  {
    id: 35,
    name: "Samsung Galaxy Note10+ 256GB",
    category: "galaxy",
    image: p35_img,
    newPrice: 799.0,
    oldPrice: 899.0,
  },
  {
    id: 36,
    name: "Samsung Galaxy Note10 128GB",
    category: "galaxy",
    image: p36_img,
    newPrice: 699.0,
    oldPrice: 799.0,
  },
];

export default allProducts;
