const express = require('express');
const app = express();
const PORT = 3000; // Choose an appropriate port

// Middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', require('./routes/index'));
app.use('/seller', require('./routes/seller'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
