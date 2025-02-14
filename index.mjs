import express from 'express';
import cookieParser from 'cookie-parser';
import methodOverride from 'method-override';

// import bindRoutes from './routes.mjs';
import bodyParser from 'body-parser';
import bugsRouter from './routers/bugRouter.mjs';

// Initialise Express instance
const app = express();
// Set the Express view engine to expect EJS templates
app.set('view engine', 'ejs');
app.set('views', './views');
// Bind cookie parser middleware to parse cookies in requests
app.use(cookieParser());
// Bind Express middleware to parse request bodies for POST requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Bind method override middleware to parse PUT and DELETE requests sent as POST requests
app.use(methodOverride('_method'));
// Expose the files stored in the public folder
app.use(express.static('public'));

app.use('/', bugsRouter);
// Bind route definitions to the Express application
// bindRoutes(app);

// Set Express to listen on the given port
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log('http://localhost:3000'));
