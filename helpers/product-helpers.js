var db=require('../config/connection')
var collection=require('../config/collections')
module.exports={
    groaddProduct:(product,callback)=>{
      console.log(product);
      db.get().collection('product').insertOne(product).then((data)=>{
        console.log(data)
         callback(data.ops[0]._id)

      })
    },
    grogetAllProducts:()=>{
        return new Promise(async(resolve,reject)=>{
          let products=await db.get().collection(collection.PRODUCT_COLLECTION).find().toArray()
          resolve(products)
        })
    },
    vegaddProduct:(vegproduct,callback)=>{
      console.log(vegproduct);
      db.get().collection('vegproduct').insertOne(vegproduct).then((data)=>{
        console.log(data)
         callback(data.ops[0]._id)

      })
    },
    veggetAllProducts:()=>{
        return new Promise(async(resolve,reject)=>{
          let vegproducts=await db.get().collection(collection.VEG_COLLECTION).find().toArray()
          resolve(vegproducts)
        })
    },
    addDoctors:(doctors,callback)=>{
      console.log(doctors);
      db.get().collection('doctors').insertOne(doctors).then((data)=>{
        console.log(data)
         callback(data.ops[0]._id)

      })
    },
    getDoctors:()=>{
        return new Promise(async(resolve,reject)=>{
          let doctors=await db.get().collection(collection.DOC_COLLECTION).find().toArray()
          resolve(doctors)
        })
    },
    addTaxi:(taxi,callback)=>{
      console.log(taxi);
      db.get().collection('taxi').insertOne(taxi).then((data)=>{
        console.log(data)
         callback(data.ops[0]._id)

      })
    },
    getTaxi:()=>{
        return new Promise(async(resolve,reject)=>{
          let taxi=await db.get().collection(collection.TAXI_COLLECTION).find().toArray()
          resolve(taxi)
        })
    },
    addMedicine:(medicine,callback)=>{
      console.log(medicine);
      db.get().collection('medicine').insertOne(medicine).then((data)=>{
        console.log(data)
         callback(data.ops[0]._id)

      })
    },
    getMedicine:()=>{
        return new Promise(async(resolve,reject)=>{
          let medicen=await db.get().collection(collection.MEDICINE_COLLECTION).find().toArray()
          resolve(medicen)
        })
    },
    addRestaurants:(restaurants,callback)=>{
      console.log(restaurants);
      db.get().collection('restaurants').insertOne(restaurants).then((data)=>{
        console.log(data)
         callback(data.ops[0]._id)

      })
    },
    getRestaurants:()=>{
        return new Promise(async(resolve,reject)=>{
          let restaurants=await db.get().collection(collection.RESTAURANTS_COLLECTION).find().toArray()
          resolve(restaurants)
        })
    },
    addRent:(rent,callback)=>{
      console.log(rent);
      db.get().collection('rent').insertOne(rent).then((data)=>{
        console.log(data)
         callback(data.ops[0]._id)

      })
    },
    getRent:()=>{
        return new Promise(async(resolve,reject)=>{
          let rent=await db.get().collection(collection.RENT_COLLECTION).find().toArray()
          resolve(rent)
        })
    }
}