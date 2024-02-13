//  object property shorthand

const name = "Dhruv";
const userAge = 20;

const user = {
  name,
  age: userAge,
  location: "Jaipur",
};

// console.log(user);

// object destructuring

const product = {
  lable: "red notebook",
  price: 3,
  stock: 200,
  salePrice: undefined,
};

// const lable = product.lable;
// const stock = product.stock;

// const { lable: productLable, stock, rating = 5 } = product;
// console.log(productLable);
// console.log(stock);
// console.log(rating);

const transaction = (type, { lable, stock }) => {
  console.log(type, lable, stock);
};

transaction("order", product);
