// //basic server structure
// const express = require('express');  //is the way to import dependency or package or third party library in nodejs

// const app = express();
// const PORT = process.env.PORT || 3001;

// //sending a response to frontend or clientside
// app.get('/', (req, res)=>{ // '/' means root route
//     res.send("<h1>Welcome to EJS<h1>");
// })

// app.get('/about', (req, res)=>{ // '/about' means about route
//     res.send("<h1>We are web developer<h1>");
// })

// app.get('/services', (req, res)=>{  // '/service' means service route
//     res.send("<h1>We render different serices such as coding of javascript<h1>");
// })


// app.listen(PORT, ()=>{
//     console.log(`server is running at http://localhost:${PORT}`);
// })

//challenge area
//built the basic backend server with the following the routes
//'/'
//'/booking'
//'/payment'
//'/features'
//'/contact'
//startup your express server -> npm start OR npm run dev

//basic server structure
// const express = require('express');  //is the way to import dependency or package or third party library in nodejs

// const app = express();
// const PORT = process.env.PORT || 3001;

// //sending a response to frontend or clientside
// app.get('/', (req, res)=>{ // '/' means root route
//     res.send(`<h1>Welcome to Trendy Wears<h1>
//               <p>Where you book the desired cloth of your choice</p>`);
// })

// app.get('/booking', (req, res)=>{ // '/about' means about route
//     res.send("<h1>Welcome to the trendy wears booking page<h1>");
// })

// app.get('/payment', (req, res)=>{  // '/service' means service route
//     res.send(`<p>There are different kind of payment gateway for you to pay the items you brought from the dashboard</p>
//               <h3>GooglePay</h3>
//               <h3>Paypal</h3>
//               <h3>Transfer</h3>`);
// })

// app.get('/features', (req, res)=>{ // '/about' means about route
//     res.send("We hope you will like all the features and items on our page by subcribing to our website for more informatio");
// })

// app.get('/contact', (req, res)=>{ // '/about' means about route
//     res.send("<h1>Contact us on our social media handle (facebook, instagram, yahoo) and our gmail at trendywears@gmail.com<h1>");
// })

// app.listen(PORT, ()=>{
//     console.log(`server is running at http://localhost:${PORT}`);
// })

const express = require('express');  
const bodyParser = require('body-parser')

const app = express();
const PORT = process.env.PORT || 3001;

//setup the template engine
app.set('view engine', 'ejs');

app.use(express.static('public'))
// app.use(express.urlencoded({extended: true})) //its enable sending data from clientside to server
app.use(bodyParser.urlencoded({extended: true}))

let plNames = ['c', 'c++', 'java', 'python'];

//sending a response to frontend or clientside
app.get('/', (req, res)=>{ 
    res.status(200).render('index', { pageTitle: 'Home Page', proNames: plNames});
})

//getting data from frontend and insert it onto plNames array of String
app.post('/', (req, res) => {
    const plName = req.body.plName;
    plNames.push(plName)
    // console.log(plName);
    // res.status(201).send('data is created')
    res.redirect('/')
})

app.get('/contact', (req, res)=>{ 
    res.status(200).render('contact', { pageTitle: 'Contact Page' });
})

app.listen(PORT, ()=>{
    console.log(`server is running at http://localhost:${PORT}`);
})