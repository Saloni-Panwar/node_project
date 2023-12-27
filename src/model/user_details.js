const { Schema, model } = require('mongoose');
const validator = require('validator');
// create a schema
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 3
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: (value) => {
                return validator.isEmail(value);
            },
            message: 'Invalid email format'
        }
    },
    phone: {
        type: Number,
        required: true,
        min: 1000000000 // Assuming a 10-digit phone number
    },
    message: {
        type: String,
        required: true,
        minLength: 10
    }
});

// create a collection
const User = model("User", userSchema);
module.exports = User;
