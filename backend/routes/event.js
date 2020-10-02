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
        .collection('event')
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
        .collection('event')
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
    const eventData = req.body
    db.getDb().
        db().
        collection('event').
        insertOne(eventData).
        then(result => {
            res
                .status(201)
                .json({ message: "success", data: {} });
        }).catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Creating the user failed.' });
        });

});
router.post('/reservation/insert', (req, res, next) => {
    console.log(req.body);
    console.log(req.query);
    const reservation = req.body
    db.getDb().
        db().
        collection('event').
       findOneAndUpdate(
            { _id : new ObjectID(req.query.id)},
            { $push: {"reservations": reservation}}
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
    const eventObject = req.body
    db.getDb().
        db().
        collection('event').
       findOneAndUpdate(
            { _id : new ObjectID(req.query.id)},
            { $set: eventObject}
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
router.post('/reservation/update', (req, res, next) => {
    console.log(req.body);
    console.log(req.query);
    const reservation = req.body
    db.getDb().
        db().
        collection('event').
       findOneAndUpdate(
            { _id : new ObjectID(req.query.id) },
            { $set: {"reservation": reservation}}
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
        .collection('event')
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
