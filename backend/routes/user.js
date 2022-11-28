import express from "express";
import UserControllers from "../controllers/UserControllers.js";
import Uploads from "../middleware/Uploads.js";

let userRouter = express.Router();
let userInstance = new UserControllers();

let fsUpload = new Uploads()
let upload = fsUpload.fileUpload('uploads/users')

userRouter.get('/', userInstance.index);
userRouter.post('/', upload.single('image'), userInstance.create);


export default userRouter;