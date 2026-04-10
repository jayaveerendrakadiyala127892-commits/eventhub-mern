# EventHub - MERN Stack Web Application 🎉

EventHub is a full-stack MERN (MongoDB, Express, React, Node.js) web application that allows users to securely create, manage, and explore events. It features JWT authentication, secure REST APIs, and image uploading capabilities. 

The frontend is built with React/Vite and the backend is powered by Node.js and Express.

---

## 🚀 Live Demo
- **Frontend (Vercel):** [https://eventhub-mern-iota.vercel.app](https://eventhub-mern-iota.vercel.app)
- **Backend API (Render):** [https://eventhub-mern-txy5.onrender.com](https://eventhub-mern-txy5.onrender.com)

---

## ✨ Key Features
- **User Authentication:** Secure JWT-based registration and login system with Role-based access (Attendees vs Organizers).
- **Event Management:** Organizers can create, edit, and delete events.
- **Image Uploading:** Allows users to upload a cover image and multiple extra images for events.
- **Responsive UI:** Clean, mobile-friendly interface built with modern React.
- **Fully Deployed:** Connected to a cloud MongoDB Atlas database, backend hosted on Render, and frontend hosted on Vercel.

---

## 🛠️ Technology Stack
**Frontend:**
- React 19 / Vite
- React Router DOM
- Axios for API requests
- Vanilla CSS / Tailwind (Optional)

**Backend:**
- Node.js & Express.js
- MongoDB & Mongoose
- JWT (JSON Web Tokens) & bcryptjs for security
- Multer for local image uploads handling
- CORS configured for secure cross-origin resource sharing

---

## 💻 Running the Project Locally

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) and [Git](https://git-scm.com/) installed on your machine. You will also need a MongoDB Atlas database or a local MongoDB instance.

### 1. Clone the repository
```bash
git clone https://github.com/jayaveerendrakadiyala127892-commits/eventhub-mern.git
cd eventhub-mern
```

### 2. Backend Setup
1. Navigate to the server folder:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `server` directory and add the following variables:
   ```env
   PORT=5000
   MONGO_URI=mongodb+srv://<your_username>:<your_password>@cluster0...
   JWT_SECRET=your_super_secret_key
   FRONTEND_URL=http://localhost:5173
   BACKEND_URL=http://localhost:5000
   ```
4. Start the server:
   ```bash
   npm run dev
   ```
   *(The server will run on `http://localhost:5000`)*

### 3. Frontend Setup
1. Open a new terminal and navigate to the client folder:
   ```bash
   cd client-eventhub
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create an `.env` file in the `client-eventhub` directory and add:
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```
4. Start the React development server:
   ```bash
   npm run dev
   ```
   *(The app will open at `http://localhost:5173`)*

---

## ☁️ Deployment Environment Variables Reference

When deploying to production, make sure the following environment variables are set in your dashboards:

### Render (Backend)
- `NODE_ENV` = `production`
- `PORT` = `10000` *(Render sets this automatically, but configured in render.yaml)*
- `MONGO_URI` = `mongodb+srv://user:pass@cluster...` *(Must have exactly matching password with MongoDB database!)*
- `JWT_SECRET` = `eventhub_secret_key_2026`
- `FRONTEND_URL` = `https://eventhub-mern-iota.vercel.app`
- `BACKEND_URL` = `https://eventhub-mern-txy5.onrender.com`

### Vercel (Frontend)
- `VITE_API_URL` = `https://eventhub-mern-txy5.onrender.com/api`

---

## ⚠️ Notes on Image Uploading in Production
This project uses `multer` to save uploaded event images to the local `/uploads` directory on the server. **Render's free tier uses an ephemeral filesystem**, which means if the server spins down due to 15 minutes of inactivity, all uploaded images will be deleted and return a `404 Not Found`.

**To fix this for a production-ready application:**
You should implement [Cloudinary](https://cloudinary.com/) or AWS S3 inside the `upload.js` middleware instead of saving to disk directly.
