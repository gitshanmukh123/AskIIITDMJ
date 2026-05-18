# IIITDMJ Hub / CampusSync - Complete Project Documentation

## Project Structure

```txt
camper/
|-- .gitignore
|-- README.md
|-- README_DETAILED.md
|-- vercel.json
|-- backend/
|   |-- .env
|   |-- .env.example
|   |-- dev-server.err.log
|   |-- dev-server.out.log
|   |-- index.js
|   |-- package.json
|   |-- package-lock.json
|   |-- socket.js
|   |-- config/
|   |   |-- cloudinary.js
|   |   |-- cors.js
|   |   |-- DB.js
|   |   |-- promptBuilder.js
|   |   |-- token.js
|   |-- controllers/
|   |   |-- auth.contollers.js
|   |   |-- credits.controllers.js
|   |   |-- curremtUserController.js
|   |   |-- genrateController.js
|   |   |-- interview.Controllers.js
|   |   |-- ItemControllers.js
|   |   |-- MarketPlace.js
|   |   |-- messageController.js
|   |   |-- notes.controllers.js
|   |-- middlewares/
|   |   |-- isAuth.js
|   |   |-- multer.js
|   |-- models/
|   |   |-- claimed.models.js
|   |   |-- Conversation.model.js
|   |   |-- interview.models.js
|   |   |-- Item.js
|   |   |-- MarketplaceItem.js
|   |   |-- message.model.js
|   |   |-- Notes.Models.js
|   |   |-- User.Models.js
|   |-- routes/
|   |   |-- creditsRoutes.js
|   |   |-- generateRoute.js
|   |   |-- interviewRoute.js
|   |   |-- itemRoutes.js
|   |   |-- MarketRoues.js
|   |   |-- messageRoutes.js
|   |   |-- userRoutes.js
|   |-- services/
|   |   |-- gemini.services.js
|   |   |-- openRouter.services.js
|-- frontend/
|   |-- eslint.config.js
|   |-- eslint.config 2.js
|   |-- index.html
|   |-- package.json
|   |-- package 2.json
|   |-- package-lock.json
|   |-- README.md
|   |-- README 2.md
|   |-- vercel.json
|   |-- vite.config.js
|   |-- vite.config 2.js
|   |-- public/
|   |   |-- vite.svg
|   |   |-- vite 2.svg
|   |-- src/
|   |   |-- App.jsx
|   |   |-- index.css
|   |   |-- main.jsx
|   |   |-- assets/
|   |   |-- components/
|   |   |-- config/
|   |   |-- context/
|   |   |-- pages/
|   |   |-- redux/
|   |   |-- servers/
|   |   |-- utils/
```

Note: `node_modules/`, `.env`, build folders, logs, and lock files are not handwritten application logic. They are still part of the project environment, but the important interview explanation should focus on the source files, configuration files, API routes, models, and UI modules.

## One-Line Project Summary

IIITDMJ Hub is a full-stack MERN-style campus utility platform that combines lost-and-found management, student marketplace listings, real-time chat, AI study-note generation, AI mock interview practice, user authentication, credit-based payments, file uploads, and responsive dark/light themed UI.

## What Problem This Project Solves

College students often need multiple disconnected tools for campus needs: finding lost items, selling used books or electronics, messaging other students, preparing notes, and practicing interviews. This project brings those workflows into one application with authenticated user accounts, structured data storage, real-time communication, AI assistance, and credit-based monetization.

## Core Modules

1. Authentication and user profiles
2. Lost-and-found item posting and claiming
3. Campus marketplace for selling items
4. Real-time one-to-one messaging
5. AI-generated study notes
6. AI mock interview system
7. Stripe-based credit purchase flow
8. Cloudinary file upload support
9. Firebase Google authentication on the frontend
10. Dark/light theme stored per user

## Tech Stack

### Frontend

- React 19 for component-based UI.
- Vite for fast development and build tooling.
- Tailwind CSS 4 for utility-first styling.
- Redux Toolkit for global app state.
- React Router for page navigation.
- Axios for HTTP requests.
- Socket.IO Client for real-time messaging.
- Firebase Authentication for Google login/register.
- Framer Motion for UI animation.
- Lucide React and React Icons for icons.
- React Markdown for rendering AI note content.
- Mermaid for generated diagrams.
- Recharts for generated chart visualizations.
- React Circular Progressbar for interview timers.

### Backend

- Node.js with Express 5 for API development.
- MongoDB with Mongoose for persistence.
- JWT for authentication.
- Cookie Parser for reading auth cookies.
- Bcrypt for password hashing.
- Multer memory storage for file uploads.
- Cloudinary for image/file hosting.
- Socket.IO for live chat.
- Stripe for credit checkout.
- Gemini API for study-note generation.
- OpenRouter API for resume analysis and mock interview evaluation.
- PDF Parse for extracting text from uploaded resumes.

## Important JavaScript And React Syntax Used

### ES Modules

The project uses `"type": "module"` in package files, so imports and exports use modern syntax:

```js
import express from "express";
export default app;
export const isAuth = (req, res, next) => {};
```

### Async/Await

Most database, API, upload, and payment operations are asynchronous:

```js
const user = await UserModel.findById(req.userId);
const res = await axios.get(`${serverUrl}/api/user/current`);
```

This keeps asynchronous code readable and avoids deeply nested promise chains.

### Try/Catch Error Handling

Backend controllers use `try/catch` to return proper HTTP responses if something fails:

```js
try {
  // database or API work
} catch (error) {
  return res.status(500).json({ message: "Server error" });
}
```

### React Functional Components

Every frontend UI file is built with function components:

```jsx
const Home = () => {
  return <main>...</main>;
};

export default Home;
```

### React Hooks

The app uses hooks such as:

- `useState` for local state.
- `useEffect` for lifecycle work like fetching data or opening sockets.
- `useRef` for DOM references and stable values.
- `useMemo` for derived values.
- `useSelector` and `useDispatch` for Redux.
- `useNavigate`, `useParams`, `useLocation` for routing.

### Redux Toolkit Slices

Redux Toolkit simplifies global state by combining action creators and reducers:

```js
const userSlice = createSlice({
  name: "user",
  initialState: { userData: null },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});
```

### FormData Uploads

