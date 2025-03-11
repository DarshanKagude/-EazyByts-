const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/database'); 
const projectRoutes = require('./routes/projects'); 
const userRoutes = require('./routes/user');
const blogRoutes = require('./routes/blog');
const emailRoutes = require('./routes/email');
const contactRoutes = require('./routes/contact'); // ✅ Import contact routes
const Contact = require('./models/Contact'); // ✅ Import Contact model

require('dotenv').config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json()); // ✅ Ensure JSON body parsing
app.use(express.urlencoded({ extended: true })); // ✅ Allow form data parsing

// Serve static files
app.use(express.static(path.join('./client', 'public')));

// API Routes
app.use('/api/projects', projectRoutes); 
app.use('/api/users', userRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/send-email', emailRoutes);
app.use('/api/contact', contactRoutes);

// ✅ Add Contact form submission route
app.post('/api/contact', async (req, res) => {
    console.log('📩 Received Data:', req.body); // Debugging log
    try {
        const contact = new Contact(req.body);
        await contact.save();
        console.log('✅ Saved in DB:', contact);
        res.status(201).json({ message: 'Contact saved successfully', contact });
    } catch (error) {
        console.error('❌ Error saving contact:', error);
        res.status(500).json({ message: 'Error saving contact', error });
    }
});

// Serve index.html for all non-API routes
app.get('*', (req, res) => {
    res.sendFile(path.resolve('./client', 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
