const initFeatureModel = (sequelize, DataTypes) => sequelize.define(
  'feature',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
  },
  { underscored: true },
);

export default initFeatureModel;
