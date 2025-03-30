const Joke = require('./models/Joke');

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('✅ MongoDB Connected'))
    .catch(err => console.log('❌ MongoDB Connection Error:', err));

app.get('/', (req, res) => {
    res.send('🎉 Welcome to Hindi Jokes API');
});


app.get('/jokes', async (req, res) => {
    try {
        let size = parseInt(req.query.size) || 1; // Default to 1 if size is not provided
        if (size > 20) size = 20; // Limit size to 20

        const jokes = await Joke.aggregate([{ $sample: { size } }]); // Fetch random jokes
        res.json({ status: "Success", totalJokes: jokes.length, data: jokes });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



app.post('/jokes', async (req, res) => {
    try {
        const jokes = req.body.data; // Extract array of jokes from request body
        if (!Array.isArray(jokes) || jokes.length === 0) {
            return res.status(400).json({ message: "❌ Invalid data format. 'data' should be a non-empty array." });
        }

        // Insert multiple jokes at once
        const insertedJokes = await Joke.insertMany(jokes);

        res.status(201).json({
            message: "✅ Jokes added successfully!",
            totalInserted: insertedJokes.length,
            jokes: insertedJokes
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});



app.delete('/jokes/:id', async (req, res) => {
    try {
        await Joke.findByIdAndDelete(req.params.id);
        res.json({ message: "🗑️ Joke deleted successfully!" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});



app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
