import CarDocument from "./cars";
// Create a list of 10 cars
const cars = [
  {
    name: "Silver A4",
    speed: 140,
    color: "Silver",
    model: "A4",
    year: 2023,
    price: 45000,
    available: true,
    brand: "Audi",
    description: "An elegant and powerful sedan",
    image_url: "https://img2.carmax.com/assets/24980190/hero.jpg?width=800&height=450",
  },
  {
    name: "Black A4",
    speed: 140,
    color: "Black",
    model: "A4",
    year: 2023,
    price: 45000,
    available: true,
    brand: "Audi",
    description: "An elegant and powerful sedan",
    image_url: "https://img2.carmax.com/assets/24543280/hero.jpg?width=800&height=450",
  },
  {
    name: "White A4",
    speed: 140,
    color: "White",
    model: "A4",
    year: 2023,
    price: 45000,
    available: true,
    brand: "Audi",
    description: "An elegant and powerful sedan",
    image_url: "https://img2.carmax.com/assets/24832485/hero.jpg?width=800&height=450",
  },
  {
    name: "Silver A6",
    speed: 140,
    color: "Silver",
    model: "A6",
    year: 2023,
    price: 45000,
    available: true,
    brand: "Audi",
    description: "An elegant and powerful sedan",
    image_url: "https://img2.carmax.com/assets/24085086/hero.jpg?width=800&height=450",
  },
  {
    name: "Black A6",
    speed: 140,
    color: "Black",
    model: "A6",
    year: 2023,
    price: 45000,
    available: true,
    brand: "Audi",
    description: "An elegant and powerful sedan",
    image_url: "https://img2.carmax.com/assets/24468623/hero.jpg?width=800&height=450",
  },
  {
    name: "White A6",
    speed: 140,
    color: "White",
    model: "A6",
    year: 2023,
    price: 45000,
    available: true,
    brand: "Audi",
    description: "An elegant and powerful sedan",
    image_url: "https://img2.carmax.com/assets/24563317/hero.jpg?width=800&height=450",
  },
  {
    name: "Red A8",
    speed: 140,
    color: "Red",
    model: "A8",
    year: 2023,
    price: 45000,
    available: true,
    brand: "Audi",
    description: "A large and powerful sedan",
    image_url: "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/Audi-A8.png",
  },
  {
    name: "Black A8",
    speed: 140,
    color: "Black",
    model: "A8",
    year: 2023,
    price: 45000,
    available: true,
    brand: "Audi",
    description: "A large and powerful sedan",
    image_url: "https://www.dimmitt.com/blogs/3093/wp-content/uploads/2018/12/2019-Audi-A8-Side-Black-1024x602.jpg",
  },
  {
    name: "White A8",
    speed: 140,
    color: "White",
    model: "A8",
    year: 2023,
    price: 45000,
    available: true,
    brand: "Audi",
    description: "A large and powerful sedan",
    image_url: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Reviews/500_3369.jpg",
  }
];


const populateCars = async () => {
  try {
    await CarDocument.deleteMany({});
    await CarDocument.insertMany(cars);
    console.log("Cars have been populated");
  } catch (error) {
    console.log("error :", error);
  }
};
export default populateCars;
