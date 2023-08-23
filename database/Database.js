import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('mydatabase.db');

const initDatabase = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, password TEXT);"
      );
    });

    db.transaction((tx) => {
      tx.executeSql(
        `
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT,
        password TEXT
      );
      `,
        [],
        () => {
          console.log("Database initialized");
        },
        (error) => {
          console.error("Error initializing database:", error);
        }
      );
    });

}
  // Insert a new user
const insertUser = (name, email, password) => {
  db.transaction((tx) => {
    tx.executeSql(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, password],
      (_, result) => {
        console.log('User inserted:', result);
      },
      (error) => {
        console.error('Error inserting user:', error);
      }
    );
  });
};


export { initDatabase, insertUser,db };


const data = [
  {
    id: "6",
    title: "Anker Portable Charger",
    desc: "Ultra-High Cell Capacity: The massive 20,000mAh cell capacity provides more than 5 charges for iPhone XS, almost 5 full charges for Samsung Galaxy S10, more than 4 charges for iPhone 11, and over 2 and a half charges for iPad mini 5.",
    img: "https://m.media-amazon.com/images/I/71s9NDno3FL._AC_SX679_.jpg",
    carouselImages: [
      "https://m.media-amazon.com/images/I/41IisMZ+BjL._AC_.jpg",
      "https://m.media-amazon.com/images/I/41hrY931wZL._AC_.jpg",
      "https://m.media-amazon.com/images/I/51tmvGC5a6L._AC_.jpg",
      "https://m.media-amazon.com/images/I/61GSt9nZheL._AC_.jpg",
    ],
    colors: ["Black"],
    price: 24.3,
    oldprice: 35.0,
    type: "topseller",
    category: "accessories",
    brand: "Anker",
    rating: 4.9,
  },
  {
    id: "7",
    title:
      "ATUMTEK Selfie Stick Tripod",
    desc: "The ATUMTEK Selfie Stick and tripod stand are integrated, combined with a premium aluminum extendable stick, making the selfie stick exceptionally stable. The extendable pole is constructed with aviation-grade aluminum alloy and undergoes surface anodic oxidation for sturdiness and durability.",
    img: "https://m.media-amazon.com/images/I/61S1m4us80L._AC_SX466_.jpg",
    carouselImages: [
      "https://m.media-amazon.com/images/I/61qxbCOmLVL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/61KsEKccOBL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/716nT8UrpsL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/611Nhc43fRL._AC_SX466_.jpg",
    ],
    colors: ["Black","Blue","Red","White"],
    price: 23.99,
    oldprice: 39.99,
    type: "topseller",
    category: "accessories",
    brand: "ATUMTEK",
    rating: 4.2,
  },
  {
    id: "8",
    title:
      "Ytonet Laptop Case",
    desc: "This laptop sleeve dimensions: 15.7 x 11.2 x 2 inch (L x W x H); The laptop compartment dimensions: 14.6 x 10.6 x 1.6 inch (L x W x H); One compartment for 15.6 inch laptop, the additional mesh pocket storage space keeps the items well-organized, such as your pens, cables, mouse, earphone, mobile phones, iPad or laptop accessories. Constructed with a modern slim and lightweight design to accommodate daily use and protection needs",
    img: "https://m.media-amazon.com/images/I/81On3MEFDRL._AC_SX466_.jpg",
    carouselImages: [
      "https://m.media-amazon.com/images/I/51VfmButMYL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/81vmrRsD3XL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/71YrgNaQrOL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/71n7gMvkzkL._AC_SX466_.jpg",
    ],
    colors: ["Black","Coral pink","Dark blue","Floral Rose"],
    price: 22.12,
    oldprice: 27.50,
    type: "topseller",
    category: "accessories",
    brand: "Ytonet",
    rating: 4.1,
  },
  {
    id: "9",
    title:
      "Lamicall Tablet Stand Adjustable",
    desc: "This tablet stand applies to 4 - 13 inch tablet and phone, such as new 2022/ 2021 iPad Pro 11/ 12.9 inch, iPad 10.9, iPad Air 5, iPad mini 6, iPad Pro 9.7 / 10.5, Surface Pro, Galaxy Tab, iPhone 14 Pro Max, iPhone 13 Pro Max, iPhone 12, iPhone 11. If you use a tablet larger than 12” and found it’s not stable to use, you can set it horizontally, which helps maintain more stability.",
    img: "https://m.media-amazon.com/images/I/71YnvIEkWwL._AC_SY879_.jpg",
    carouselImages: [
      "https://m.media-amazon.com/images/I/714-diW-HYL._AC_SY879_.jpg",
      "https://m.media-amazon.com/images/I/61XKjUOWFpL._AC_SY879_.jpg",
      "https://m.media-amazon.com/images/I/61Iau+z9PHL._AC_SY879_.jpg",
      "https://m.media-amazon.com/images/I/71QnC1UnMHL._AC_SY879_.jpg",
    ],
    colors: ["Blue"],
    price: 10.99,
    oldprice: 19.99,
    type: "topseller",
    category: "accessories",
    brand: "Lamicall",
    rating: 4.3,
  },
  {
    id: "10",
    title:
      "EPULY Compatible with Apple Watch Band",
    desc: "Epuly magnetic clasp stainless steel mesh Loop fully compatible with apple watch band ultra 49mm 45mm 44mm 42mm series 8 (2022), series 7, series SE, series 6, series 5, series 4, series 3, series 2. Fits 6.10-7.3 inch wrist (155mm-185mm).",
    img: "https://m.media-amazon.com/images/I/81PGSHf8pnL._AC_SX679_.jpg",
    carouselImages: [
      "https://m.media-amazon.com/images/I/81uCi0VT8yL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/810cOyjAr8L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81WyHT64xPL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71lVmBOp7EL._AC_SX679_.jpg",
    ],
    colors: ["Black","Gold","Rose Gold"],
    price: 5.99,
    oldprice: 10.5,
    type: "topseller",
    category: "accessories",
    brand: "Epuly",
    rating: 3.9,
  }
]