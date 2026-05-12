import multer from "multer"

// Use memory storage for serverless, disk storage for local development
const storage = process.env.NODE_ENV === 'production' 
  ? multer.memoryStorage()
  : multer.diskStorage({
      destination:(req,file,cb)=>{
        cb(null,"./public")
      },
      filename:(req,file,cb)=>{
        cb(null,file.originalname)
      }
    })

export const upload = multer({storage});