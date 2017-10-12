const express = require('express');
const bodyParser = require('body-parser');

const mustacheExpress = require('mustache-express');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(function(request, response, next) {
  next();
});

app.get('/todo', function(request, response) {
  response.render('todo');
})
const todo = ["Wash the dogs", "Clean the house", "Change the light bulbs"];
app.get("/", function(request, response) {
  response.render('todo', {todo: todo});
});
app.post("/", function(request, response) {
  todos.push(req.body.todo);
  response.redirect('/');
})

app.listen(3000, function() {
  console.log('Successfully started express application!');
})
