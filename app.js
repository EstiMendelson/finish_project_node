const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const app = express();
const coupon = require('./routes/coupon');

dotenv.config();

app.use(cors());
app.use("/", bodyParser.json());
app.use('/coupon', coupon);

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.set('debug', { shell: true });

mongoose.connect(process.env.DB_CONNECT, connectionParams)
    .then(() => {
        console.log('connected')
    })
    .catch((err) => {
        console.log('error!!' + err)
    });

const port = 5000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));