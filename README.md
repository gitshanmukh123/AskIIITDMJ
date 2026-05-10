# IIITDMJ Hub

IIITDMJ Hub is a full-stack campus utility platform for students. It brings lost-and-found tracking, campus marketplace listings, real-time messaging, AI-generated study notes, credit-based payments, and AI interview practice into one MERN-style application.

The project is split into a React/Vite frontend and an Express/MongoDB backend with Socket.IO for live chat.

## Features

- Lost Desk: post lost or found items, browse campus listings, submit claim requests, and manage claim history.
- Campus Exchange: buy, sell, and discover books, essentials, and other student marketplace items.
- Real-time Messages: chat with other users using Socket.IO-powered online status and conversations.
- Smart Notes: generate structured AI study notes with diagrams, charts, markdown rendering, and history.
- AI Mock Interview: upload a resume, generate role-based interview questions, submit answers, and view performance reports.
- User Accounts: email/password login, Google authentication, profile updates, profile image upload, and theme preference.
- Credits and Payments: Stripe checkout flow for purchasing credits used by AI-powered features.
- Responsive UI: React 19, Tailwind CSS 4, Framer Motion, Redux Toolkit, and reusable campus-focused components.

## Tech Stack

**Frontend**

- React 19
- Vite
- Tailwind CSS 4
- Redux Toolkit
- React Router
- Axios
- Socket.IO Client
- Framer Motion
- Mermaid, Recharts, React Markdown
- Firebase Authentication

**Backend**

- Node.js
- Express 5
- MongoDB and Mongoose
- Socket.IO
- JWT authentication
- Multer and Cloudinary uploads
- Stripe payments
- Gemini and OpenRouter AI integrations

## Project Structure

```txt
camper/
|-- backend/
|   |-- config/          # Database, Cloudinary, prompt, and token helpers
|   |-- controllers/     # Route handlers for auth, notes, items, chat, credits, interviews
|   |-- middlewares/     # Auth and upload middleware
|   |-- models/          # Mongoose schemas
|   |-- routes/          # Express route modules
|   |-- services/        # AI provider service wrappers
|   |-- index.js         # Backend entry point
|   `-- socket.js        # Socket.IO server setup
|-- frontend/
|   |-- public/
|   |-- src/
|   |   |-- assets/      # Images, videos, and icons
|   |   |-- components/  # Shared UI components
|   |   |-- config/      # API base URL config
|   |   |-- context/     # Theme context
|   |   |-- pages/       # App pages and routes
|   |   |-- redux/       # Redux slices and store
|   |   |-- servers/     # Axios API helpers
|   |   `-- utils/       # Firebase setup
|   `-- vite.config.js
`-- README.md
```

## Getting Started

### Prerequisites

- Node.js 20 or newer recommended
- npm
- MongoDB connection string
- Cloudinary account for uploads
- Firebase project for Google authentication
- Stripe account for credit checkout
- Gemini and OpenRouter API keys for AI features

### 1. Install Dependencies

```bash
cd backend
npm install

cd ../frontend
npm install
```


```

Firebase project details are configured in `frontend/src/utils/firebase.js`; update that file if you use a different Firebase project.

### 4. Run the App Locally

Start the backend:

```bash
cd backend
npm run dev
```

Start the frontend in another terminal:

```bash
cd frontend
npm run dev
```

Open the frontend at:

```txt
http://localhost:5173
```

The backend should respond at:

```txt
http://localhost:4000
```

## Available Scripts

### Frontend

```bash
npm run dev       # Start Vite development server
npm run build     # Create production build
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

### Backend

```bash
npm run dev       # Start backend with nodemon
```

## Main Routes

### Frontend Pages

- `/` - Home
- `/register` and `/login` - Authentication
- `/lost-found` - Lost and found listings
- `/lost-found/add` - Add lost/found item
- `/item/:id` - Lost/found item details
- `/claim-item/:id` - Submit claim request
- `/item/claim-request` - Claim requests
- `/item/myclaim` - User claim history
- `/market` - Campus exchange marketplace
- `/sell/add` - Add marketplace item
- `/sell/:id` - Marketplace item details
- `/chat` - Messages
- `/note` - Generate notes
- `/notes/history` - Notes history
- `/pricing` - Credit plans
- `/ai-interview` - AI interview home
- `/ai-interview/start` - Interview session
- `/ai-interview/history` - Interview history
- `/ai-interview/report/:interviewId` - Interview report
- `/profile` - User profile

### Backend API Groups

- `/api/user` - Authentication, current user, profile, and theme
- `/api/notes` - AI notes generation and saved notes
- `/api/credits` - Stripe credit checkout
- `/api/item` - Lost/found items and claims
- `/api/marketplace` - Marketplace listings
- `/api/message` - Conversations and chat messages
- `/api/interview` - Resume analysis, interview questions, answers, reports
- `/api/credits/webhook` - Stripe webhook endpoint

## Deployment Notes

- Deploy the frontend to Vercel or another static hosting provider.
- Deploy the backend to Render, Railway, Fly.io, or another Node.js host.
- Set `CLIENT_URL` on the backend to the deployed frontend URL.
- Set `VITE_API_URL` on the frontend to the deployed backend URL.
- Add deployed frontend URLs to the backend CORS allowlist in `backend/index.js` and `backend/socket.js`.
- Configure Stripe webhook delivery to point to:

```txt
https://your-backend-domain.com/api/credits/webhook
```

## Author

Built by the IIITDMJ Hub project team.

## License

This project is currently marked as ISC in the backend package metadata. Update this section if you choose a different license for the full repository.
