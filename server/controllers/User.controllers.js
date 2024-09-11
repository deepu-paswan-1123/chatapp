import user from "../models/user.model.js";
 
export const addUser=async(req,res)=>{
    // console.log(req.body)
    try{
        const exist= await user.findOne({sub:req.body.sub})
            if (exist) {
                return res.status(200).json({ msg: "user already exists" });
            } else {
                const newUser = new user(req.body);
                await newUser.save();
                return res.status(200).json(newUser);
            }
        
    }catch(error){
        return res.status(500).json(error.message)
    }
}



export const getUser= async(req,res)=>{
    try{
        const userinfo=await user.find({});
        return res.status(200).json(userinfo);
    }catch(error){
        console.log("can not access ",error.message)
        return res.status(500).json(error.message)
    }
}



