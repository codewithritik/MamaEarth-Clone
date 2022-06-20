const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(

    {
        first_name: { type: String, required: true },
        second_name: { type: String, required: true },
        email: { type: String, required: true, unique: true, lowercase: true, uppercase: false },
        bob:{type:String, required: true }
    },

    {
        timestamps: true,
        versionKey: false,
    }

)


const User = mongoose.model("user", userSchema)

module.exports = User;
