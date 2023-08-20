const list = [
  {
    id: "0",
    image:
      "https://m.media-amazon.com/images/I/41sN+-1hRsL._AC_UF894,1000_QL80_.jpg",
    name: "Playstation",
  },
  {
    id: "1",
    image: "https://cdn1.smartprix.com/rx-iB0511vCS-w1200-h1200/B0511vCS.jpg",
    name: "Laptobs",
  },
  {
    id: "3",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/31dXEvtxidL._AC_SX368_.jpg",
    name: "Headsets",
  },
  {
    id: "4",
    image:
      "https://kddi-h.assetsadobe3.com/is/image/content/dam/au-com/mobile/mb_img_58.jpg?scl=1",
    name: "Mobiles",
  },
  {
    id: "5",
    image:
      "https://m.media-amazon.com/images/I/71rxYMM5xXL._AC_UF894,1000_QL80_.jpg",
    name: "Screens",
  },
  {
    id: "6",
    image:
      "https://www.fitbit.com/global/content/dam/fitbit/global/pdp/devices/versa-4/hero-static/black/versa4-black-device-3qtr.png",
    name: "Smart watches",
  },
];

//Images ------------------------->
const images = [
  "https://www.boat-lifestyle.com/cdn/shop/articles/Top-games-and-Immortal-headphones.jpg?v=1628758719",
  "https://www.91-cdn.com/hub/wp-content/uploads/2021/07/oneplus_nord_2_design_featured.jpg",
  "https://www.gizmochina.com/wp-content/uploads/2020/10/Xiaomi-Mi-Notebook-14-Core-i3-is-coming-soon.jpg",
];

