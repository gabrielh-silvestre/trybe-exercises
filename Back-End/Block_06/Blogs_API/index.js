const express = require('express');
const { errorHandler } = require('./middlewares/errorHandler');
const { categoriesRouter } = require('./routes/categoriesRoute');
const { loginRouter } = require('./routes/loginRoute');
const { postRouter } = require('./routes/postsRoute');

const { userRouter } = require('./routes/userRoute');

const app = express();

app.use(express.json());

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/categories', categoriesRouter);
app.use('/post', postRouter);

app.use(errorHandler);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
