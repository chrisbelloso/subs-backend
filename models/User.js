const { models, Schema, model } = require("mongoose");

const UserSchema = Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    google: {
        type: Boolean,
        default: false
    }
});

UserSchema.methods.toJSON = function () {
    const { password, __v, ...user} = this.toObject();
    return user;
}

module.exports = model("User", UserSchema);