import express from 'express';


const app = express();

app.route('/api/users').get((req, res, next) => {
    
  });



try {
    console.log("Starting web server...");
  
    const port = process.env.PORT || 8000;
    app.listen(port, () => console.log(`Server started on: ${port}`));
  } catch(error) {
    console.error(error.stack);
  }