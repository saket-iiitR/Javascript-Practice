const cameras = {
  price: 600,
  weight: 2000,
  description: () => {
    return `This canon camera is of Rs. ${this.price}`;
  },
};

console.log(cameras.description());
// Arrow function cannot be used in methods and constructors

// This is only for redux: const func = {} => ({key: 'value'});
