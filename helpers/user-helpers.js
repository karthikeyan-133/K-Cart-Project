var db= require('../config/connection')
var collection=require('../config/collections')
var bcrypt=require('bcrypt')

module.exports={
    doSignup:(userData)=>{
        return new Promise(async(resolve,reject)=>{
        userData.Password=await bcrypt.hash(userData.Password,10)
        db.get().collection(collection.USER_COLLECTION).insertOne(userData).then((data)=>{
            resolve(data.ops[0])
        })
        
    })



    },
    doLogin:(userData)=>{
        return new Promise(async(resolve,reject)=>{
            let loginStatus=false
            let response={}
            let user=await db.get().collection(collection.USER_COLLECTION).findOne({Email:userData.Email})
            if(user){
                bcrypt.compare(userData.Password,user.Password).then((status)=>{
                    if(status){
                        console.log('done');
                        response.user=user
                        response.status=true
                        resolve(response)

                    }else{
                        console.log('not done');
                        resolve({status:false})
                    }

                })
            }else{
                console.log('noooo')
                resolve({status:false})
            }
        })
    }
}