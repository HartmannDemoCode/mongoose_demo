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
    },
    {
        name: "Silver A8",
        speed: 140,
        color: "Silver",
        model: "A8",
        year: 2023,
        price: 45000,
        available: true,
        brand: "Audi",
        description: "An elegant and powerful sedan",
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
        description: "An elegant and powerful sedan",
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
        description: "An elegant and powerful sedan",
    },
    {
        name: "Silver Q7",
        speed: 140,
        color: "Silver",
        model: "Q7",
        year: 2023,
        price: 45000,
        available: true,
        brand: "Audi",
        description: "An elegant and powerful SUV",
    },
];
const otherCars = [
    {
        "name": "Blue Corolla",
        "speed": 120,
        "color": "Blue",
        "model": "Corolla",
        "year": 2022,
        "price": 30000,
        "available": true,
        "brand": "Toyota",
        "description": "A nice car"
    },
    {
        "name": "Silver A4",
        "speed": 140,
        "color": "Silver",
        "model": "A4",
        "year": 2023,
        "price": 45000,
        "available": true,
        "brand": "Audi",
        "description": "An elegant and powerful sedan"
    }
];
const populateCars = async () => {
    try {
        await CarDocument.deleteMany({});
        await CarDocument.insertMany(cars);
        console.log("Cars have been populated");
    }
    catch (error) {
        console.log("error :", error);
    }
};
export default populateCars;