//Deals------------------------------->
const deals = [
  {
    id: "20",
    title: "OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)",
    oldPrice: 25000,
    price: 19000,
    img: "https://static.vecteezy.com/system/resources/previews/010/251/736/original/best-seller-red-ribbon-illustration-free-png.png",
    image:
      "https://oasis.opstatics.com/content/dam/oasis/page/2023/in/oneplus-10t/specs/10r-black.png",
    carouselImages: [
      "https://m.media-amazon.com/images/I/61QRgOgBx0L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61uaJPLIdML._SX679_.jpg",
      "https://m.media-amazon.com/images/I/510YZx4v3wL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61J6s1tkwpL._SX679_.jpg",
    ],
    color: "Stellar Green",
    size: "6 GB RAM 128GB Storage",
  },
  {
    id: "30",
    title:
      "Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage) with No Cost EMI & Additional Exchange Offers",
    oldPrice: 74000,
    price: 26000,
    img: "https://static.vecteezy.com/system/resources/previews/010/251/736/original/best-seller-red-ribbon-illustration-free-png.png",

    image:
      "https://www.stockmustgo.co.uk/cdn/shop/products/Samsung-S20-FE-Red-1-800x800.png?v=1686156320",
    carouselImages: [
      "https://m.media-amazon.com/images/I/81vDZyJQ-4L._SY879_.jpg",
      "https://m.media-amazon.com/images/I/61vN1isnThL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71yzyH-ohgL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61vN1isnThL._SX679_.jpg",
    ],
    color: "Cloud Navy",
    size: "8 GB RAM 128GB Storage",
  },
  {
    id: "40",
    title:
      "Samsung Galaxy M14 5G (ICY Silver, 4GB, 128GB Storage) | 50MP Triple Cam | 6000 mAh Battery | 5nm Octa-Core Processor | Android 13 | Without Charger",
    oldPrice: 16000,
    price: 14000,
    img: "https://static.vecteezy.com/system/resources/previews/010/251/736/original/best-seller-red-ribbon-illustration-free-png.png",

    image:
      "https://images.samsung.com/is/image/samsung/p6pim/my/sm-m146bdbwxme/gallery/my-galaxy-m14-5g-sm-m146-sm-m146bdbwxme-536859314?$650_519_PNG$",
    carouselImages: [
      "https://m.media-amazon.com/images/I/817WWpaFo1L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81KkF-GngHL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61IrdBaOhbL._SX679_.jpg",
    ],
    color: "Icy Silver",
    size: "6 GB RAM 64GB Storage",
  },
  {
    id: "40",
    title:
      "realme narzo N55 (Prime Blue, 4GB+64GB) 33W Segment Fastest Charging | Super High-res 64MP Primary AI Camera",
    oldPrice: 12999,
    price: 10999,
    img: "https://static.vecteezy.com/system/resources/previews/010/251/736/original/best-seller-red-ribbon-illustration-free-png.png",

    image:
      "https://image01.realme.net/general/20230330/1680167044703.png.webp?width=1440&height=1440&size=246309",
    carouselImages: [
      "https://m.media-amazon.com/images/I/41Iyj5moShL._SX300_SY300_QL70_FMwebp_.jpg",
      "https://m.media-amazon.com/images/I/61og60CnGlL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61twx1OjYdL._SX679_.jpg",
    ],
  },
];
//Offers ----------------------------------->
const offers = [
  {
    id: "0",
    title:
      "Oppo Enco Air3 Pro True Wireless in Ear Earbuds with Industry First Composite Bamboo Fiber, 49dB ANC, 30H Playtime, 47ms Ultra Low Latency,Fast Charge,BT 5.3 (Green)",
    offer: "72% off",
    oldPrice: 7500,
    price: 4500,
    img: "https://static.vecteezy.com/system/resources/previews/010/251/736/original/best-seller-red-ribbon-illustration-free-png.png",
    image:
      "https://m.media-amazon.com/images/I/61a2y1FCAJL._AC_UL640_FMwebp_QL65_.jpg",
    carouselImages: [
      "https://m.media-amazon.com/images/I/61a2y1FCAJL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71DOcYgHWFL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71LhLZGHrlL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61Rgefy4ndL._SX679_.jpg",
    ],

    color: "Green",
    size: "Normal",
  },
  {
    id: "1",
    title:
      "Fastrack Limitless FS1 Pro Smart Watch|1.96 Super AMOLED Arched Display with 410x502 Pixel Resolution|SingleSync BT Calling|NitroFast Charging|110+ Sports Modes|200+ Watchfaces|Upto 7 Days Battery",
    offer: "40%",
    oldPrice: 7955,
    price: 3495,
    image: "https://m.media-amazon.com/images/I/41mQKmbkVWL._AC_SY400_.jpg",
    carouselImages: [
      "https://m.media-amazon.com/images/I/71h2K2OQSIL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71BlkyWYupL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71c1tSIZxhL._SX679_.jpg",
    ],
    color: "black",
    size: "Normal",
  },
  {
    id: "2",
    title: "Aishwariya System On Ear Wireless On Ear Bluetooth Headphones",
    offer: "40%",
    oldPrice: 7955,
    price: 3495,
    image: "https://m.media-amazon.com/images/I/41t7Wa+kxPL._AC_SY400_.jpg",
    carouselImages: ["https://m.media-amazon.com/images/I/41t7Wa+kxPL.jpg"],
    color: "black",
    size: "Normal",
  },
  {
    id: "3",
    title:
      "Fastrack Limitless FS1 Pro Smart Watch|1.96 Super AMOLED Arched Display with 410x502 Pixel Resolution|SingleSync BT Calling|NitroFast Charging|110+ Sports Modes|200+ Watchfaces|Upto 7 Days Battery",
    offer: "40%",
    oldPrice: 24999,
    price: 19999,
    image: "https://m.media-amazon.com/images/I/71k3gOik46L._AC_SY400_.jpg",
    carouselImages: [
      "https://m.media-amazon.com/images/I/41bLD50sZSL._SX300_SY300_QL70_FMwebp_.jpg",
      "https://m.media-amazon.com/images/I/616pTr2KJEL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71wSGO0CwQL._SX679_.jpg",
    ],
    color: "Norway Blue",
    size: "8GB RAM, 128GB Storage",
  },
];


module.exports = {
    list,
    images,
    deals,
    offers,
  };
