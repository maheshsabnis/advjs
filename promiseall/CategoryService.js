const express = require('express');
const cors= require('cors');
const categories = [{CategoryId:101,CategoryName:'C1'},{CategoryId:102,CategoryName:'C2'},{CategoryId:103,CategoryName:'C3'}];

const instance = express();
instance.use(cors());

instance.get('/api/categories',(req,resp)=>{
    resp.status(200).send(JSON.stringify(categories));
});

instance.listen(6001, ()=>{
    console.log('Category Service Started on Port 6001');
});

