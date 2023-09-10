import { Express } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from  "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import { Path } from "mongoose";
import fileURLToPath from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = Express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginEmbedderPolicy({policy: "cross-origin"}));
app.use(morgon("common"));
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, 'public/assets')));

const storage = multer.diskStorage({
    destination:(req ,file, cb)=>{
        cb (null,"public/assets");
    }, 
    filename : function( req, file,cb){
        cb(null, file.originalname);
    }
});

const upload = multer({storage});