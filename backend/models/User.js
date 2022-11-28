import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

let UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true

    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: "user"

    },
    image: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }

}, {
    versionKey: false
});

UserSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
});


UserSchema.methods.toJSON = function () {
    const user = this.toObject();
    if (user.image) {
        user.image = process.env.BASE_URL + "/uploads/users/" + user.image;
    } else {
        user.image = process.env.BASE_URL + "/icons/not_found.jpg";
    }
    return user;
}

UserSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

// set jwt token
UserSchema.methods.generateToken = function () {
    const user = this;
    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
    return token;
}
// remove password from response
UserSchema.methods.toJSON = function () {
    const user = this.toObject();
    delete user.password;
    return user;
}

export default mongoose.model("User", UserSchema);