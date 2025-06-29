import dotenv from "dotenv"
import app from "./src/app";
import connectDB from "./src/db/connectDB";

dotenv.config();
const port = process.env.PORT || 3000



try {
    connectDB().then(() => {
                app.listen(port, (err) => {
   err ? console.log(err) : console.log(`Server is running on http://localhost:${port}`)
    }
    )
    
})
} catch (error) {
    console.log("database connection error")
}
