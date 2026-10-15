import express from "express"
import path from "node:path"
import {fileURLToPath} from "node:url"

const app = express()
const PORT = 3000
const __dirname = path.dirname(fileURLToPath(import.meta.url))

app.use(express.static(path.join(__dirname,"public/index.html")))

// app.get("/", (req, res) => {
//     res.send("Hello Guys!!")
// })
app.get("/health", (req, res) => {
    res.json({status: "ok", uptime: process.uptime()})
})

app.get('/version', (req, res) => {
  res.send(`App version: ${process.env.APP_VERSION || 'unset'}`);
})

app.listen(PORT, "127.0.0.1", () => {
    console.log(`listening on http://127.0.0.1:${PORT}`)
})