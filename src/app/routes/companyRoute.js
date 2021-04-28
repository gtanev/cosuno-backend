import express from 'express';
import companyService from '../services/companyService.js';

const router = express.Router();

/* GET all companies. */
router.get('/', async (req, res, next) => {
  try {
    const data = await companyService.findAll();
    res.status(200).send(data);
  } catch (e) {
    next(e);
  }
});

export default router;
