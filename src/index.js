const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const routes = require('./routes/routes');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(routes)

app.use((err, req, res, next) => {
  return res.json({
    message: err.message
  })
})

app.set('port', process.env.PORT || 4000)


app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')} ...`)
});