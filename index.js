   const express = require("express");
   const app = express();
   const ig = require("ig-unduh");

   // Root endpoint
   app.get("/", (req, res) => {
       res.send("<h1>Hello</h1>");
   });

   // Instagram downloader endpoint
   app.get("/ig", async (req, res) => {
       const link = req.query.url;

       if (!link) {
           return res.status(400).json({ error: "URL parameter is required." });
       }

       try {
           const result = await ig(link);
           res.json(result);
           console.log(result);
       } catch (err) {
           console.error("Error:", err);
           res.status(500).json({ error: "Failed to download content." });
       }
   });

   // Start server
   const PORT = 4100;
   app.listen(PORT, () => {
       console.log(`Server running on port ${PORT}...`);
   });
   