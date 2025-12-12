const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/server")
.then(() => {
    console.log("MongoDB connected")
})
.catch(() => {
    console.log("MongoDB connection failed")
});
const ExpenseSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
const ExpenseModel = mongoose.model("expense", ExpenseSchema);
app.post("/expense", async (req, res) => {
    try {
        const { item, amount } = req.body;

        const newExpense = new ExpenseModel({
            item,
            amount
        });

        await newExpense.save();
        res.json("Expense added successfully");
    } catch (err) {
        res.send("Error adding expense");
    }
});
app.get("/expense", async (req, res) => {
    try {
        const expenses = await ExpenseModel.find();
        res.json({ data: expenses });
    } catch (err) {
        res.send("Error fetching expenses");
    }
});
app.delete("/expense/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedExpense = await ExpenseModel.findByIdAndDelete(id);

        res.json({ message: "item deleted", data: deletedExpense.item });
    } catch (err) {
        res.send("Error deleting expense");
    }
});

app.listen(3001, () => {
    console.log("Server running on port 3001");
});
