# 🌟 VIBE - Social Media Platform

> A modern, full-stack social media application built with the MERN stack, featuring real-time messaging, live notifications, and seamless social interactions.


## ✨ Features

### 🔥 Core Features
- **Real-time Messaging** - Instant chat with online/offline status indicators
- **Live Notifications** - Get notified instantly for likes, comments, and follows
- **Content Sharing** - Upload images with preview and optimization
- **Social Interactions** - Like, comment, bookmark, and follow users
- **Profile Management** - Customize profiles with bio and media

### 🛡️ Security & Performance
- **JWT Authentication** - Secure user sessions with HTTP-only cookies
- **Real-time Updates** - Socket.IO powered live interactions
- **Responsive Design** - Mobile-first approach with Chakra UI
- **Cloud Storage** - Cloudinary integration for optimized media delivery
- **State Management** - Redux Toolkit for consistent app state

## 🚀 Tech Stack

### Frontend
- **React.js** - Component-based UI library
- **Redux Toolkit** - State management
- **Chakra UI** - Modern component library
- **Socket.IO Client** - Real-time communication
- **React Router** - Navigation and routing

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Socket.IO** - Real-time engine
- **JWT** - Authentication
- **Cloudinary** - Media management

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account
- Cloudinary account

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/vibe-social-media.git
cd vibe-social-media
```

2. **Install dependencies**
```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
```

3. **Environment Variables**
Create a `.env` file in the root directory:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
PORT=5000
```

4. **Run the application**
```bash
# Run backend server
npm run dev

# Run frontend (in another terminal)
cd frontend
npm start
```


## 🎨 Project Structure

```
vibe-social-media/
├── backend/
│   ├── config/
│   │   ├── cloudinary.js
│   │   └── mongodb.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── postController.js
│   │   └── userController.js
│   ├── middlewares/
│   │   ├── authUser.js
│   │   └── multer.js
│   ├── models/
│   │   ├── userModel.js
│   │   ├── postModel.js
│   │   └── messageModel.js
│   ├── routes/
│   │   ├── authRoute.js
│   │   ├── userRoute.js
│   │   └── postRoute.js
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   └── App.js
│   └── public/
└── README.md
```


<div align="center">
  <p>Made with for connecting people through meaningful social interactions</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>
