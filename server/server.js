const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const path = require("path")
require("dotenv").config()

const app = express()

// Middleware
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  process.env.FRONTEND_URL,
].filter(Boolean)

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (mobile apps, curl, etc.)
      if (!origin) return callback(null, true)
      if (allowedOrigins.indexOf(origin) !== -1) {
        return callback(null, true)
      }
      // Allow all origins that end with vercel.app or netlify.app
      if (origin.endsWith(".vercel.app") || origin.endsWith(".netlify.app")) {
        return callback(null, true)
      }
      return callback(null, true) // permissive for now
    },
    credentials: true,
  })
)
app.use(express.json())

//  Serve uploaded images statically
app.use("/uploads", express.static(path.join(__dirname, "uploads")))

// Routes
app.use("/api/auth", require("./routes/authRoutes"))
app.use("/api/events", require("./routes/eventRoutes"))

// Health check
app.get("/", (req, res) => {
  res.send("EventHub API running ")
})

// Connect to MongoDB and start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(" MongoDB Connected")
    app.listen(process.env.PORT || 5000, () => {
      console.log(` Server running on port ${process.env.PORT || 5000}`)
    })
  })
  .catch((err) => {
    console.log(" MongoDB Error:", err.message)
  })