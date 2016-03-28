var app = require('./config')

var cheesesController = require('./controllers/cheesesController');

app.get("/api/cheeses", cheesesController.index);
app.post("/api/cheeses", cheesesController.create);
app.delete("/api/cheeses/:id", cheesesController.destroy);