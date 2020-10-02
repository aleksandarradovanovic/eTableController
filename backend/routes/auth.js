const Router = require('express').Router;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../db');

const router = Router();

const createToken = (key) => {
  console.log(key,"key");
  return jwt.sign({_id: key}, 'secret', { expiresIn: '60s' });
};

router.post('/login', (req, res, next) => {
  console.log(req);
  const username = req.body.username;
  const pw = req.body.password;
  db.getDb().
    db().
    collection('users').
    findOne({ username: username }).
    then(userDoc => {
      return bcrypt.compare(pw, userDoc.password)
    })
    .then(result => {
      if(result){
        const token = createToken(username);
        res
        .status(201)
        .json({ user: {token: token, username: username } });
      }
    })
    .catch(error => {
      res
        .status(401)
        .json({ message: 'Authentication failed, invalid username or password.' });
    });
})
// res.status(200).json({ token: token, user: { email: 'dummy@dummy.com' } });


router.post('/signup', (req, res, next) => {
  console.log(req, 'req');
 let userObject = req.body
  // Hash password before storing it in database => Encryption at Rest
  bcrypt
    .hash(userObject.password, 12)
    .then(hashedPW => {
      db.getDb().
        db().
        collection('users').
        insertOne(
          {
            ...userObject, password: hashedPW, date_of_birth: new Date(userObject.date_of_birth)
          }
        ).then(result => {
          const token = createToken(userObject.username);
          res
            .status(201)
            .json({user: { username: userObject.username,  token: token } });
        }).catch(err => {
          console.log(err);
          res.status(500).json({ message: 'Creating the user failed.' });
        });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Creating the user failed.' });
    });
  // Add user to database
});
router.get('/test', (req, res, next) => {
  console.log("testttt");
  // let decoded = jwt.verify(req.body.token, 'secret');
  // console.log(decoded,"request");
})

module.exports = router;
