import express from 'express';
import config from '../config.js';

const toolsRouter = express.Router();

toolsRouter.get('/', (req, res) => {
  res.redirect('/tool/script1');
});

['script1', 'script2', 'script3', 'script4'].forEach(script => {
  toolsRouter.get(`/${script}`, (req, res) => {
    res.render('tool', {
      title: script,
      websocketUri: `${config.wsUrl}/${script}`,
      verbose: config.verbose,
    });
  });
});

export default toolsRouter;
