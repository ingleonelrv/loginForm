const mongoose = require('mongoose')
const URI='mongodb://localhost/users'
// const URI=process.env.MONGODB_URI

mongoose.connect(URI,{
    //propiedades
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:false
})
.then(db => console.log('Server Rest DataBase is connected'))
.catch(err => console.error(err))

module.exports=mongoose