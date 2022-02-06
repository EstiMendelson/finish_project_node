const express = require("express")
const router = express.Router()
const couponController = require("../controller/coupon")

router.get('/get-all/:skip/:limit', couponController.getAll);
router.post('/insert-data', couponController.insertData);
router.delete('/delete-many/:list', couponController.deleteMany);
router.delete('/delete-one/:id', couponController.deleteOne);
router.put('/update/:id', couponController.update);

module.exports = router