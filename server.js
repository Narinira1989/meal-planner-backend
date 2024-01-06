const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./MealRoutes');
const cors = require('cors');

require('dotenv').config();

mongoose.set("strictQuery", false);

const PORT = 4000 || process.env.port;

app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log('WE WERE CONNECTED TO MONGO'))
.catch((err) => console.log(err))

app.use(routes);

app.listen(PORT, () => {
    console.log(`SERVER İS RUNNING ON PORT ${PORT}`);
})

// login: irinanarin1989
// password: vjYUPwFhHhbFudCa

//mongodb+srv://irinanarin1989:<password>@cluster0.ptikybf.mongodb.net/?retryWrites=true&w=majority

/*
1 WE ARE CREATED EXPRESS (const express)
2 WE ARE CREATED APP to lısten PORT
3 and used process.env.port to have access to database
3 then used mongoose library to connect with database MongoDB :
mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log('WE WERE CONNECTED TO MONGO'))
.catch((err) => console.log(err))
4 We have link mongoDB in document .env
*/