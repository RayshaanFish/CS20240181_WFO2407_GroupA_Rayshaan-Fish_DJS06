const { product } = require("prelude-ls");

// A list of provinces:
const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];

// A list of names:
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];

// A list of products with prices:
const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// 1. *** forEach Basics ***
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

// 2. *** Uppercase Transformation ***
const uppercaseProvinces = provinces.map((province) => province.toUpperCase());
console.log(uppercaseProvinces);

// 3. *** Name Lengths ***
const nameLength = names.map((name) => name.length);
console.log(nameLength);

// 4. *** Sorting ***
const sortProvinces = [...uppercaseProvinces].sort();
console.log(sortProvinces);

// 5. *** Filtering Cape ***
const excludeCapeProvinces = provinces.filter(
  (province) => !province.includes("Cape")
);
console.log(excludeCapeProvinces.length);

// 6. *** Finding 'S' ***
const hasS = names.map((name) =>
  name.split("").some((letter) => letter === "S")
);
console.log(hasS);

// 7. *** Creating Object Mapping ***
const objectMapping = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(objectMapping);

// *** ADVANCED EXERCISES ***

console.log({
  // 1. Log products
  productNames: products.map((product) => product.product),

  // 2. Filter by name length
  filterProductLength: products.filter(
    (product) => product.product.length <= 5
  ),

  // 3. Price manipulation
  updatedPrice: products
    .filter((product) => product.price !== "" && product.price !== " ")
    .map((product) => ({ ...product, price: Number(product.price) }))
    .reduce((total, product) => total + product.price, 0),

  // 4. Concatenate product names

  // 5. Find extremes in prices
  priceRange: (() => {
    const { high, low } = products
      .filter((product) => product.price !== "" && product.price !== " ")
      .map((product) => ({ ...product, price: Number(product.price) }))
      .reduce(
        (priceRange, product) => ({
          high:
            product.price > priceRange.high ? product.price : priceRange.high,
          low: product.price < priceRange.low ? product.price : priceRange.low,
        }),
        { high: -Infinity, low: Infinity }
      );
    return `Highest: ${high}. Lowest: ${low}`;
  })(),

  // 6. Object Transformation
  transformProducts: Object.entries(products).reduce(
    (acc, [index, { product, price }]) => {
      acc.push({ name: product, cost: price });
      return acc;
    },
    []
  ),
});
