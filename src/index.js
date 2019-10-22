import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// App.use(function (req, res, next) {
//     /*var err = new Error('Not Found');
//      err.status = 404;
//      next(err);*/
  
//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', '*');
  
//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
  
//   //  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
//     // Pass to next layer of middleware
//     next();
//   });
ReactDOM.render(<App />, document.getElementById('root'));