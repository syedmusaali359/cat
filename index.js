const express = require('express');
const axios = require('axios');

const app = express();
const port = 5000;

app.get('/', async (req, res) => {
  try {
    // Fetch a random cat image URL from an alternative API
    const response = await axios.get('https://api.thecatapi.com/v1/images/search');
    const imageUrl = response.data[0].url;

    // Serve the HTML with the random cat image
    res.send(`<html><body><img src="${imageUrl}" alt="Random Cat Image"></body></html>`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
