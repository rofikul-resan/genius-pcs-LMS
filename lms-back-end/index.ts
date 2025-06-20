import express from "express"


const port = process.env.PORT || 3000

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')

})

app.listen(port, (err) => {
    try {
        console.log(`Server is running on http://localhost:${port}`)
    } catch {
        console.log(err);
        
    }
})
