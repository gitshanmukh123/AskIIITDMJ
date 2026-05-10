export const serverUrl = (
  import.meta.env.VITE_API_URL ||
  (import.meta.env.DEV
    ? "http://localhost:4000"
    : "https://campussync-e49n.onrender.com")
).replace(/\/$/, "");

