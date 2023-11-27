import { model } from "mongoose"
import { Document } from "mongoose";

type Car = {
    name: string;
    speed: number;
    color: string;
    model: string;
    year: number;
    price: number;
    available: boolean;
    brand: string;
    description: string;
    img_url: string;
    createdAt: Date;
    updatedAt: Date;

}
export type CarDocument = Car & Document;