const router = require('express').Router()
const User = require('./models/userSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.post('/register', async (req, res) => {

    try {
        const emailExist = await User.findOne({ email: req.body.email })
        if (emailExist) {
            return res.status(400).json("Email already exist")
        }

        const hash = await bcrypt.hash(req.body.password, 10)
        const user = new User({
            fullName: req.body.fullName,
            userName: req.body.userName,
            email: req.body.email,
            password: hash
        })
        
         const data = await user.save()
         res.json(user)
      
    } catch (err) {
        res.status(400).json(err)
        console.log(err)
    }
  
})


router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ email: req.body.email });
        if (!userData) {
            return res.status(400).json("Email not exist");
        }
        const validPsw = await bcrypt.compare(req.body.password, userData.password);
        if (!validPsw) {
            return res.status(400).json("Password not valid")
        }
        const userToken = jwt.sign({ email: userData.email }, 'success')
        res.header('user', userToken).json(userToken)
    } catch (err) {
        console.log(400).json(err)
    }
})
const validUser = (req, res, next) => {
    const token = req.header('user');
    req.token = token;
    next();
}

router.get('/getAll', validUser, async (req, res) => {
    jwt.verify(req.token,'success',async (err, data) => {
        if (err) {
            res.sendStatus(403)
        } else {
            const data = await User.find().select(['-password','-fullName']);
            res.json(data);
        }
    })
})

module.exports = router