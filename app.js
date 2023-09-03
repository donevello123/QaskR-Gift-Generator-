app.get('/', (req, res) => {
    // This function will be executed when a GET request is made to '/'
    // You can render an EJS template or send back HTML here
    res.render('index'); // Assuming 'index.ejs' is your template file
  });

  app.post('/', (req, res) => {
    // This function will be executed when a POST request is made to '/'
    // You can access submitted data using req.body
    // Process the submitted data and save it to the server
    // Then, redirect or render a response
    res.redirect('/'); // Redirect back to the home page
  });