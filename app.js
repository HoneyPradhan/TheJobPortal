const cors = require('cors');
const express=require("express")
const mongoose=require("mongoose")
const app=express()
const morgan =require("morgan")
const bodyParser=require("body-parser")
require("dotenv").config()
const cors=require("cors")

//IMPORT ROUTES
const authRoutes =require('./routes/authRoutes')
//database connection
const userRoutes=require('./routes/userRoutes')

const jobsTypeRoute=require('./routes/jobsTypeRoute')

const jobRoute = require('./routes/jobsRoutes')




const cookieParser = require("cookie-parser")
const errorHandler=require("./middleware/error")


mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}) 
    .then(() => console.log("DB connected"))
    .catch((  err) => console.log(err));


    //MIDDLEWARE
    app.use(morgan('dev'))
    app.use(bodyParser.json({limit: "5mb"}))
    app.use(bodyParser.urlencoded({
        limit: "5mb",
        extended:true

    }))

    app.use(cookieParser())
    // app.use(cors())
    app.use('/api',authRoutes)

    app.use('/api',userRoutes)

    app.use('/api',jobsTypeRoute)
    
    app.use('/api',jobRoute)

    

//Routes MIDDLEWARE
    // app.get('/',(req,res)=>{
    //     res.send("Hello from node js")
      
    // })
    //error middleware
app.get('/', (req, res) => {
    res.send('Welcome to my backend API!');
});
app.get('/favicon.ico', (req, res) => {
    // Send a 204 "No Content" status code
    res.status(204).end();
});

    app.use(errorHandler)


const allowedOrigins = process.env.ALLOWED_ORIGINS.split(',');

// Configure CORS middleware dynamically
app.use(cors({
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      // Allow requests from whitelisted origins
      callback(null, true);
    } else {
      // Block requests from non-whitelisted origins
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow all HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Adjust allowed headers as needed
  credentials: true // Set to true if your client-side application sends credentials (e.g., cookies)
}));



const port = process.env.PORT ||9000;

app.listen(port,()=>{
    console.log(`Server running on the port ${port}`);
})
// const corsOptions = {
//   origin: process.env.CORS_ORIGINS ? process.env.CORS_ORIGINS.split(',') : [],
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   credentials: true
// };

// app.use(cors(corsOptions));
