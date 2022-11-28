import User from "../models/User.js";

class UserControllers {

    async index(req, res) {
        try {
            const users = await User.find({});
            res.status(200).json({users: users});
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async create(req, res) {
        try {
            let imageName = "";
            if (req.file) {
                imageName = req.file.filename;
            }
            return await User.create({...req.body, image: imageName}).then((user) => {
                res.status(200).json({success: "User created successfully"});
            }).catch((err) => {
                res.json(err);
            });

        } catch (e) {
            res.status(500).json(e);
        }
    }


}

export default UserControllers;