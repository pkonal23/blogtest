//api/popular
import data from "./data";
export default function handler(req, res){
    const {Sec}=data;
    if(Sec)return res.status(200).json(Sec)
    return res.status(404).json({error:"Data Not Found"})
}