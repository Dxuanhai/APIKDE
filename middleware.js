export default function middleware(req, res) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // If it's an OPTIONS request, end the response here
  if (req.method === "OPTIONS") {
    res.end();
    return;
  }

  // Continue with the request
  return true;
}
