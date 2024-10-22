import express from 'express';
import config from '../config.json';

const toolsRouter = express.Router();

toolsRouter.get('/', (req, res) => {
  res.redirect('/tool/script1');
});

toolsRouter.get('/script1', (req, res) => {
  res.render('tool', {
    title: 'Script1',
    websocketUri: `${config.wsUrl}/script1`,
    verbose: config.verbose,
  });
});

toolsRouter.get('/script2', (req, res) => {
  res.render('tool', {
    title: 'Script2',
    websocketUri: `${config.wsUrl}/script2`,
    verbose: config.verbose,
  });
});

toolsRouter.get('/script3', (req, res) => {
  res.render('tool', {
    title: 'Script3',
    websocketUri: `${config.wsUrl}/script3`,
    verbose: config.verbose,
  });
});

toolsRouter.get('/script4', (req, res) => {
  res.render('tool', {
    title: 'Script4',
    websocketUri: `${config.wsUrl}/script4`,
    verbose: config.verbose,
  });
});

export default toolsRouter;
