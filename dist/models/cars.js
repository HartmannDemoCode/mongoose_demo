import mongoose from 'mongoose';
const carSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter car name'],
        trim: true,
        maxlength: [100, 'Car name cannot exceed 100 characters']
    },
    speed: {
        type: Number,
        required: [true, 'Please enter car speed'],
        trim: true,
        maxlength: [100, 'Car speed cannot exceed 100 characters']
    },
    color: {
        type: String,
        required: [true, 'Please enter car color'],
        trim: true,
        maxlength: [100, 'Car color cannot exceed 100 characters']
    },
    model: {
        type: String,
        required: [true, 'Please enter car model'],
        trim: true,
        maxlength: [100, 'Car model cannot exceed 100 characters']
    },
    year: {
        type: Number,
        required: [true, 'Please enter car year'],
        trim: true,
        maxlength: [100, 'Car year cannot exceed 100 characters']
    },
    price: {
        type: Number,
        required: [true, 'Please enter car price'],
        trim: true,
        maxlength: [100, 'Car price cannot exceed 100 characters']
    },
    available: {
        type: Boolean,
        required: [true, 'Please enter car available'],
        trim: true,
        maxlength: [100, 'Car available cannot exceed 100 characters']
    },
    brand: {
        type: String,
        required: [true, 'Please enter car brand'],
        trim: true,
        maxlength: [100, 'Car brand cannot exceed 100 characters']
    },
    description: {
        type: String,
        required: [true, 'Please enter car description'],
        trim: true,
        maxlength: [100, 'Car description cannot exceed 100 characters']
    },
}, {
    timestamps: true
});
export default mongoose.model('Car', carSchema);
