import express from 'express';
import initBugController from '../controllers/bugsController.mjs';
import initApiController from '../controllers/apiControllers.mjs';

const router = express.Router();

const bugControllers = initBugController();
const apiControllers = initApiController();

router.get('/', bugControllers.home);
router.get('/v1/bugs', apiControllers.bugList);
router.get('/v1/feature', apiControllers.featureList);

router.post('/', bugControllers.createNewBug);
router.post('/new-feature', apiControllers.postNewFeature);

export default router;
