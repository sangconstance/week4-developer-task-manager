const mongoose = require("mongoose");

 const takSchema = new mongoose.Schema({
    title:{type: String, required: true },
    description: String,
    completed: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
 });

 module.exports = mongoose.model("Tasks", taskSchema);