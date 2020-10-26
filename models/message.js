const mongoose = require("mongoose");
const User = require("./user");

const messageSchema = new mongoose.Schema({
    text: {
        type:String,
        required: true,
        maxLength: 280
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    created: {
        type: Date,
        default: Date.now
    }
}, {timestamps: true});

messageSchema.pre("remove", async function(next){
    try{
        let user = await User.findById(this.user);
        user.messages.remove(this.id);
        await user.save();
        return next();
    } catch(error){
        return next(error);
    }
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;