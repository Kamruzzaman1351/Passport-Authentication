import express, {Application, Request, Response} from "express"
import "dotenv/config"
const app: Application = express()

const PORT = process.env.PORT || 3000
app.get("/", (req: Request, res: Response) => {
  res.send("Hello world")
})
app.listen(PORT, () => {
  console.log(`Server RUnning at ${PORT}`)
})