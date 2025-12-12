const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://localhost:27017/server")
.then(() => {
    console.log("MongoDB connected")
})
.catch(() => {
    console.log("MongoDB connection failed")
});
const ItemSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    }
});
const AmountSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    }
});
const ExpenseModel = mongoose.model("expense", {
    item: ItemSchema,
    amount: AmountSchema,
    date: {
        type: Date,
        default: Date.now
    }
});
app.post("/expense",async(req,res) => {
    try {
        const {item,amount} = req.body;
        const newExpense = new ExpenseModel({
            item: {item},
            amount: {amount}
        });
        await newExpense.save();
        res.json(
            {message: "Expense added successfully"}
        )
    } catch (err) {
        res.send("Error adding expense");
    }
});
app.get("/expense",async(req,res) => {
    try {
        const expenses = await ExpenseModel.find();
        res.send(expenses);
    } catch (err) {
        res.send("Error fetching expenses");
    }
});
app.listen(3001, () => {
    console.log("Server running on port 3001");
});