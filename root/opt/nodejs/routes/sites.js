import express from 'express';
import fetch from 'node-fetch';
import { Remarkable } from 'remarkable';
import config from '../config.js';

const sitesRouter = express.Router();

async function renderSite(res, title, site) {
  let markdown = 'No information found.';
  try {
    const response = await fetch(`${config.apiUrl}/${site}.md`);
    if (response.ok) {
      const content = await response.text();
      markdown = new Remarkable().render(content);
    }
  } catch (error) {
    markdown = error.toString();
  }
  res.render('site', { title, markdown });
}

sitesRouter.get('/about', (req, res) => renderSite(res, 'About', 'about'));
sitesRouter.get('/readme', (req, res) => renderSite(res, 'Readme', 'readme'));

export default sitesRouter;
