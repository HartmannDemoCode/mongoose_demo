import express from "express";
const router = express.Router();
import CarDocument from "../models/cars";
import { Error } from "mongoose";
import populator from "../models/populator";

// get all cars from mongoose
router.get("/", async (req, res) => {
  try {
    const cars = await CarDocument.find();
    res.json({ cars });
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage });
  }
});

router.get("/populate", async (req, res) => {
  try {
    populator();
    res.json({ message: "Cars have been populated" });
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const car = await CarDocument.findById(req.params.id);
    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }
    res.json({ car });
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage });
  }
});

router.post("/", async (req, res) => {
  try {
    console.log("req.body :", req.body);
    const car = await CarDocument.create(req.body);
    res.status(201).json({ car });
  } catch (error) {
    if (
      error instanceof Error &&
      "name" in error &&
      error.name === "ValidationError"
    ) {
      // Handle validation errors
      const validationErrors = Object.values((error as any).errors).map(
        (err: any) => err.message
      );
      return res
        .status(400)
        .json({ message: "Validation failed", errors: validationErrors });
    }
    if (error instanceof Error) {
      const errorMessage = error.message;
      res.status(500).json({ message: errorMessage });
    } else {
      // Handle other types of errors
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
});

router.put("/:id", async (req, res) => {
  try {
    const car = await CarDocument.findById(req.params.id).lean();

    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }

    // Validate req.body fields here if needed

    // Update car with data from req.body
    Object.assign(car, req.body);

    // Save the updated car
    await CarDocument.findOneAndUpdate({ _id: req.params.id }, car, {
      new: true,
    });

    res.status(200).json(car);
  } catch (error) {
    const errorMessage = (error as Error).message;
    // Check for specific errors and handle accordingly
    res.status(500).json({ message: errorMessage });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const car = await CarDocument.findById(req.params.id);

    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }

    await CarDocument.deleteOne({ _id: req.params.id });

    res.status(200).json({ message: "Car deleted successfully" });
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage });
  }
});

router.get("*", function (req, res) {
  res.send({ status: 404, message: "Resource not found" });
});

export default router;
