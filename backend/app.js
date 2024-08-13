const express = require('express')
const app = express();

const port = 5000;
const userRouter = require('./routers/userRoute');   //define userRouter
app.use(express.json());  //code should typed below userRouter

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/auth',userRouter);  //if passed from FE , go to userRouter 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})