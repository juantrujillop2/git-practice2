const mongoose = require("mongoose");
const personSchedule = mongoose.Schema({
    name: { type: String, require: true },
    lastname: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    age: { type: Number, require: true, min: 18 },
    address: {
        type: Object,
        require: true,
        city: { type: String, require: true },
        code_city: { type: Number, require: true },
        lat: { type: Number, require: true },
        long: { type: Number, require: true, min: 0 },
    },
    pets: { type: Array, require: true },
});

module.exports = mongoose.model("personCollection", personSchedule);