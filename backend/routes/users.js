const Router = require('express').Router;
const mongodb = require('mongodb');

const db = require('../db');

const Decimal128 = mongodb.Decimal128;

const router = Router();

router.get('/getAll', (req, res, next) => {

    const users = [];
    db.getDb()
      .db()
      .collection('users')
      .findOne()
      .then(result => {
        console.log(result, "result");
        if(result){
          res
          .status(201).json({message: "success"})
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'An error occurred.' });
      });
  });
  module.exports = router;
