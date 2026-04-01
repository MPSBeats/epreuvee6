const express = require("express");
const app = express();
app.get("/health", (req, res) => {
res.json({ status: "UP", service: "vitalsync-api", timestamp: Date.now() });
});
app.get("/api/activities", (req, res) => {
res.json([]);
});
app.listen(3000, () => console.log("VitalSync API Server 1.0 running on port 3000"));
