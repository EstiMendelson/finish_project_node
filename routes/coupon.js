const express = require("express")
const router = express.Router()
const couponController = require("../controller/coupon")

router.get('/getAll/:skip/:limit', couponController.getAll);
router.post('/insertData', couponController.insertData);
router.delete('/deleteMany/:list', couponController.deleteMany);
router.delete('/deleteOne/:id', couponController.deleteOne);
router.put('/update/:id', couponController.update);

module.exports = router