import express from 'express';
import path from 'path';
import createError from 'http-errors';
import bodyParser from 'body-parser';

import configRouter from './routes/config.js';
import sitesRouter from './routes/sites.js';
import toolsRouter from './routes/tools.js';
import config from './config.js';

const app = express();

app.set('views', path.join(path.resolve(), 'views'));
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(path.resolve(), 'public')));
app.locals.appName = config.appName;

app.use((req, res, next) => {
  app.locals.current = req.url;
  next();
});

const mainRouter = express.Router();
mainRouter.get('/', (req, res) => res.redirect('/tool'));

app.use('/', mainRouter);
app.use('/tool', toolsRouter);
app.use('/site', sitesRouter);
// app.use('/config', configRouter);

app.use((req, res, next) => next(createError(404)));

export default app;
