const express = require('express');
const axios = require('axios');
const fs = require('fs');

const app = express();
const port = 3000;

app.get('/download', async (req, res) => {
  try {
    const url = req.query.url;
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    
    const fileName = url.split('/').pop();
    fs.writeFileSync(fileName, response.data);
    
    res.status(200).send(File ${fileName} downloaded successfully);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error downloading file');
  }
});

app.listen(port, () => {
  console.log(Server is running on http://localhost:${port});
}); 

// Make sure to install necessary dependencies:
// npm install express axios fs