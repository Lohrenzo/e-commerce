// Images
import img1 from "../../assets/bucket-list-logo.jpg";
import img2 from "../../assets/94.jpg";
import img3 from "../../assets/bucket-list-logo.jpg";


export const products = [
    {
        id: 1,
        url: img1,
        url2: img2,
        productName: 'Generator',
        description: "A very strong generator made for all weather conditions.",
        inventory: 90,
        promoPercentage: 40,
        price: 500000,
        get newPrice() {
            return this.price - (this.price * (this.promoPercentage / 100));
        }
    },
    {
        id: 2,
        url: img2,
        url2: img1,
        productName: 'Laptop',
        description: "Sleek laptop that incorporates functionality and design. Core i7 processor.",
        inventory: 20,
        promoPercentage: 0,
        price: 500000,
        get newPrice() {
            return this.price - (this.price * (this.promoPercentage / 100));
        }
    },
    {
        id: 3,
        url: img3,
        url2: img2,
        productName: 'Goat',
        description: "Very sweet and matured goat. Can be used for your soups, pepper soups, stews, etc.",
        inventory: 50,
        promoPercentage: 0,
        price: 500000,
        get newPrice() {
            return this.price - (this.price * (this.promoPercentage / 100));
        }
    },
    {
        id: 4,
        url: img2,
        url2: img3,
        productName: 'Cow',
        description: "Very sweet and matured cow. Can be used for your soups, pepper soups, stews, etc.",
        inventory: 0,
        promoPercentage: 0,
        price: 500000,
        get newPrice() {
            return this.price - (this.price * (this.promoPercentage / 100));
        }
    },
    {
        id: 5,
        url: img1,
        url2: img2,
        productName: 'Generator',
        description: "A very strong generator made for all weather conditions.",
        inventory: 150,
        promoPercentage: 0,
        price: 500000,
        get newPrice() {
            return this.price - (this.price * (this.promoPercentage / 100));
        }
    },
    {
        id: 6,
        url: img2,
        url2: img1,
        productName: 'Laptop',
        description: "Sleek laptop that incorporates functionality and design. Core i7 processor.",
        inventory: 100,
        promoPercentage: 80,
        price: 500000,
        get newPrice() {
            return this.price - (this.price * (this.promoPercentage / 100));
        }
    },
    {
        id: 7,
        url: img3,
        url2: img2,
        productName: 'Goat',
        description: "Very sweet and matured goat. Can be used for your soups, pepper soups, stews, etc.",
        inventory: 10,
        promoPercentage: 28,
        price: 500000,
        get newPrice() {
            return this.price - (this.price * (this.promoPercentage / 100));
        }
    },
    {
        id: 8,
        url: img1,
        url2: img2,
        productName: 'Generator',
        description: "A very strong generator made for all weather conditions.",
        inventory: 90,
        promoPercentage: 40,
        price: 500000,
        get newPrice() {
            return this.price - (this.price * (this.promoPercentage / 100));
        }
    },
    {
        id: 9,
        url: img2,
        url2: img1,
        productName: 'Laptop',
        description: "Sleek laptop that incorporates functionality and design. Core i7 processor.",
        inventory: 20,
        promoPercentage: 0,
        price: 500000,
        get newPrice() {
            return this.price - (this.price * (this.promoPercentage / 100));
        }
    },
    {
        id: 10,
        url: img3,
        url2: img2,
        productName: 'Goat',
        description: "Very sweet and matured goat. Can be used for your soups, pepper soups, stews, etc.",
        inventory: 50,
        promoPercentage: 30,
        price: 500000,
        get newPrice() {
            return this.price - (this.price * (this.promoPercentage / 100));
        }
    },
    {
        id: 11,
        url: img2,
        url2: img3,
        productName: 'Cow',
        description: "Very sweet and matured cow. Can be used for your soups, pepper soups, stews, etc.",
        inventory: 0,
        promoPercentage: 50,
        price: 500000,
        get newPrice() {
            return this.price - (this.price * (this.promoPercentage / 100));
        }
    },
    {
        id: 12,
        url: img1,
        url2: img2,
        productName: 'Generator',
        description: "A very strong generator made for all weather conditions.",
        inventory: 150,
        promoPercentage: 0,
        price: 500000,
        get newPrice() {
            return this.price - (this.price * (this.promoPercentage / 100));
        }
    },
    {
        id: 13,
        url: img2,
        url2: img1,
        productName: 'Laptop',
        description: "Sleek laptop that incorporates functionality and design. Core i7 processor.",
        inventory: 100,
        promoPercentage: 0,
        price: 500000,
        get newPrice() {
            return this.price - (this.price * (this.promoPercentage / 100));
        }
    },
    {
        id: 15,
        url: img3,
        url2: img2,
        productName: 'Goat',
        description: "Very sweet and matured goat. Can be used for your soups, pepper soups, stews, etc.",
        inventory: 10,
        promoPercentage: 0,
        price: 500000,
        get newPrice() {
            return this.price - (this.price * (this.promoPercentage / 100));
        }
    },
];


// export const offers = [
//     {
//         url: img1,
//         url2: img2,
//         productName: 'Generator',
//         description: "A very strong generator made for all weather conditions.",
//         price: 500000,
//         offerPercentage: 40,
//         inventory: 90,
//     },
//     {
//         url: img2,
//         url2: img1,
//         productName: 'Laptop',
//         description: "Sleek laptop that incorporates functionality and design. Core i7 processor.",
//         price: 500000,
//         offerPercentage: 25,
//         inventory: 20,
//     },
//     {
//         url: img3,
//         url2: img2,
//         productName: 'Goat',
//         description: "Very sweet and matured goat. Can be used for your soups, pepper soups, stews, etc.",
//         price: 500000,
//         offerPercentage: 30,
//         inventory: 50,
//     },
//     {
//         url: img2,
//         url2: img3,
//         productName: 'Cow',
//         description: "Very sweet and matured cow. Can be used for your soups, pepper soups, stews, etc.",
//         price: 500000,
//         offerPercentage: 50,
//         inventory: 0,
//     },
//     {
//         url: img1,
//         url2: img2,
//         productName: 'Generator',
//         description: "A very strong generator made for all weather conditions.",
//         price: 500000,
//         offerPercentage: 60,
//         inventory: 150,
//     },
//     {
//         url: img2,
//         url2: img1,
//         productName: 'Laptop',
//         description: "Sleek laptop that incorporates functionality and design. Core i7 processor.",
//         price: 500000,
//         offerPercentage: 80,
//         inventory: 100,
//     },
//     {
//         url: img3,
//         url2: img2,
//         productName: 'Goat',
//         description: "Very sweet and matured goat. Can be used for your soups, pepper soups, stews, etc.",
//         price: 500000,
//         offerPercentage: 20,
//         inventory: 10,
//     },
// ];

// export const promotions = [
//     {
//       code: "SUMMER",
//       discount: "50%"
//     },
//     {
//       code: "AUTUMN",
//       discount: "40%"
//     },
//     {
//       code: "WINTER",
//       discount: "30%"
//     }
// ];

// export const tax = 5;
  
// export const total = subTotal - discount + tax;