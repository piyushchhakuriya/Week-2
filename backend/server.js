require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(express.json());

// connect mongo
const MONGO = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/hirehub';
mongoose.connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/auth', authRoutes);

// demo jobs endpoint (public)
app.get('/api/jobs', (req, res) => {
  res.json(require('./sampleJobs.json'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server running on ${PORT}`));
