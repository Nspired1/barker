const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type:String,
        unique: true
    },
    firstName: {
        type: String 
    },
    lastName: {
        type: String 
    },
    password: {
        type: String,
        required: true 
    },
    profileImageUrl: {
        type: String 
    },
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message"
    }]
}, {timestamp: true});

//hash password for new user, if password already hashed do nothing
userSchema.pre("save", async function(next){
    try {
        if(!this.isModified("password")){
            return next();
        }
        let hashedPassword = await bcrypt.hash(this.password, 14);
        this.password = hashedPassword;
        return next();
    } catch(error){
        return next(error);
    }
});

//compare password of user to stored hashed password in database
userSchema.methods.comparePassword = async function(userPassword, next){
    try {
        let isMatch = await bcrypt.compare(userPassword, this.password);
        return isMatch;
    } catch(error){
        return next(error);
    }
}

const User = mongoose.model("User", userSchema);

module.exports = User;