import User from "../models/User.js";

class AuthControllers {

    async login(req, res, next) {
        let userName = req.body.username;
        let password = req.body.password;
        let user = await User.findOne({username: userName});
        if (user) {
            let isMatch = await user.comparePassword(password);
            if (isMatch) {
                let token = await user.generateToken();
                res.status(200).json({
                    success: true,
                    token: token,
                    user: user
                });
            } else {
                res.status(401).json({
                    success: false,
                    message: "Password is not correct"
                });
            }

        } else {
            return res.status(404).send({
                message: "User not found"
            });
        }

    }

}

export default AuthControllers;