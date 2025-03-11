const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { Portfolio, Blog, Settings } = require('./models'); 


dotenv.config();

const app = express();
app.use(express.json());  // Enable JSON parsing

// Test route
app.get('/', (req, res) => {
    res.send('🚀 Server is running and API is working!');
});

// Route to get portfolio projects
app.get('/portfolio', async (req, res) => {
    try {
        const projects = await Portfolio.find();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching projects' });
    }
});

// Route to get blog posts
app.get('/blog', async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching blogs' });
    }
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(err => console.error("❌ MongoDB Connection Error:", err));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