Image and PDF uploads use `FormData`, allowing the browser to send multipart form data:

```js
const formData = new FormData();
formData.append("image", file);
```

### Mongoose Schemas

The backend defines strict MongoDB document shapes:

```js
const ItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});
```

### JWT Authentication

Login creates a token and stores it in an HTTP-only cookie. Protected routes read and verify that token.

### Socket.IO Events

The app tracks online users and sends messages instantly:

```js
io.emit("getOnlineUsers", Object.keys(userSocketMap));
io.to(receiverSocketId).emit("newMessage", newMessage);
```

## Backend Deep Dive

### backend/index.js

This is the main Express app entry file. It imports environment variables, configures CORS, registers the Stripe webhook route before JSON parsing, enables JSON and URL-encoded body parsing, enables cookies, mounts all API route groups, connects to MongoDB, and exports the Express app.

Important routes mounted here:

- `/api/user`
- `/api/notes`
- `/api/credits`
- `/api/item`
- `/api/marketplace`
- `/api/message`
- `/api/interview`
- `/api/credits/webhook`

The Stripe webhook is placed before `express.json()` because Stripe needs the raw request body to verify the webhook signature.

### backend/socket.js

This file creates a separate HTTP server and attaches Socket.IO to it. It also uses the shared CORS origin validator from `config/cors.js`.

Main responsibilities:

- Create an Express app and HTTP server.
- Create a Socket.IO server.
- Maintain `userSocketMap`, mapping user IDs to socket IDs.
- Emit `getOnlineUsers` when users connect or disconnect.
- Export `getReciverSocketId` so the message controller can emit private messages.

Interview explanation: I used Socket.IO to avoid polling. When a message is created, the backend checks if the receiver is online and pushes the message instantly to that user's socket.

### backend/config/DB.js

Connects to MongoDB using Mongoose. It reads `MONGO_URL` or fallback `MONGOSE_URL` from environment variables. The connection function is called from `index.js`.

### backend/config/cors.js

Centralizes CORS rules for both Express and Socket.IO. It allows local frontend origins and deployed Vercel origins. It also supports environment-based origins through `CLIENT_URL` and `CLIENT_URLS`.

Important syntax:

- `new Set()` removes duplicate origins.
- `new URL(origin)` parses origins safely.
- The `origin(origin, callback)` function is the standard CORS dynamic validation pattern.

### backend/config/cloudinary.js

Configures Cloudinary using credentials from environment variables. It supports two upload modes:

- Memory buffer upload using `upload_stream`, important for serverless platforms.
- Local file path upload, useful if disk-based upload is ever used.

This project currently uses Multer memory storage, so uploaded files are available as `req.file.buffer`.

### backend/config/token.js

Contains `getToken(userId)`, which signs a JWT with the user's ID and a 7-day expiry using `JWT_SECRET`.

### backend/config/promptBuilder.js

Builds the strict Gemini prompt for AI note generation. It instructs Gemini to return valid JSON only, with specific fields such as:

- `subTopics`
- `importance`
- `notes`
- `revisionPoints`
- `questions`
- `diagram`
- `charts`

This file is important because AI output can be unpredictable. The prompt reduces parsing errors by forcing a strict JSON format.

### backend/middlewares/isAuth.js

Authentication middleware. It reads the `token` cookie, verifies it using `JWT_SECRET`, stores `decoded.userId` on `req.userId`, and calls `next()` if authentication succeeds.

Interview explanation: Instead of passing user IDs from the frontend, protected controllers trust `req.userId` from the verified token. This prevents users from pretending to be someone else.

### backend/middlewares/multer.js

Defines Multer with memory storage. This means uploaded images and PDFs are stored in RAM temporarily as buffers, then uploaded to Cloudinary or parsed.

### backend/services/gemini.services.js

Calls the Gemini REST API using `fetch`. It sends a prompt, reads the text response, extracts a JSON object using a regex, parses it with `JSON.parse`, and returns structured data.

Used for study notes.

### backend/services/openRouter.services.js

Calls OpenRouter chat completions using Axios and model `openai/gpt-4o-mini`. It accepts an array of chat messages and returns the assistant content.

Used for:

- Resume analysis
- Interview question generation
- Answer evaluation

## Backend Models

### backend/models/User.Models.js

Stores user account data.

Fields:

- `name`: required string.
- `email`: required and unique.
- `password`: hashed password or `null` for Google accounts.
- `ProfileImage`: Cloudinary URL.
- `credits`: starts at 150.
- `phone`: required string.
- `isCreditAvailable`: boolean flag.
- `theme`: `"light"` or `"dark"`, default `"dark"`.
- `notes`: array of note IDs.
- Timestamps enabled.

Interview explanation: This model supports both traditional password login and Google login by allowing password to be nullable.

### backend/models/Item.js

Stores lost-and-found items.

Fields:

- `title`
- `description`
- `category`
- `type`: `"lost"` or `"found"`
- `location`
- `date`
- `images`
- `status`: `"active"`, `"claimed"`, `"resolved"`, or `"expired"`
- `postedBy`
- `claimedBy`
- `expiryDate`

Indexes:

- Text index on `title`, `description`, `location`.
- Compound index on `category`, `type`, `status`.

### backend/models/claimed.models.js

Stores claim requests for lost-and-found items.

Fields:

- `item`: claimed item ID.
- `postedBy`: owner/poster ID.
- `claimant`: user making the claim.
- `identifyingDetails`: proof or explanation.
- `lostLocation`
- `lostDate`
- `itemImage`
- `status`: pending, approved, rejected.
- `score`: 0 to 100.
- `rejectReason`

The scoring system lets the item owner approve claims with evidence-based scoring.

### backend/models/MarketplaceItem.js

Stores items listed for sale.

Fields:

- `title`
- `description`
- `price`
- `category`
- `condition`
- `images`
- `status`: available, sold, reserved.
- `seller`
- `location`
- `isActive`

Indexes support text search and category/status filtering.

### backend/models/Conversation.model.js

Stores chat conversations with:

- `participants`: user IDs.
- `messages`: message IDs.
- Timestamps.

### backend/models/message.model.js

Stores individual chat messages:

- `sender`
- `receiver`
- `message`
- `image`
- Timestamps.

