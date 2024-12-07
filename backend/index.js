const express = require('express');
const cookieParser = require('cookie-parser')
const cors = require('cors')
const dotenv = require('dotenv');
const userRoute = require('./routes/user.route')
const companyRoute = require('./routes/company.route')
const jobRoute = require('./routes/job.route')
const applicationRoute = require('./routes/application.route')
const path = require('path');
const { connectDB } = require('./utils/mongoDB');
dotenv.config({});

const app = express();
connectDB()
const PORT = process.env.PORT || 5000;
const _dirname = path.resolve();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const  corsOptions  = {
    origin:"http://localhost:3000",
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials:true
}
app.use(cors(corsOptions));

app.use('/api/v1/user' , userRoute)
app.use('/api/v1/company' , companyRoute)
app.use('/api/v1/job' , jobRoute)
app.use('/api/v1/application' , applicationRoute)
 

app.use(express.static(path.join(_dirname, "/frontend/build")));
app.get('*', (_,res) => {
    res.sendFile(path.resolve(_dirname, "frontend", "build", "index.html"));
});

app.listen(PORT , ()=>{
    
    console.log(`server start on licalhost:${PORT}`)
})

