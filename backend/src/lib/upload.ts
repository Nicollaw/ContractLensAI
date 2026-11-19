import multer from 'multer'
import { v4 as uuidv4 } from 'uuid'
import { extname } from 'node:path'

const storage = multer.diskStorage({ destination:'uploads/', filename: (req, file, callback) => {
    const extension = extname(file.originalname);
    const fileName =  uuidv4() + extension;
    callback(null, fileName);
}});

const allowedMimeTypes = new Set(['image/png', 'image/jpeg', 'application/pdf']);

export const upload = multer({
    storage: storage,
    fileFilter: (req, file, callback) => {
        const isAllowed = allowedMimeTypes.has(file.mimetype);
        
        if (!isAllowed) {     
           return callback(new Error('Apenas arquivos PNG, JPEG ou PDF'))
        }
        callback(null, true)
    },
      limits:  { fileSize: 10 * 1024 * 1024 }        
})