### backend/models/Notes.Models.js

Stores generated study notes:

- `user`
- `topic`
- `revisionMode`
- `includeDiagram`
- `includeChart`
- `content`
- Timestamps.

The `content` field uses `mongoose.Schema.Types.Mixed` because Gemini returns structured JSON with nested fields.

### backend/models/interview.models.js

Stores mock interview sessions.

Main interview fields:

- `userId`
- `role`
- `experience`
- `mode`: technical or HR.
- `resumeText`
- `questions`
- `finalScore`
- `status`
- Timestamps.

Each question stores:

- `question`
- `difficulty`
- `timeLimit`
- `answer`
- `feedback`
- `score`
- `confidence`
- `communication`
- `correctness`

This makes the report page possible because each answer has detailed evaluation metrics.

## Backend Controllers

### backend/controllers/auth.contollers.js

Handles authentication.

Functions:

- `GoogleRegister`: creates a user from Google account data.
- `GoogleLogin`: logs in an existing Google user.
- `Register`: creates email/password account with bcrypt hashing.
- `login`: validates email/password and creates JWT cookie.
- `logout`: clears the auth cookie.
- `updateTheme`: updates user's dark/light theme preference.

Security points:

- Passwords are hashed with bcrypt.
- JWT is stored in an HTTP-only cookie.
- Cookie uses `secure: true` and `sameSite: "none"` for cross-origin deployment.

### backend/controllers/curremtUserController.js

Handles current user profile operations.

Functions:

- `currentUser`: returns current authenticated user without password.
- `updateProfile`: updates name, phone, and optional profile image.

Image upload flow:

1. Multer receives file.
2. Controller passes `req.file` to Cloudinary helper.
3. Cloudinary secure URL is stored in `ProfileImage`.

### backend/controllers/credits.controllers.js

Handles credit purchase and Stripe webhook logic.

Credit plans:

- Rs. 49 -> 5 credits
- Rs. 99 -> 12 credits
- Rs. 199 -> 30 credits
- Rs. 499 -> 90 credits
- Rs. 999 -> 200 credits

Functions:

- `createCreditsOrder`: creates Stripe Checkout session.
- `stripeWebhook`: verifies Stripe event and adds credits after successful payment.

Important backend concept: Stripe webhook does not trust the frontend. Credits are added only when Stripe confirms `checkout.session.completed` and payment status is `paid`.

### backend/controllers/genrateController.js

Handles AI notes generation.

Flow:

1. Validate topic.
2. Load user from DB.
3. Check user has at least 10 credits.
4. Build strict prompt using `buildPrompt`.
5. Call Gemini service.
6. Save generated note.
7. Attach note to user.
8. Deduct 10 credits.
9. Return note and remaining credits.

### backend/controllers/notes.controllers.js

Handles note history.

Functions:

- `getNotes`: returns note metadata for current user.
- `getSingleNote`: returns full content for one note belonging to current user.

Ownership check: `getSingleNote` searches by both `_id` and `user`, so one user cannot read another user's note.

### backend/controllers/ItemControllers.js

Handles lost-and-found.

Functions:

- `createItem`: creates lost/found post with optional image.
- `updateItem`: allows owner to edit item and optionally add image.
- `deleteItem`: allows owner to delete item.
- `getAllItems`: returns all items with poster information.
- `createClaimRequest`: allows a user to claim an item with evidence.
- `getClaimRequests`: returns claims received by the current user.
- `updateClaimScore`: owner scores a claim and automatically approves/rejects.
- `getMyClaims`: returns claims submitted by the current user.

Important authorization pattern:

```js
if (String(item.postedBy) !== String(userId)) {
  return res.status(403).json({ message: "Not allowed" });
}
```

This protects update and delete operations.

### backend/controllers/MarketPlace.js

Handles marketplace items.

Functions:

- `createMarketplaceItem`
- `getAllMarketplaceItems`
- `getMarketplaceItemById`
- `deleteMarketplaceItem`
- `updateMarketplaceItem`

The list endpoint supports:

- Category filtering
- Status filtering
- Text search
- Seller population

The detail endpoint also returns related items from the same category.

### backend/controllers/messageController.js

Handles chat operations.

Functions:

- `sendMessage`: creates message, updates/creates conversation, emits real-time event.
- `getMessage`: returns messages between current user and selected receiver.
- `getConversations`: returns users with whom the current user has conversations.
- `getAllUsers`: returns all users except the current user.

Real-time flow:

1. Frontend sends message through REST API.
2. Message is stored in MongoDB.
3. Conversation is created or updated.
4. If receiver is online, Socket.IO emits `newMessage`.

### backend/controllers/interview.Controllers.js

Handles AI interview workflow.

Functions:

- `analyzeResume`: accepts PDF, extracts text using `pdf-parse`, asks AI to return role, experience, projects, and skills.
- `generateQuestion`: validates role/experience/mode, checks 50 credits, creates 5 AI-generated questions, and saves interview.
- `submitAnswer`: evaluates one answer using AI and stores feedback plus numeric metrics.
- `finishInterview`: calculates final score and marks interview complete.
- `getMyInterviews`: returns user's interview history.
- `getInterviewReport`: returns one interview report if it belongs to the current user.

AI JSON parsing strategy:

- Remove Markdown code fences.
- Try `JSON.parse`.
- If parsing fails, extract the first `{ ... }` block and parse again.

Interview explanation: This makes the AI integration more robust because LLMs sometimes wrap JSON inside Markdown code blocks.

## Backend Routes

### backend/routes/userRoutes.js

Base path: `/api/user`

- `POST /google-register`
- `POST /google-login`
- `POST /register`
- `POST /login`
- `POST /logout`
- `GET /current`
- `PUT /profile`
- `PUT /theme`

### backend/routes/generateRoute.js

Base path: `/api/notes`

- `POST /generate-notes`
- `GET /getnotes`
- `GET /:id`

### backend/routes/creditsRoutes.js

Base path: `/api/credits`

- `POST /create-order`

Webhook path is registered directly in `index.js`:

- `POST /api/credits/webhook`

### backend/routes/itemRoutes.js

Base path: `/api/item`

