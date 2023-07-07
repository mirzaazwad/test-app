const express=require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Ken KAAJ KORTESENA AAAAAAAAAAAAAAAA 😭😢');
});

app.get('/hello',(req,res)=>{
  res.send('Bye World');
})

app.get('/nafisa',(req,res)=>{
  res.send('Nafisa is successful');
})

const server=app.listen(port, () => {
  console.log(`Server is running`);
});

module.exports={
  app,
  server
}