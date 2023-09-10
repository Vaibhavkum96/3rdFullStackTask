import User from "../models/User.js"; 

export const updateUser = async (req,res,next)=> {
    try{
         const updatedUser = await User.findOneAndUpdate({id:req.params.id}, {$set:req.body}, {new:true});
         res.status(200).json({Status:"Success", Result: updatedUser});
    }

    catch(err){
        next(err);
    }
}

export const deleteUser = async(req,res,next)=> {
    try{
          await User.findOneAndDelete({id:req.params.id});
          res.status(200).json({Status:"Success", Result:"User has been deleted!"});
    }

    catch(err){
        next(err);
    }
}

export const getUser = async(req,res,next)=> {
    try{
        const user = await User.findOne({id:req.params.id})
        res.status(200).json({Status:"Success", Result:user});
     }
 
     catch(err){
         next(err)
     }
}

export const createNewUser = async(req,res,next)=> {
    try{
        
        const userEmail = req.body.email; 
        const emailExists = await User.findOne({email: userEmail}); 
        
        //Checking if the email is already present in DB.
        if(emailExists){
            res.status(400).json({Status:"Error",Result:"Email Already In Use!"});
            return;
        }

        //Adding A new User.

        const newUser = new User({
            id: req.body.id,
            firstname: req.body.firstname,
            lastname : req.body.lastname,
            email : req.body.email, 
            country: req.body.country,

          })

          await newUser.save()
          res.status(200).send({Status:"Success", Result:"User has been created!"});


    }

    catch(err){
        next(err);
    }
}

export const getUsers = async(req,res,next)=> {
    try{
        const users = await User.find();
        res.status(200).json({Status:"Success",Result:users});
    }

    catch(err){
        next(err)
    }
}