- `POST /add`
- `GET /getAll`
- `PUT /:id`
- `DELETE /:id`
- `POST /claim/:id`
- `GET /claimed-request`
- `PATCH /claim/:id/score`
- `GET /claim/my`

### backend/routes/MarketRoues.js

Base path: `/api/marketplace`

- `GET /`
- `GET /:id`
- `POST /create`
- `DELETE /:id`
- `PUT /:id`

### backend/routes/messageRoutes.js

Base path: `/api/message`

- `POST /send/:receiver`
- `GET /get/:receiver`
- `GET /conversations`
- `GET /allusers`

### backend/routes/interviewRoute.js

Base path: `/api/interview`

- `POST /resume`
- `POST /generate-questions`
- `POST /submit-answer`
- `POST /finish`
- `GET /my-interviews`
- `GET /report/:interviewId`

## Frontend Deep Dive

### frontend/src/main.jsx

The React entry point. It renders the application into the `#root` element. It wraps the app with:

- `BrowserRouter` for routing.
- Redux `Provider` for global store access.
- `ThemeProvider` for dark/light theme context.
- `StrictMode` for development checks.

It also re-exports `serverUrl` from the API config.

### frontend/src/App.jsx

The main routing component.

Responsibilities:

- Fetch current user on app load.
- Open Socket.IO connection when user is logged in.
- Store socket and online users in Redux.
- Render shared `Navbar`, `Footer`, and `FloatingActions`.
- Define all frontend routes.
- Apply dark/light page background.

Major routes:

- `/`: home
- `/register`, `/login`: auth
- `/lost-found`: lost/found listing
- `/lost-found/add`: add item
- `/item/:id`: lost/found detail
- `/claim-item/:id`: submit claim
- `/item/claim-request`: received claims
- `/item/myclaim`: submitted claims
- `/market` and `/sell`: marketplace
- `/sell/add`: add marketplace item
- `/sell/:id`: marketplace item detail
- `/profile`: profile
- `/chat`: messages
- `/note`: AI notes
- `/notes/history`: notes history
- `/pricing`: credits
- `/ai-interview`: interview landing
- `/ai-interview/start`: interview session
- `/ai-interview/history`: interview history
- `/ai-interview/report/:interviewId`: report

### frontend/src/index.css

Imports Tailwind CSS:

```css
@import "tailwindcss";
```

This enables Tailwind utility classes throughout the React components.

### frontend/src/config/api.js

Computes the backend API base URL.

Logic:

- Use `VITE_API_URL` if provided.
- In development, default to `http://localhost:4000`.
- In production, default to the Render backend URL.
- If deployed under the special Vercel experimental services path, append `/_/backend`.

### frontend/src/context/ThemeContext.jsx

Provides app-wide theme state.

Responsibilities:

- Read user's saved theme from Redux.
- Maintain `isDark`.
- Toggle the HTML `dark` class.
- Send theme updates to `/api/user/theme`.
- Update Redux after successful theme update.

Important note: The initial `useState(theme === "light")` appears inconsistent with the later effect `setIsDark(theme === "dark")`; the effect corrects the state after render.

### frontend/src/utils/firebase.js

Initializes Firebase app and exports:

- `app`
- `auth`
- `provider`

Used by login and signup pages for Google authentication.

### frontend/src/servers/api.js

Centralized frontend API helper file.

Exports:

- `getCurrentuser`
- `updateProfile`
- `deleteProfileImage`
- `generateNotes`
- `fetchItems`
- `deleteItem`
- `updateItem`
- `fetchClaimRequests`
- `fetchMyClaims`
- `fetchExchangeItems`
- `deleteExchangeItem`
- `updateExchangeItem`
- `fetchExchangeItemById`
- `fetchMessages`
- `fetchConversationUsers`
- `fetchAllUsers`
- `fatchMessage` alias

It sets Axios defaults:

```js
axios.defaults.baseURL = serverUrl;
axios.defaults.withCredentials = true;
```

This is important because backend authentication uses cookies.

## Frontend Redux Files

### frontend/src/redux/store.js

Combines Redux slices:

- `user`
- `item`
- `claim`
- `marketplace`
- `message`

### frontend/src/redux/userSlice.js

Stores authenticated user data.

Reducers:

- `setUserData`
- `updateCreadits`

Note: `updateCreadits` has a spelling typo, but it is consistently used.

### frontend/src/redux/itemSlice.js

Stores lost-and-found item list in `itemData`.

### frontend/src/redux/claimSlice.js

Stores:

- `claimData`: claims received on user's posts.
- `myClaimData`: claims submitted by the user.

### frontend/src/redux/marketplaceSlice.js

Stores marketplace list and loading state.

Reducers:

- `setExchangeItems`
- `setExchangeLoading`

### frontend/src/redux/messageSlice.js

Stores chat state:

- `messages`
- `selectedUser`
- `conversationUsers`
- `allUsers`
- `onlineUsers`
- `socket`

This slice makes chat state available to the sidebar and message panel.

## Frontend Pages

### frontend/src/pages/Home.jsx

Composes the landing/home experience using homepage sections such as hero, features, how-it-works, testimonials, and call-to-action components.

### frontend/src/pages/About.jsx

Professional about page explaining the platform mission, values, and feature benefits. Uses theme-aware styling and animated cards.

### frontend/src/pages/Contact.jsx

Contact page with contact information cards and a styled contact form UI.

### frontend/src/pages/SignUp.jsx

Registration page.

Features:

- Name, email, phone, password form.
- Password visibility toggle.
- Google signup through Firebase popup.
- Backend registration through `/api/user/register` or `/api/user/google-register`.
- Redux user state update after success.

### frontend/src/pages/Login.jsx

Login page.

Features:

- Email/password login.
- Google login through Firebase popup.
- Error handling through toast notifications.
- Redux user update after successful login.

### frontend/src/pages/Profile.jsx

User profile page.

Features:

- Display user name, email, phone, credits, and profile image.
- Edit name and phone.
- Upload profile image using FormData.
- Delete profile image UI path exists, but the backend route for deleting profile image is not currently defined.
- Navigation cards for user content.

### frontend/src/pages/LostAndFound.jsx

Lost-and-found listing page.

Features:

- Fetches item data.
- Search and filter UI.
- Displays lost/found cards.
- Lets users navigate to detail pages.
- Owner-aware claim behavior.

