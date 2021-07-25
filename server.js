const express =require('express')
const cors=require('cors')
const { default: axios } = require('axios')
const mongoose=require('mongoose')
const app=express()
app.use(cors())
app.use(express.json())
require('dotenv').config()
const PORT=process.env.PORT

mongoose.connect(`${process.env.MONGO_ATLAS_URL}`, {useNewUrlParser:true,useUnifiedTopology:true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('mongodb is connected!');
});

//require functions===================================================================================
const apiData=require('./controllers/apiData.controller')
const {createFav,getFav,deleteFav,updateFav}=require('./controllers/crud.controller')

//end points=========================================================================================== 
//testing
app.get('/',(req,res)=>{
    res.send('hello feom the Back End')
})
//get data from api
app.get('/apidata',apiData)
//create fav
app.post('/favourite',createFav)
//get fav
app.get('/favourite',getFav)
//delete fav
app.delete('/favourite/:id',deleteFav)
//update fav
app.put('/favourite/:id',updateFav)

//app=====================================================================================================
app.listen(PORT,()=>
console.log(`Running on PORT:${PORT}`))