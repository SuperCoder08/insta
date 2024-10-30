const express = require("express");
const app = express();
const ig = require("ig-unduh");

// Bosh sahifa
app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

// Instagram yuklab olish URL
app.get("/ig", (req, res) => {
  let link = req.query.url;

  // URL ni tekshirish
  if (!link) {
    return res.status(400).json({ error: "URL is required" });
  }

  ig(link)
    .then(result => {
      res.json(result);
      console.log(result);
    })
    .catch(err => {
      console.error("Error:", err);
      res.status(500).json({ error: "Error fetching data from Instagram" });
    });
});

// Serverni boshlash
app.listen(4100, () => {
  console.log("Server running on http://localhost:4100/");
});
