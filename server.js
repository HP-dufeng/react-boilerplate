const express = require('express');
const path = require('path');

const app = express();


const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? process.env.PORT : 3000;
const publicPath = path.resolve(__dirname, 'dist');

// Post data to firebase
// eg: POST to localhost:3000/db/items.json 
// and you can find those changes at glowing-carpet-4534.firebaseio.com/db/items
// app.all('/db/*', function (req, res) {
//   proxy.web(req, res, {
//     target: 'https://glowing-carpet-4534.firebaseio.com'
//   });
// });

if (!isProduction) {
  const useWebpackMiddleware = require('./bundle');
  
  useWebpackMiddleware(app);
} else {
  // We point to our static assets
  app.use(express.static(publicPath));

  app.all('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
