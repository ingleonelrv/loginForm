const router=require('express').Router()
const User =require('../models/userModel')

router.post('/users/login', async(req, res)=> {
    const {email,password}=req.body
    const emailUser=await User.findOne({email:email})
    if(emailUser){
        if(await emailUser.matchPassword(password)){
            res.send(emailUser)
        }else{
            res.send({error: 'Contraseña incorrecta'})
        }
    }else{
        res.send({error: 'Correo electronico no coincide, favor verifique.'})
    }
})
router.post('/users/register',async (req,res)=>{
    const {email,password,confirmPassword,type}=req.body
    const errors=[]
    // if(name.length<=0||email.length<=0){
    //     errors.push({error:'Please fill all fields'})
    // }
    if(password!=confirmPassword){
        errors.push({error:'Password do not match!'})
    }
    if(password.length<6){
        errors.push({error: 'Password must be at least 6 characters'})
    }
    if(errors.length>0){
        res.send(errors)
    }else{
        const emailUser=await User.findOne({email:email})
        if(emailUser){
            res.send({error: 'The email is already in use'})
        }
        const user=new User({email,password,type})
        user.password=await user.encryptPassword(password)
        // await user.save()
        user.save(function (err,user) {
            if (err) return fn(false);
            res.send(user)
          })
    }
})
module.exports=router