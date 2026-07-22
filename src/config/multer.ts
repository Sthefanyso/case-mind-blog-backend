import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: (_req, _file, callback) => {
        callback(null, 'uploads');
    },

    filename: (_req, file, callback) => {
        const uniqueName =
            Date.now() + path.extname(file.originalname);

        callback(null, uniqueName);
    }
});

const upload = multer({
    storage
});

export default upload;