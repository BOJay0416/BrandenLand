import express from 'express';
import { getName, getNumber } from './controller.js';

const router = express.Router(); // express 引入的是一個 function

router.get('/name', getName); // RESTful api
router.get('/number', getNumber);

export default router;