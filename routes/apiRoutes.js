// API Route Dependencies
const router = require('express').Router();
const db = require('../models/exercise');

// GET All Workouts
router.get("/api/workouts", (req, res) => {
	db.find()
		.then((dbData) => {
			res.json(dbData);
		})
		.catch((err) => {
			res.json(err);
		});
});

// GET Workouts in Date Range
router.get("/api/workouts/range", (req, res) => {
	db.find()
		.then((dbData) => {
			res.json(dbData);
		})
		.catch((err) => {
			res.json(err);
		});
});

// POST New Workout
router.post("/api/workouts", ({ body }, res) => {
	db.create(body)
		.then((dbData) => {
			res.json(dbData);
		})
		.catch((err) => {
			res.json(err);
		});
});

// UPDATE Existing Workout
router.put("/api/workouts/:id", ({ body, params }, res) => {
	db.findByIdAndUpdate(params.id, { $push: { exercises: body } })
		.then((dbData) => {
			res.json(dbData);
		})
		.catch((err) => {
			res.json(err);
		});
});


module.exports = router;