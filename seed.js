const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// ✅ Correctly import models (Make sure models.js exists in models folder)
const { Portfolio, Blog, Settings } = require('./models');


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(err => console.error("❌ MongoDB Connection Error:", err));

// Sample Data
const seedDatabase = async () => {
    try {
        // ✅ Clear previous data
        await Portfolio.deleteMany();  
        await Blog.deleteMany();
        await Settings.deleteMany();

        // ✅ Insert sample data
        await Portfolio.insertMany([
            { title: "Project 1", description: "Sample project", imageUrl: "https://via.placeholder.com/150" },
            { title: "Project 2", description: "Another project", imageUrl: "https://via.placeholder.com/150" }
        ]);

        await Blog.insertMany([
            { title: "First Blog", content: "This is a blog post." },
            { title: "Second Blog", content: "Another blog post." }
        ]);

        await Settings.create({ siteTitle: "My Portfolio", siteDescription: "A personal website" });

        console.log("✅ Sample data inserted successfully!");
        
    } catch (error) {
        console.error("❌ Error seeding data:", error);
    } finally {
        mongoose.connection.close();  // ✅ Ensure MongoDB connection closes properly
    }
};

// ✅ Run the seeding function
seedDatabase();
