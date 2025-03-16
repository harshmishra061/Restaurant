require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;

async function connect() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to DB');
    } catch (error) {
        console.log('Error while connecting to DB', error);
    }
}

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    }
})

const User = mongoose.model('User', UserSchema);

app.get('/', (req, res) => {
    res.send('Backend is working');
}
);

app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        return res.status(400).send('User already exist');
    }
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).send(newUser);
});

app.get('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).send('Invalid credentials');
    }
    if (user.password !== password) {
        return res.status(400).send('Invalid credentials');
    }
    res.send('Login successfully');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

connect();