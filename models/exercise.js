// Model Dependencies
const mongoose = require('mongoose');


// Schema
const Schema = mongoose.Schema;

// New Schema
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [
        {
            name: {
                type: String,
                trim: true,
                required: 'Enter Exercise Name'
            },
            type: {
                type: String,
                trim: true,
                required: 'Enter Exercise Type' 
            },
            distance: {
                type: Number
            },
            duration: {
                type: Number,
                required: 'Enter Exercise Duration'
            },
            weight: {
                type: Number
            },
            sets: {
                type: Number
            },
            reps: {
                type: Number
            }
        }
    ]
});


// Create Model Workout, Apply Schema to Model
const Workout = mongoose.model('workout', WorkoutSchema);

// Export
module.exports = Workout;