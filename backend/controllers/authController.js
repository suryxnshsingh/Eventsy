const User = require('../models/User')
const Event = require('../models/Event')

const jwt = require('jsonwebtoken')

const signup = async (req,res) =>{
    const { username, email , password } = req.body;
    try {
        const user = new User({ username, email, password});
        await user.save();
        const token = jwt.sign({userId : user._id}, process.env.JWT_SECRET,{expiresIn : '1h'});
        res.status(201).json({ token });
    }catch(error){
        res.status(500).json({
            msg : "Server Error"
        });
    }
};

const signin = async (req, res) => {
    const { email , password} = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || user.password != password){
            return res.status(400).json({
                msg : "Invalid Credentials"
            })
        }
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' })
        res.json({ token });
    } catch (error){
        res.status(500).json ({
            msg : "Server Error"
        })
    }
}

module.exports = { signup, signin}