const express=require('express')
const app=express();
const port=process.env.Port  || 5000;

const cors=require('cors')

app.use(cors())
const course=require('./Data/course.json')

app.get('/', (req, res)=>
{
    res.send('News Api Running')
})


app.get('/course',(req,res)=>{
    res.send(course)
})




app.listen(port,()=>{
    console.log('running',port)
})