### frontend/src/pages/AddItemForm.jsx

Form to create lost or found item.

Fields:

- Type: lost/found.
- Title.
- Category.
- Location.
- Date.
- Description.
- Optional image.

Submits FormData to `/api/item/add`.

### frontend/src/pages/itemDetailPage.jsx

Lost/found detail page.

Features:

- Loads item by ID from Redux list.
- Shows metadata such as category, location, date, type, and status.
- Provides contact by email.
- Allows navigation to claim form.
- Shows related items.

### frontend/src/pages/ClaimItemForm.jsx

Claim request form.

Fields:

- Identifying details.
- Lost location.
- Lost date.
- Optional item image.

Submits claim evidence to `/api/item/claim/:id`.

### frontend/src/pages/ClaimRequestPages.jsx

Shows claim requests received by the current user.

Features:

- Fetches claim requests.
- Allows owner to enter a score.
- If score is 60 or above, backend marks claim as approved.
- If below 60, backend marks it rejected and can store reject reason.

### frontend/src/pages/MyClaim.jsx

Shows claims submitted by the current user. It displays status, posted item, owner information, and available contact actions.

### frontend/src/pages/SellLostAndFoundPostedItem.jsx

Dashboard for the current user's own lost/found posts.

Features:

- Filters items by `postedBy`.
- Edit item fields.
- Delete item.
- Navigate to item details.

### frontend/src/pages/MarketPlace.jsx

Marketplace listing page, also imported as `Exchange`.

Features:

- Fetches marketplace items.
- Category and search filters.
- Item cards with price, condition, seller, and status.
- Navigation to sell item form or detail page.

### frontend/src/pages/AddSellItem.jsx

Form to create a marketplace listing.

Fields:

- Title.
- Description.
- Price.
- Category.
- Condition.
- Location.
- Up to 5 images.

Submits FormData to `/api/marketplace/create`.

### frontend/src/pages/MarketItemDetailPage.jsx

Marketplace detail page.

Features:

- Fetches item by ID.
- Shows image gallery and item metadata.
- Shows related marketplace items.
- Provides seller contact actions.

### frontend/src/pages/UserSellPost.jsx

Dashboard for current user's marketplace posts.

Features:

- Filters marketplace items by current seller.
- Edit listing fields.
- Delete listing.
- Navigate to details.

### frontend/src/pages/Chat.jsx

Wrapper page for messaging. It renders message sidebar and chat panel layout.

### frontend/src/pages/MessagePage.jsx

Minimal placeholder-style message page. The main production chat flow appears to use `Chat.jsx`, `MessageSideBar.jsx`, and `ChatMessages.jsx`.

### frontend/src/pages/StudyHome.jsx

Study section landing page. Renders `ExamNavbar` and `HeroExam`.

### frontend/src/pages/Notes.jsx

AI note generation page.

Features:

- Uses `TopicForm` for input.
- Uses `FinalResult`, `Sidebar`, `MermaidSetup`, and `RechartSetUp` to render generated structured output.
- Has history navigation.

### frontend/src/pages/History.jsx

AI note history page.

Features:

- Fetches notes metadata.
- Fetches a selected full note.
- Responsive mobile sidebar behavior.
- Renders stored AI content.

### frontend/src/pages/Priceing.jsx

Credit pricing page.

Features:

- Displays credit plans.
- Calls `/api/credits/create-order`.
- Redirects user to Stripe Checkout session URL.

Note: File name has a spelling typo, but route and import use it consistently.

### frontend/src/pages/PaymentSuccess.jsx

Payment success page shown after Stripe checkout.

### frontend/src/pages/PaymentFailed.jsx

Payment failure/cancel page shown when Stripe checkout is cancelled.

### frontend/src/pages/AiInterviewPages/AiInterviewHome.jsx

AI interview landing page. Uses AI interview navbar, hero section, and steps section.

### frontend/src/pages/AiInterviewPages/InterviewPage.jsx

Controls the interview flow.

Stages:

1. Setup/resume upload through `Step1SetUp`.
2. Live interview through `Step2Interview`.
3. Navigate to report after finish.

### frontend/src/pages/AiInterviewPages/InterviewHistory.jsx

Fetches and displays the user's previous interview sessions. Lets user open individual reports.

### frontend/src/pages/AiInterviewPages/InterviewReport.jsx

Detailed interview report page.

Features:

- Fetches report by interview ID.
- Shows final score.
- Calculates average confidence, communication, and correctness.
- Uses Recharts for score visualization.
- Displays question-wise feedback.
- Shows motivational message based on score.

## Frontend Components

### frontend/src/components/Navbar.jsx

Main app navigation.

Responsibilities:

- Navigation links.
- User dropdown.
- Logout.
- Theme toggle.
- Notifications UI.
- Responsive mobile menu.
- Credit display.

### frontend/src/components/Footer.jsx

Site footer with navigation columns and social links.

### frontend/src/components/FloatingActions.jsx

Floating quick-action buttons based on current route. Useful for fast navigation to common workflows.

### frontend/src/components/HeroSlider.jsx

Home page image/video hero slider with timed slide changes and navigation actions.

### frontend/src/components/CampusFeatures.jsx

Feature cards for the campus platform.

### frontend/src/components/HowItWorks.jsx

Step-by-step explanation section for how users interact with the app.

### frontend/src/components/WhyChooseCampusSync.jsx

Benefit section explaining why the platform is useful.

### frontend/src/components/Testimonials.jsx

Static testimonial UI section.

### frontend/src/components/JoinCTA.jsx

Call-to-action section encouraging users to join/use the platform.

### frontend/src/components/LostItemCard.jsx

Reusable lost/found card component. Displays item image, title, type, location, and status.

### frontend/src/components/ExamNavbar.jsx

Special navbar for study materials and notes pages. Shows user credits and quick navigation.

### frontend/src/components/HeroExam.jsx

Hero section for study material/AI notes module.

### frontend/src/components/TopicForm.jsx

Input form for generating AI notes.

Fields:

- Topic.
- Class level.
- Exam type.
- Revision mode.
- Include diagram.
- Include chart.

It calls `generateNotes`, updates credits in Redux, and controls progress UI.

### frontend/src/components/FinalResult.jsx

