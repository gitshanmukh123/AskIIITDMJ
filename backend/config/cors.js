import cors from "cors";

const baseAllowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://ask-iiitdmj.vercel.app",
  "https://ask-iiitdmj-jsal2xics-shanmukhs-projects-133c54ba.vercel.app",
];

const envAllowedOrigins = [
  process.env.CLIENT_URL,
  ...(process.env.CLIENT_URLS || "").split(","),
]
  .map((origin) => origin && origin.trim())
  .filter(Boolean);

export const allowedOrigins = [
  ...new Set([...baseAllowedOrigins, ...envAllowedOrigins]),
];

export const isAllowedOrigin = (origin) => {
  if (!origin) return true;
  if (allowedOrigins.includes(origin)) return true;

  try {
    const { hostname, protocol } = new URL(origin);

    return (
      protocol === "https:" &&
      hostname.endsWith(".vercel.app") &&
      (hostname === "ask-iiitdmj.vercel.app" ||
        hostname.startsWith("ask-iiitdmj-"))
    );
  } catch {
    return false;
  }
};

const corsOptions = {
  origin(origin, callback) {
    if (isAllowedOrigin(origin)) {
      callback(null, true);
      return;
    }

    callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

export default cors(corsOptions);
