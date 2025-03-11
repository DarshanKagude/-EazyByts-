const mongoose = require('mongoose');

// Portfolio Schema
const PortfolioSchema = new mongoose.Schema({
    title: String,
    description: String,
    imageUrl: String
});
const Portfolio = mongoose.model('Portfolio', PortfolioSchema);

// Blog Schema
const BlogSchema = new mongoose.Schema({
    title: String,
    content: String
});
const Blog = mongoose.model('Blog', BlogSchema);

// Settings Schema
const SettingsSchema = new mongoose.Schema({
    siteTitle: String,
    siteDescription: String
});
const Settings = mongoose.model('Settings', SettingsSchema);

module.exports = { Portfolio, Blog, Settings };