Renders generated AI notes.

Features:

- Markdown rendering.
- Important topic sections.
- Revision points.
- Questions.
- Copy and download actions.

### frontend/src/components/Sidebar.jsx

Displays generated note summary/navigation sections.

### frontend/src/components/MermaidSetup.jsx

Renders Mermaid diagrams.

Extra robustness:

- Cleans Mermaid syntax.
- Attempts to fix bad node labels.
- Renders generated SVG into the DOM.

### frontend/src/components/RechartSetUp.jsx

Renders AI-generated chart data using Recharts. Supports chart types like bar, line, and pie.

### frontend/src/components/MessageSideBar.jsx

Messaging sidebar.

Features:

- Conversation list.
- All users list.
- Online user filtering.
- Search users.
- Select chat target.

### frontend/src/components/ChatMessages.jsx

Main chat panel.

Features:

- Fetch selected user's messages.
- Listen for Socket.IO `newMessage`.
- Send text messages.
- Send image messages.
- Emoji picker support.
- Auto-scroll to newest message.
- Show online status.

### frontend/src/components/SenderMessage.jsx

Small UI component for current user's outgoing messages.

### frontend/src/components/ReceiverMessage.jsx

Small UI component for incoming messages.

### frontend/src/components/AiInterview/AiInterviewNavbar.jsx

Special navbar for AI interview pages with credits and navigation.

### frontend/src/components/AiInterview/AiInterviewHeroSection.jsx

AI interview landing hero section. Uses video asset and navigation to start interview.

### frontend/src/components/AiInterview/AiInterviewSteps.jsx

Explains the AI interview workflow using step cards and supporting assets.

### frontend/src/components/AiInterview/Step1SetUp.jsx

Interview setup form.

Features:

- Resume upload.
- PDF validation.
- Resume analysis request.
- Auto-fill role, skills, projects, experience.
- Mode selection.
- Question generation.
- Credit update after question generation.

### frontend/src/components/AiInterview/Step2Interview.jsx

Live interview component.

Features:

- Displays question one by one.
- Speaks questions using Web Speech API.
- Uses browser speech recognition for answers.
- Timer per question.
- Allows manual answer submission.
- Sends each answer for AI evaluation.
- Calls finish endpoint at the end.

Browser APIs used:

- `window.speechSynthesis`
- `SpeechSynthesisUtterance`
- `window.SpeechRecognition` or `window.webkitSpeechRecognition`

### frontend/src/components/AiInterview/Timer.jsx

Circular countdown timer using `react-circular-progressbar`. Color changes based on remaining time.

## Assets

### frontend/src/assets/ai-ans.png

Image used in AI interview/answer explanation sections.

### frontend/src/assets/ai1.png

Large AI-themed image asset used in AI-related UI sections.

### frontend/src/assets/aiImage.png

AI visual asset for study/interview content.

### frontend/src/assets/Ailogo.png

Logo used for AI interview section branding.

### frontend/src/assets/aiVideo.mp4

Video used in the AI interview hero section.

### frontend/src/assets/Book.jpg

Study/book visual asset.

### frontend/src/assets/favicon.png

Browser favicon referenced from `index.html`.

### frontend/src/assets/female.mp4

Female interviewer video used in the interview experience.

### frontend/src/assets/history.png

Visual used for history-related AI interview/study sections.

### frontend/src/assets/img1.png

General platform image asset.

### frontend/src/assets/logo.png

Main application logo image.

### frontend/src/assets/LostAndFound.jpg

Lost-and-found feature image.

### frontend/src/assets/male.mp4

Male interviewer video used in interview experience.

### frontend/src/assets/pdf.png

PDF/resume visual used in interview setup steps.

### frontend/src/assets/react.svg

Default React/Vite template asset. It is not core to the product.

### frontend/src/assets/resume.png

Resume-related image used in AI interview workflow.

### frontend/src/assets/Study.jpg

Study-material visual asset.

## Root And Frontend Config Files

### .gitignore

Prevents committing generated or sensitive files:

- `node_modules/`
- `.env`
- `.env.local`
- logs
- build outputs
- IDE folders

### README.md

Current concise project README.

### README_DETAILED.md

This generated professional documentation file.

### vercel.json

Configures Vercel experimental services:

- Frontend service from `frontend`.
- Backend service from `backend`.
- Backend route prefix `/_/backend`.

### frontend/package.json

Defines frontend scripts and dependencies.

Scripts:

- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run preview`

### frontend/package 2.json

Duplicate/older frontend package file. It is similar to `package.json`, but missing some newer dependencies such as emoji picker and socket client versions. It should not be the main source of truth.

### frontend/package-lock.json

Generated lock file that pins exact installed frontend dependency versions.

### frontend/vite.config.js

Vite configuration.

Important settings:

- React plugin.
- Tailwind Vite plugin.
- Base path `/`.
- Dev server on port 3000 and host `localhost`.

### frontend/vite.config 2.js

Duplicate/older Vite config with only React and Tailwind plugins. The main config is `vite.config.js`.

### frontend/eslint.config.js

ESLint config for JS/JSX files. Uses:

- `@eslint/js`
- React Hooks plugin
- React Refresh plugin
- Browser globals

It enforces `no-unused-vars`, while ignoring variables matching uppercase patterns.

### frontend/eslint.config 2.js

Duplicate/older ESLint config. It appears equivalent to the main ESLint file.

### frontend/index.html

HTML shell for the React app.

Important pieces:

- Sets favicon.
- Sets page title to `IIITDMJ Hub`.
- Defines `<div id="root"></div>`.
- Loads `/src/main.jsx`.

### frontend/vercel.json

Same experimental services deployment config as root `vercel.json`.

### frontend/README.md and frontend/README 2.md

Default Vite template README files. They explain React/Vite basics, not the actual IIITDMJ Hub business logic.

### frontend/public/vite.svg and frontend/public/vite 2.svg

Default Vite logo assets. They are not core product assets.

## Backend Environment Variables

The backend expects environment variables such as:

- `MONGO_URL` or `MONGOSE_URL`
- `JWT_SECRET`
- `CLIENT_URL`
- `CLIENT_URLS`
- `CLOUD_NAME`
- `CLOUD_API_KEY`
- `CLOUD_API_SECRET`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `GEMINI_API_KEY`
- `OPENROUTER_API_KEY`

The frontend expects:

- `VITE_API_URL`
- `VITE_API_KEY` for Firebase

Never commit real `.env` secrets.

## How Data Flows Through The App

### Login Flow

1. User enters email/password or uses Google.
2. Frontend sends request to backend.
3. Backend validates user.
4. Backend signs JWT.
5. JWT is stored in HTTP-only cookie.
6. Frontend calls `/api/user/current`.
7. Redux stores user data.

### Lost-And-Found Flow

1. User creates lost/found post.
2. Image is uploaded to backend through FormData.
3. Backend uploads image to Cloudinary.
4. Item is stored in MongoDB.
5. Other users browse items.
6. A user submits claim evidence.
7. Item owner scores the claim.
8. Claim becomes approved or rejected.

### Marketplace Flow

1. Seller creates item listing.
2. Up to 5 images are uploaded to Cloudinary.
3. Listing is stored in MongoDB.
4. Buyers browse, filter, search, and open details.
5. Buyer contacts seller through email or chat.

### Chat Flow

1. User logs in.
2. Frontend opens Socket.IO connection with user ID.
3. Backend records user ID to socket ID.
4. Sender posts message through REST API.
5. Backend stores message and conversation.
6. Backend emits `newMessage` to receiver socket if online.
7. Receiver UI updates instantly.

### AI Notes Flow

1. User enters topic and options.
2. Backend checks credits.
3. Prompt builder creates strict JSON prompt.
4. Gemini generates structured notes.
5. Backend parses and stores result.
6. Credits are deducted.
7. Frontend renders markdown, diagram, chart, and revision content.

### AI Interview Flow

1. User uploads PDF resume.
2. Backend extracts resume text.
3. OpenRouter AI extracts role, experience, projects, and skills.
4. User selects role/experience/mode and generates questions.
5. Backend deducts 50 credits and saves interview.
6. Frontend asks questions with speech synthesis and timer.
7. User answers by speech recognition or text.
8. Backend evaluates each answer with AI.
9. Backend calculates final report.
10. Frontend displays score, metrics, charts, and feedback.

### Credit Purchase Flow

1. User selects a credit plan.
2. Backend creates Stripe Checkout session.
3. Frontend redirects to Stripe.
4. Stripe calls backend webhook after payment.
5. Backend verifies signature.
6. Backend increments user credits.

## Strengths To Highlight In Interviews

- Built a complete full-stack application, not just UI screens.
- Implemented cookie-based JWT authentication.
- Supported both email/password and Google authentication.
- Designed Mongoose schemas with references, enums, indexes, and timestamps.
- Integrated Cloudinary file uploads using Multer memory storage.
- Built real-time chat using Socket.IO.
- Added AI note generation with structured JSON output, Mermaid diagrams, and chart rendering.
- Added AI mock interview workflow with resume parsing, question generation, answer scoring, and report analytics.
- Implemented Stripe Checkout and webhook-based credit updates.
- Used Redux Toolkit for global state management.
- Used React Router for multi-page frontend architecture.
- Created protected backend routes with middleware.
- Handled deployment concerns with CORS, environment variables, and Vercel backend prefixing.

## Interview Explanation Script

You can explain the project like this:

> My project is IIITDMJ Hub, a full-stack campus utility platform built using React, Node.js, Express, MongoDB, Socket.IO, Stripe, Cloudinary, Firebase, and AI APIs. The goal was to combine common student workflows such as lost-and-found, campus marketplace, real-time messaging, study-note generation, and mock interview practice in one authenticated platform.

Then continue:

> On the frontend, I used React with Vite and Tailwind CSS. Routing is handled with React Router, and global state is managed with Redux Toolkit. User data, marketplace data, lost-and-found data, claim requests, messages, sockets, and online users are stored in Redux slices. The app also supports dark and light themes, which are saved to the backend per user.

Then backend:

> On the backend, I built an Express API connected to MongoDB using Mongoose. I separated the backend into routes, controllers, models, middlewares, config files, and services. Authentication is done using JWT stored in HTTP-only cookies. Protected routes use middleware that verifies the token and attaches the user ID to the request.

Then real-time:

> For chat, I used Socket.IO. When a user logs in, the frontend opens a socket connection and sends the user ID in the query. The backend stores a mapping of user IDs to socket IDs. When a message is sent, it is saved in MongoDB and also emitted in real time to the receiver if they are online.

Then AI:

> For AI notes, the backend builds a strict JSON prompt and calls Gemini. The response is parsed and stored as a note. The frontend renders the result using Markdown, Mermaid diagrams, and Recharts. For AI interviews, the backend parses PDF resumes, uses AI to generate role-specific questions, evaluates answers, stores question-wise scores, and creates a final report.

Then payments:

> I implemented a credit system with Stripe Checkout. The frontend asks the backend to create a checkout session. Credits are not added directly from the frontend. Instead, the backend verifies the Stripe webhook and only then increments the user's credits. This makes the payment flow safer.

Then finish:

> Overall, the project shows my ability to design full-stack architecture, integrate third-party services, manage authentication and authorization, work with real-time systems, handle file uploads, build AI-powered features, and create a polished user experience.

## Common Interview Questions And Answers

### Why did you use Redux Toolkit?

I used Redux Toolkit because the application has shared state across many pages: logged-in user data, credits, item lists, marketplace listings, claim requests, chat messages, online users, and socket instance. Redux Toolkit reduces boilerplate by using slices and makes state updates predictable.

### Why use HTTP-only cookies for JWT?

HTTP-only cookies cannot be accessed directly by JavaScript, which reduces the risk of token theft through XSS. Since the frontend and backend can be on different domains, the app uses `withCredentials: true` on Axios and secure cookie options on the backend.

### How do you protect private routes?

On the backend, protected routes use `isAuth` middleware. It verifies the JWT from cookies and attaches `req.userId`. Controllers then use `req.userId` for ownership checks and user-specific queries.

### How did you handle file uploads?

The frontend sends files using `FormData`. The backend uses Multer memory storage, so files arrive as buffers. Images are uploaded to Cloudinary, and the returned secure URL is saved in MongoDB.

### Why use Multer memory storage?

Memory storage works well in serverless deployments because it does not rely on persistent local disk. It also allows direct upload streams to Cloudinary.

### How does real-time chat work?

REST APIs are used to store messages reliably, and Socket.IO is used for real-time delivery. This combines database persistence with instant UI updates.

### How did you prevent users from editing other users' posts?

Update and delete controllers compare the logged-in user ID from the token with the owner ID stored on the item. If they do not match, the backend returns a 403 response.

### How does the credit system work?

Users start with credits. AI notes deduct 10 credits. AI interview question generation deducts 50 credits. Users can buy more credits through Stripe plans. Stripe webhooks confirm payment before credits are added.

### How do AI notes stay structured?

The backend prompt explicitly tells Gemini to return valid JSON only. The service extracts the JSON object, parses it, and returns structured content to the frontend.

### How does the AI interview report work?

Each answer is evaluated by AI and receives score, confidence, communication, correctness, and feedback. These values are saved inside the interview document. The final report aggregates those metrics and displays visual feedback.

### What was the most challenging part?

The hardest part was combining multiple advanced flows in one platform: real-time chat, AI responses, file uploads, authentication, Stripe webhooks, and user-specific authorization. Each service has different failure cases, so I separated logic into controllers, services, models, and config files to keep the code maintainable.

### What would you improve next?

I would add automated tests, stronger input validation, route-level frontend protection for authenticated-only pages, better admin moderation, message read receipts, image deletion from Cloudinary, and TypeScript for stronger type safety.

## Professional Resume Points

- Developed a full-stack campus utility platform using React, Node.js, Express, MongoDB, and Socket.IO.
- Implemented JWT authentication with HTTP-only cookies and Google login using Firebase Authentication.
- Designed MongoDB schemas for users, lost-and-found items, marketplace listings, claims, notes, conversations, messages, and interviews.
- Integrated Cloudinary for secure image uploads using Multer memory storage.
- Built real-time one-to-one chat with online user tracking using Socket.IO.
- Integrated Gemini API for structured AI study-note generation with Markdown, Mermaid, and Recharts rendering.
- Built an AI mock interview module with PDF resume parsing, AI question generation, answer scoring, and report analytics.
- Implemented Stripe Checkout and webhook-based credit purchase system.
- Managed global frontend state using Redux Toolkit and modular API helpers.
- Configured deployment-ready CORS, environment variables, and Vercel experimental services.

## Suggested Project Explanation In 60 Seconds

IIITDMJ Hub is a MERN-style campus platform that solves multiple student problems in one place. Students can post lost or found items, submit claim requests, sell used products in a campus marketplace, chat with other users in real time, generate AI study notes, and practice AI mock interviews. I built the frontend with React, Vite, Tailwind, Redux Toolkit, and React Router. The backend uses Express, MongoDB, Mongoose, JWT authentication, Cloudinary uploads, Socket.IO, Stripe, Gemini, and OpenRouter. The architecture is modular, with separate routes, controllers, models, middleware, services, and config files. The most technically interesting parts are secure cookie-based authentication, real-time chat with socket user mapping, AI-generated structured content, PDF resume parsing, answer evaluation, and webhook-based credit updates.

## Suggested Project Explanation In 3 Minutes

IIITDMJ Hub is a full-stack campus utility platform designed for students. The platform has five major feature areas: lost-and-found, campus marketplace, real-time chat, AI study notes, and AI mock interviews.

The frontend is built in React with Vite and Tailwind CSS. I used React Router for routing and Redux Toolkit for shared state. The main app component fetches the current user, manages socket connection setup, and defines all routes. The UI is broken into reusable components such as navbar, footer, item cards, chat sidebar, chat messages, AI note result renderer, Mermaid diagram renderer, Recharts setup, and AI interview components. The app also supports user-specific dark and light theme preferences.

The backend is built with Express and MongoDB. I used Mongoose models for users, items, claims, marketplace listings, conversations, messages, notes, and interviews. Authentication uses JWT stored in HTTP-only cookies. Protected routes use middleware to verify the token and attach the user ID to the request. This user ID is used for ownership checks, for example when updating or deleting posts.

For lost-and-found, users can post an item with an image, browse listings, submit claim evidence, and owners can score claims. For marketplace, users can create listings with multiple images, browse and filter items, and contact sellers. File uploads use Multer memory storage and Cloudinary.

For chat, I used Socket.IO. The backend maps user IDs to socket IDs. Messages are saved to MongoDB, and if the receiver is online, the backend emits the new message instantly.

For AI notes, the backend builds a strict JSON prompt and sends it to Gemini. The frontend renders the generated notes with Markdown, Mermaid diagrams, and charts. For AI interviews, users upload a PDF resume, the backend extracts text, AI analyzes the resume, generates questions, evaluates answers, and stores a detailed report with score, confidence, communication, and correctness metrics.

For monetization, I implemented a credit system using Stripe Checkout. The frontend redirects users to Stripe, and credits are added only after backend webhook verification. This prevents fake credit updates from the client side.

This project demonstrates full-stack architecture, authentication, authorization, real-time systems, third-party API integration, AI workflows, payment integration, and responsive UI development.

## Known Issues Or Improvement Areas

- `auth.contollers.js`, `curremtUserController.js`, `genrateController.js`, `MarketRoues.js`, and `Priceing.jsx` contain spelling mistakes in file names. They work because imports match, but renaming would improve professionalism.
- `deleteProfileImage` exists in the frontend API helper, but the backend route for profile image deletion is not currently defined.
- Several duplicate files exist: `package 2.json`, `vite.config 2.js`, `eslint.config 2.js`, `README 2.md`, and `vite 2.svg`.
- Some old commented code remains in `messageController.js` and `firebase.js`.
- Automated tests are not present.
- Frontend route protection could be stricter for authenticated-only pages.
- Environment validation could be improved with a library like Zod or Joi.
- TypeScript could improve maintainability.
- More granular loading and error states could be added.

## Final Interview Closing Statement

This project is strong because it is not a simple CRUD app. It combines CRUD, authentication, authorization, file uploads, real-time communication, AI integrations, payments, data visualization, speech APIs, and deployment configuration. It shows practical engineering ability across frontend, backend, database design, external APIs, and user experience.

