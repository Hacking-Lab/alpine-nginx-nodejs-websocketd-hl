import express from 'express';
import fs from 'fs/promises';
import path from 'path';

const configFilePath = path.resolve('data/config.json');
const configRouter = express.Router();

async function getConfigFromFile() {
  try {
    const data = await fs.readFile(configFilePath, 'utf8');
    return JSON.parse(data);
  } catch {
    return {};
  }
}

configRouter.get('/raw', async (req, res) => {
  const config = await getConfigFromFile();
  res.send(config);
});

configRouter.get('/', async (req, res) => {
  const config = await getConfigFromFile();
  res.render('config', { config });
});

configRouter.post('/', async (req, res) => {
  try {
    await fs.writeFile(configFilePath, JSON.stringify(req.body, null, 2));
    const config = await getConfigFromFile();
    res.render('config', { config });
  } catch (error) {
    res.status(500).render('error', { error });
  }
});

export default configRouter;
