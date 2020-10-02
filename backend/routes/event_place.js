const Router = require('express').Router;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../db');
var ObjectID = require('mongodb').ObjectID;
const router = Router();


router.get('/findById', (req, res, next) => {
    console.log(req.query);

    db.getDb()
        .db()
        .collection('event_place')
        .findOne({ _id: new ObjectID(req.query.id) })
        .then(result => {
            console.log(result, "result");
            if (result) {
                res
                    .status(200).json({ message: "success", data: result })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'An error occurred.' });
        });
});
router.get('/getAll', (req, res, next) => {

    db.getDb()
        .db()
        .collection('event_place')
        .find()
        .toArray()
        .then(result => {
            console.log(result, "result");
            if (result) {
                res
                    .status(200).json({ message: "success", data: result })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'An error occurred.' });
        });
});
router.post('/insert', (req, res, next) => {
    const placeData = req.body
    db.getDb().
        db().
        collection('event_place').
        insertOne(placeData).
        then(result => {
            res
                .status(201)
                .json({ message: "success", data: {} });
        }).catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Creating the user failed.' });
        });

});
router.post('/tableSeat/insert', (req, res, next) => {
    console.log(req.body);
    console.log(req.query);
    const tableSeat = req.body
    db.getDb().
        db().
        collection('event_place').
       findOneAndUpdate(
            { _id : new ObjectID(req.query.id)},
            { $push: {"table_seats": tableSeat}}
        ).
        then(result => {
            res
                .status(201)
                .json({ message: "success", data: {} });
        }).catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Creating the user failed.' });
        });

});
router.post('/edit', (req, res, next) => {
    console.log(req.body);
    console.log(req.query);
    const placeObject = req.body
    db.getDb().
        db().
        collection('event_place').
       findOneAndUpdate(
            { _id : new ObjectID(req.query.id)},
            { $set: placeObject}
        ).
        then(result => {
            res
                .status(200)
                .json({ message: "success", data: {} });
        }).catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Creating the user failed.' });
        });

});
router.post('/tableSeat/update', (req, res, next) => {
    console.log(req.body);
    console.log(req.query);
    const tableSeat = req.body
    db.getDb().
        db().
        collection('event_place').
       findOneAndUpdate(
            { _id : new ObjectID(req.query.id), "table_seats.seat_number": req.query.seatNumber },
            { $set: {"table_seats.$": tableSeat}}
        ).
        then(result => {
            res
                .status(200)
                .json({ message: "success", data: {} });
        }).catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Creating the user failed.' });
        });

});
router.get('/deleteById', (req, res, next) => {
    console.log(req.query);
    db.getDb()
        .db()
        .collection('event_place')
        .deleteOne({ _id: new ObjectID(req.query.id) })
        .then(result => {
            console.log(result, "result");
            if (result) {
                res
                    .status(200).json({ message: "success", data: result })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'An error occurred.' });
        });
});
module.exports = router;
