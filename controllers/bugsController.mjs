import db from '../models/index.mjs';

const initBugController = () => {
  const home = async (req, res) => {
    console.log(`Thsi is the referer ${req.headers}`);
    // const bugs = await db.Bug.findAll();
    const features = await db.Feature.findAll();
    // const bugs = JSON.stringify(result);
    res.render('index', { features });
  };

  const bugsListApi = async (req, res) => {
    const { referer } = req.headers;
    console.log(`This is the referer ${req.headers}`);
    res.json({
      result: 'This is the api endpoint',
      g: referer,
    });
  };

  const createNewBug = async (req, res) => {
    // const { featureId, bug, errorText } = req.body;
    try {
      await db.Bug.create(req.body);
      const features = await db.Feature.findAll();
      res.render('index', { msg: 'Bug successfully created!', features });
    } catch (error) {
      console.log(`DB SELECT ERROR FOR features table --> ${error}`);
    }
  };

  return {
    home,
    bugsListApi,
    createNewBug,

  };
};

export default initBugController;
