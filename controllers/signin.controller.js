const SignIn = require('../models/sign.model')

exports.create = (req,res)=>{
    if(!req.body.username){
        return res.status(400).send({
            message:"姓名不能为空"
        })
    }else if(!req.body.class){
        return res.status(400).send({
            message:"班级不能为空"
        })
    }else if(!req.body.location){
        return res.status(400).send({
            message:"上课地点不能为空"
        })
    }

    const sign = new SignIn({
        username: req.body.username,
        class: req.body.class,
        location: req.body.location
    })

    sign.save().then(data => {
        res.send(data)
    }).catch(err=>{
        res.status(500).send({
            message:err.message || "签到时出错！"
        }) 
    })
}

exports.findAll = (req,res)=>{
    SignIn.find().then(data=>{
        res.send(data)
    }).catch(err=>{
        res.status(500).send({
            message:err.message || "服务器出错！"
        })
    })
}