import multer from "multer";

class Uploads {
    fileUpload(distination = "uploads") {
        const storage = multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, `public/${distination}`)
            },
            filename: function (req, file, cb) {
                let fileName = file.originalname.trim().split(' ').join('_');
                cb(null, Date.now() + '_' + fileName)
            }
        })
        return multer({storage: storage})
    }
}

export default Uploads;