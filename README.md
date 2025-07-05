# Chatty - Real-Time Chat Application

A full-stack real-time chat application built with the MERN stack, featuring live messaging, JWT authentication, and a modern UI with theme customization.

## 📸 Screenshots

### Login Interface
![Login Screen](./ScreenShots/Screenshot%202025-07-05%20at%208.48.32%20PM.png)

### Main Chat Interface
![Chat Interface](./ScreenShots/Screenshot%202025-07-05%20at%208.49.07%20PM.png)

![Chat Interface-2](./ScreenShots/Screenshot%202025-07-05%20at%208.51.53%20PM.png)

### Theme Customization
![Theme Customization](./ScreenShots/Screenshot%202025-07-05%20at%208.53.43%20PM.png)

### Profile Edit
![Profile Edit](./ScreenShots/Screenshot%202025-07-05%20at%208.54.22%20PM.png)

### Sign Up
![Screenshot](./ScreenShots/Screenshot%202025-07-05%20at%208.55.17%20PM.png)

## ✨ Features

### 🔐 Authentication & Authorization
- JWT-based secure authentication
- User registration and login
- Protected routes and middleware
- Session management

### 💬 Real-Time Messaging
- Instant messaging with Socket.io
- Real-time message delivery
- Message timestamps
- Typing indicators

### 👥 User Management
- Online/offline status indicators
- User profiles with avatars
- Contact list management
- User search functionality

### 🎨 Modern UI/UX
- Responsive design for all devices
- Dark/light theme support
- 24+ custom themes (Cyberpunk, Synthwave, Corporate, etc.)
- Clean and intuitive interface
- Loading states and animations

### 🔧 Advanced Features
- Global state management with Zustand
- Error handling (client & server-side)
- Image sharing capabilities
- Message persistence
- Deployment-ready configuration

## 🛠️ Technologies Used

### Frontend
- **React** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Tailwind CSS component library
- **Zustand** - State management
- **Socket.io Client** - Real-time communication

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Socket.io** - Real-time engine
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing

### Development Tools
- **Vite** - Build tool
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Concurrently** - Run multiple commands

## 🏗️ Architecture

```
RealTime-ChatApp/
├── frontend/
│   ├── src/
│   │   ├── components/          # Reusable UI components
│   │   ├── pages/               # Application pages
│   │   ├── store/               # Zustand store
│   │   ├── hooks/               # Custom React hooks
│   │   ├── utils/               # Helper functions
│   │   └── assets/              # Static assets
│   ├── public/
│   ├── package.json
│   └── vite.config.js
├── backend/
│   ├── controllers/             # Route controllers
│   ├── middleware/              # Custom middleware
│   ├── models/                  # Database models
│   ├── routes/                  # API routes
│   ├── socket/                  # Socket.io configuration
│   ├── utils/                   # Helper utilities
│   └── server.js
├── package.json
├── .env
└── README.md
```

## 📱 Usage

### Getting Started
1. **Register** a new account or **login** with existing credentials
2. **Browse** online users in the contacts sidebar
3. **Click** on any user to start a conversation
4. **Send** messages in real-time
5. **Customize** your experience with different themes

### Key Functionalities
- **Real-time messaging**: Messages appear instantly without page refresh
- **Online status**: See who's currently online with green indicators
- **Theme switching**: Choose from 24+ beautiful themes
- **Profile management**: Update your profile information and avatar
- **Responsive design**: Works seamlessly on desktop and mobile

## 🎨 Theme Customization

The application includes 24+ carefully crafted themes:
- **Light/Dark** - Classic themes
- **Cyberpunk** - Neon futuristic design
- **Synthwave** - Retro 80s aesthetic
- **Corporate** - Professional business theme
- **Forest** - Nature-inspired colors
- **And many more!**

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Messages
- `GET /api/messages/:id` - Get conversation messages
- `POST /api/messages/send/:id` - Send message

### Users
- `GET /api/users` - Get all users
- `PUT /api/users/profile` - Update user profile

## 🏃‍♂️ Performance Optimizations

- **Lazy loading** for components
- **Debounced search** for user filtering
- **Optimized re-renders** with proper state management
- **Efficient Socket.io** event handling
- **Image optimization** for avatars

## 🔒 Security Features

- **JWT Authentication** with httpOnly cookies
- **Password hashing** with bcryptjs
- **Input validation** and sanitization
- **CORS configuration** for cross-origin requests
- **Rate limiting** (configurable)

## 📝 Learning Journey

This project was built as part of my full-stack development learning journey, following best practices and modern web development patterns. It demonstrates proficiency in:

- Full-stack JavaScript development
- Real-time application architecture
- Modern React patterns and hooks
- RESTful API design
- Database modeling and relationships
- Authentication and authorization
- Socket.io real-time communication
- Responsive UI development

## 🙏 Acknowledgments

- Inspired by modern chat applications like WhatsApp and Discord
- Built following full-stack development best practices
- UI/UX inspired by contemporary design systems
