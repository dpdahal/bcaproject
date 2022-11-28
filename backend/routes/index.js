import express from "express";
import userRouter from "./user.js";
import loginRouter from "./login.js";

var router = express.Router();

router.get('/', function (req, res, next) {
    res.send("we are here");
});

router.use('/login', loginRouter);
router.use('/users', userRouter);

export default router;
