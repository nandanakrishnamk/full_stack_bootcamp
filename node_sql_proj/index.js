import express from 'express';
import productRoutes from './routes/productRoutes.js'
import pool from './config/db.js';

const app = express();
const PORT = 8090;

//middleware
app.use(express.json());

//ROUTES
app.use('/products', productRoutes);

// app.use('/', productRoutes);

// app.use('/', (req, res) => {
//     res.send("Hello world")
// });


app.listen(PORT, async()=>{
    try {
        const connection = await pool.getConnection();
        connection.release(); ///release the connection back immediately

        console.log(`👍 Server is running on http://localhost:${PORT}`)
        console.log(`👍 Database connection established`)
        
    } catch (error) {
        
        console.error(`❌ Failed to connect to database: ${error.message}`)
        console.log(`‼️ Server is running without database connection`)
    }
})
