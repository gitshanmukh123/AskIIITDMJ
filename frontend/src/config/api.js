const rawServerUrl = (
  import.meta.env.VITE_API_URL ||
  (import.meta.env.DEV
    ? "http://localhost:4000"
    : "https://campussync-e49n.onrender.com")
).replace(/\/$/, "");

const withVercelBackendPrefix = (url) => {
  try {
    const parsedUrl = new URL(url);
    const usesAskIiITDmjVercel =
      parsedUrl.hostname === "ask-iiitdmj.vercel.app" ||
      parsedUrl.hostname.startsWith("ask-iiitdmj-");

    if (usesAskIiITDmjVercel && !parsedUrl.pathname.startsWith("/_/backend")) {
      parsedUrl.pathname = `${parsedUrl.pathname.replace(/\/$/, "")}/_/backend`;
      return parsedUrl.toString().replace(/\/$/, "");
    }
  } catch {
    return url;
  }

  return url;
};

export const serverUrl = withVercelBackendPrefix(rawServerUrl);
