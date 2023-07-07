const express=require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!!!');
});

app.get('/hello',(req,res)=>{
  res.send('Bye World');
})

const server=app.listen(port, () => {
  console.log(`Server is running`);
});

module.exports={
  app,
  server
}