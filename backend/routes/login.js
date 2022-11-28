import express from "express";
import AuthControllers from "../controllers/AuthControllers.js";

let loginRouter = express.Router();
let authInstance = new AuthControllers();

loginRouter.post('/', authInstance.login);

export default loginRouter;