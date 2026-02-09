export default function handler(req, res) {
  res.status(200).json({
    status: "ok",
    service: "ci-cd-vercel-demo-v5",
    env: process.env.VERCEL_ENV || "local",
    message: process.env.APP_MESSAGE || "Hello from CI/CD 🚀",
    timestamp: new Date().toISOString()
  });
}