const express = require('express');
const cors= require('cors');
const products = [
    {ProductId:1001, ProductName:'P1',Price:1100,CategoryId:101},{ProductId:1002, ProductName:'P2',Price:1200,CategoryId:102},{ProductId:1003, ProductName:'P3',Price:1300,CategoryId:103},{ProductId:1004, ProductName:'P4',Price:1400,CategoryId:101},{ProductId:1005, ProductName:'P5',Price:1500,CategoryId:102},{ProductId:1006, ProductName:'P6',Price:1600,CategoryId:103}
];

const instance = express();
instance.use(cors());
instance.get('/api/products',(req,resp)=>{
    resp.status(200).send(JSON.stringify(products));
});

instance.listen(6002, ()=>{
    console.log('Product Service Started on Port 6002');
});

