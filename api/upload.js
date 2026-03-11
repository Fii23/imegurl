import fs from "fs"
import path from "path"
import formidable from "formidable"

export const config = {
api: {
bodyParser: false
}
}

export default async function handler(req,res){

const form = formidable()

form.parse(req,(err,fields,files)=>{

let file = files.file

let data = fs.readFileSync(file.filepath)

let uploadPath = path.join("/tmp",file.originalFilename)

fs.writeFileSync(uploadPath,data)

res.status(200).json({
url:"/tmp/"+file.originalFilename
})

})

}
