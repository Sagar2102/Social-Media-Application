import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"


const app=express();

const PORT=8000;

app.listen(prompt,()=>{
    console.log(`Server listen at port ${PORT}`);
})

