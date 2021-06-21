import db from '../models/index.mjs';

const initApiController = () => {
  const bugList = async (req, res) => {
    const getBugList = await db.Bug.findAll();

    res.json(getBugList);
  };

  const featureList = async (req, res) => {
    const features = await db.Feature.findAll();
    res.json(features);
  };

  // Post handler for creating a new feature
  const postNewFeature = async (req, res) => {
    const { newFeature } = req.body;
    console.log(`This is the new item to add o feature DB ${newFeature}`);
    const result = await db.Feature.create({ name: newFeature });
    res.send(result);
  };

  return {
    bugList,
    postNewFeature,
    featureList,
  };
};

export default initApiController;
