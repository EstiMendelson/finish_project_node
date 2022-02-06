const coupon = require('../model/coupon')
const randomWords = require('random-words');

function randomDate(start, end) {

    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).getDate();
    return date;
}

function newCoupon() {

    const newcoupon = new coupon({
        name: randomWords(),
        type: 'Basic',
        startDate: randomDate(new Date(2012, 0, 1), new Date()),
        endDate: randomDate(new Date(), new Date(2025, 0, 1)),
        discountAmount: Math.floor(Math.random() * (500) + 50),
        userGroupName: randomWords()
    })
    return newcoupon;
}

async function createData() {

    const data = [];
    for (var i = 0; i < 40; i++)
        data.push(newCoupon());
    return data;
}

const insertData = (async(req, res) => {
    
    coupon.insertMany(await createData())
        .then(d => res.send(d))
        .catch(e => res.send(e))
})

const deleteMany = ((req, res) => {

    const couponsDelete = req.params.list.split(',');
    coupon.deleteMany({ _id: { $in: couponsDelete } })
        .then(d => res.send("good!!!!!!!!!!"))
        .catch(e => res.send("bad!!!!!!!!!!!"))
})

const deleteOne = ((req, res) => {

    coupon.deleteOne({ _id: req.params.id })
        .then(d => res.send("good!!!!!!!!!!"))
        .catch(e => res.send("bad!!!!!!!!!!!"))
})

const update = ((req, res) => {

    const c = req.body;
    const id = req.params.id;
    coupon.findByIdAndUpdate(id, c, { new: true })
        .then(d => res.send(d))
        .catch(e => res.send(e))
})

const getAll = ((req, res) => {

    coupon.find().skip(req.params.skip).limit(20)
        .then(d => res.send(d))
        .catch(e => res.send(e))
})

module.exports = { insertData, deleteMany, getAll, deleteOne, update }