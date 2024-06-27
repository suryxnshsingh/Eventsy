const dotenv = require('dotenv');
const result = dotenv.config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoute');
const eventRoutes = require('./routes/EventRoute');
const userRoutes = require('./routes/UserRoute');

const app = express();

app.use(express.json());

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1); // Exit process with failure
    }
};

// Connect to the database
connectDB();

app.use('/auth', authRoutes);
app.use('/events', eventRoutes);
app.use('/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
