const multer = require('multer');

module.exports = () => {
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            console.log(file);
            cb(null, 'uploads');
        },
        filename: (req, file, cb) => {
            console.log(file)
            const fname = Date.now() + '_' + file.originalname.split(' ').join('_');
            cb(null, fname);
        }
    });

    return multer({ storage }).single('file');
};