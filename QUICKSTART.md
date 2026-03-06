# medExpress Quick Start Guide

This guide will help you get the medExpress application (Frontend + Backend) up and running quickly.

## Prerequisites

Make sure you have the following installed:
- ✅ Node.js (v14 or higher) - [Download](https://nodejs.org/)
- ✅ MongoDB - [Download](https://www.mongodb.com/try/download/community)
- ✅ Git
- ✅ Postman (for API testing) - [Download](https://www.postman.com/downloads/)

## Project Structure

```
web_api_development/
├── frontend/          # Next.js frontend application
└── backend/           # Node.js/Express API server
```

## Step 1: Start MongoDB

### On Windows:
```bash
net start MongoDB
```

### On macOS/Linux:
```bash
sudo service mongod start
# or
brew services start mongodb-community
```

To verify MongoDB is running:
```bash
mongosh
# or
mongo
```

## Step 2: Setup and Run Backend

Open a terminal and navigate to the backend folder:

```bash
cd backend

# Install dependencies (first time only)
npm install

# Configure environment variables
# The .env file is already created with default values
# You can edit it if needed

# Start the backend server in development mode
npm run dev
```

You should see:
```
Server is running on port 5000
Environment: development
MongoDB Connected: localhost
```

**Backend API is now running at:** `http://localhost:5000`

## Step 3: Setup and Run Frontend

Open a **NEW terminal** window and navigate to the frontend folder:

```bash
cd frontend

# Install dependencies (first time only)
npm install

# Start the frontend development server
npm run dev
```

You should see:
```
- Local:        http://localhost:3000
```

**Frontend is now running at:** `http://localhost:3000`

## Step 4: Test the Application

### Test Frontend:
1. Open your browser
2. Go to `http://localhost:3000`
3. You should see the medExpress landing page
4. Click "Login" to go to the login page
5. Go to `http://localhost:3000/dashboard` to see the dashboard

### Test Backend API:
1. Open Postman
2. Import the collection: `backend/postman_collection.json`
3. Follow the testing guide in `backend/POSTMAN_GUIDE.md`

## Quick API Test

### 1. Health Check
```bash
curl http://localhost:5000/health
```

### 2. Register a User
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

### 3. Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

## Project URLs

| Service | URL | Purpose |
|---------|-----|---------|
| Frontend | http://localhost:3000 | medExpress web application |
| Backend API | http://localhost:5000 | REST API server |
| API Health | http://localhost:5000/health | Server health check |
| MongoDB | mongodb://localhost:27017 | Database |

## Available Scripts

### Backend (`/backend`)
```bash
npm run dev      # Start development server with auto-reload
npm start        # Start production server
```

### Frontend (`/frontend`)
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## API Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/health` | Health check | No |
| POST | `/api/auth/register` | Register new user | No |
| POST | `/api/auth/login` | Login user | No |
| GET | `/api/auth/profile` | Get user profile | Yes |

## Frontend Pages

| Page | URL | Description |
|------|-----|-------------|
| Home | `/` | Landing page |
| Login | `/login` | User login |
| Signup | `/signup` | User registration |
| Dashboard | `/dashboard` | User dashboard (after login) |

## Troubleshooting

### Backend won't start
- **MongoDB not running**: Start MongoDB first
- **Port 5000 in use**: Change PORT in `.env` file
- **Dependencies missing**: Run `npm install` in backend folder

### Frontend won't start
- **Port 3000 in use**: Next.js will prompt to use port 3001
- **Dependencies missing**: Run `npm install` in frontend folder
- **Build errors**: Delete `.next` folder and run `npm run dev` again

### MongoDB connection failed
```bash
# Check if MongoDB is running
mongosh

# If not running, start it:
# Windows:
net start MongoDB

# macOS/Linux:
sudo service mongod start
```

### API returns 404
- Make sure backend is running on port 5000
- Check the URL: `http://localhost:5000/api/auth/...`

### CORS errors
- Backend CORS is already configured
- Check `FRONTEND_URL` in backend `.env` file

## Environment Variables

### Backend (`.env`)
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/medexpress
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRES_IN=24h
FRONTEND_URL=http://localhost:3000
```

### Frontend
Next.js automatically uses `http://localhost:3000`

## Development Workflow

1. **Start MongoDB** (if not already running)
2. **Start Backend** in terminal 1:
   ```bash
   cd backend
   npm run dev
   ```
3. **Start Frontend** in terminal 2:
   ```bash
   cd frontend
   npm run dev
   ```
4. **Open Browser**: `http://localhost:3000`
5. **Test API**: Use Postman or curl

## Testing with Postman

1. Import collection: `backend/postman_collection.json`
2. Test registration: POST `/api/auth/register`
3. Test login: POST `/api/auth/login`
4. Copy JWT token from login response
5. Test profile: GET `/api/auth/profile` with Bearer token

See detailed guide: `backend/POSTMAN_GUIDE.md`

## Next Steps

- [ ] Connect frontend to backend API
- [ ] Implement protected routes in frontend
- [ ] Add form validation in frontend
- [ ] Create user profile page
- [ ] Add medicine ordering functionality
- [ ] Implement admin panel

## Resources

- [Backend README](./backend/README.md) - Detailed API documentation
- [Postman Guide](./backend/POSTMAN_GUIDE.md) - API testing guide
- [Next.js Docs](https://nextjs.org/docs)
- [Express Docs](https://expressjs.com/)
- [MongoDB Docs](https://docs.mongodb.com/)

## Support

If you encounter any issues:
1. Check the troubleshooting section above
2. Review the error messages in the terminal
3. Check MongoDB is running
4. Verify all dependencies are installed
5. Make sure ports 3000 and 5000 are available

## Summary

✅ **Backend**: Node.js + Express + MongoDB + JWT
✅ **Frontend**: Next.js + React + Tailwind CSS
✅ **Authentication**: Complete user registration and login
✅ **Documentation**: README, Postman collection, and testing guide

Happy coding! 🚀
