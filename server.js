const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
const sampleData={
    "Function":"TestingData"
}
app.get('/api/sampleData',(res,req)=>{
    req.json(sampleData);
})
app.listen(port,()=>{
    console.log(`Server Running on http://localhost:${port}`);
})