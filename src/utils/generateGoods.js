import { v4 as uuidv4 } from "uuid";
const imageContext = require.context("../../public/img", false);

const images = imageContext.keys().map(imageContext);

const words = [
  "t-shirt",
  "dress",
  "cap",
  "glass",
  "hoodie",
  "boots",
  "jeans",
  "pants",
];
const colors = ["red", "green", "blue", "white", "black"];
const categories = [
  "Dresses",
  "T-shirts",
  "Pants",
  "Jackets",
  "Skirts",
  "Blouses",
  "Sweaters",
  "Jeans",
  "Shorts",
  "Blazers",
];
// const urls = [
//   "https://static.insales-cdn.com/r/hwT-J2KMCQM/rs:fit:520:0:1/q:100/plain/images/products/1/7530/621329770/3.png@webp",
//   "https://static.insales-cdn.com/r/-9TSNnIcN-M/rs:fit:520:520:1/q:100/plain/images/products/1/2779/726002395/%D0%91%D0%B5%D0%B7%D1%8B%D0%BC%D1%8F%D0%BD%D0%BD%D1%8B%D0%B9_%D0%BA%D0%B0%D0%B4%D1%801285.jpg",
//   "https://static.insales-cdn.com/r/WakLh1HCT1A/rs:fit:520:0:1/q:100/plain/images/products/1/7903/571735775/black__4_.png@webp",
//   "https://static.insales-cdn.com/r/60LBdB2QC6w/rs:fit:520:0:1/q:100/plain/images/products/1/7372/539802828/white_1.png@webp",
//   "https://static.insales-cdn.com/r/xMOUkvHOirY/rs:fit:320:0:1/plain/images/products/1/5288/627184808/large_3__1_.png@webp",
//   "https://static.insales-cdn.com/r/LabYCMoKBCE/rs:fit:320:0:1/plain/images/products/1/6215/627185735/large_1__1-1_.png@webp",
//   "https://static.insales-cdn.com/r/7NHq4deOL10/rs:fit:320:0:1/plain/images/products/1/6314/627177642/large_76fa1a802d8e2120f17b4b0e32ea10bf.png@webp",
//   "https://static.insales-cdn.com/r/m7qnyiqvBUI/rs:fit:320:0:1/plain/images/products/1/3772/627175100/large_3_ce04ed01-79b2-4253-a658-99f61ed250e3.png@webp",
//   "https://static.insales-cdn.com/r/tOB38w1ET8s/rs:fit:520:0:1/q:100/plain/images/products/1/581/621331013/%D1%81%D0%B5%D1%80%D0%B5%D0%B6%D0%BA%D0%B0_2__2_.png@webp",
//   "https://static.insales-cdn.com/r/RGGhcTkNrws/rs:fit:520:0:1/q:100/plain/images/products/1/808/572531496/c_1.png@webp",
//   "https://static.insales-cdn.com/r/gJwoWdJthE8/rs:fit:520:0:1/q:100/plain/images/products/1/6784/621329024/%D0%B3%D0%B0%D0%BB%D1%81%D1%82%D1%83%D0%BF_1.png@webp",
// ];

const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const generateSentence = (words, length) => {
  //Math.floor(Math.random() * arr.length);
  return Array.from({ length }, () => getRandomItem(words)).join(" ");
};

export function generateGoods(N) {
  const goods = [];

  for (let i = 0; i < N; i++) {
    goods.push({
      id: uuidv4(),
      name: getRandomItem(words),
      description: generateSentence(words, 5),
      color: getRandomItem(colors),
      category: getRandomItem(categories),
      price: Math.floor(Math.random() * 9989 - 10),
      rating: (Math.random() * 5).toFixed(1),
      imageUrl: getRandomItem(images),
    });
  }
  return goods;
}
