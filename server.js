const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const config = require('./config');
const Donar = require('./models/donar');

app.use(cors());
app.use(bodyparser.json());

const PORT = 4001;

app.get('/', (req, res) => {
    res.send("ok !!");
})

app.get('/removeDonar/:id', (req, res) => {
    Donar.remove({ "_id": req.params.id }).then(rec => {
        if (rec) {
            res.status(200).json(rec)
        } (err) => {
            res.status(500).json({ error: "error" })
        }
    })
})

app.post('/addData', (req, res) => {
    // let data = req.body;

    newdonar = new Donar({
        name: req.body.name,
        age: req.body.age,
        blood_grp: req.body.blood_grp,
        medical_history: req.body.medical_history,
        mobile_number: req.body.mobile_number,
        pin_code: req.body.pin_code
    })
    // res.send(newdonar.name);
    newdonar.save().then(rec => {
        res.status(200).json(rec)
    }, (err) => {
        res.status(500).json({ error: "error" })

    });

}
)


app.get('/getDonardata', (req, res) => {
    Donar.find().then(rec => {
        if (rec) {
            res.status(200).json(rec)
        } (err) => {
            res.status(500).json({ error: "error" })
        }
    })
})

mongoose.connect(config.mongoDbUrl, {
    useNewUrlParser: true
});
const connection = mongoose.connection;
connection.once('open', function () {
    console.log("MongoDB database connected successfully ");
})

app.listen(PORT, function () {
    console.log("Server is running on :" + PORT);
});
