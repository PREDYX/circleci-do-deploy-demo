const http = require("http");

const PORT = process.env.PORT || 3000;
const VERSION = process.env.APP_VERSION || "dev";
const ENV = process.env.ENVIRONMENT || "unknown";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({
    status: "ok",
    service: "circleci-do-deploy-demo",
    version: VERSION,
    environment: ENV,
    timestamp: new Date().toISOString()
  }));
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
