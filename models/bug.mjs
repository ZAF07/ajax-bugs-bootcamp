export default function initBugModel(sequelize, DataType) {
  return sequelize.define(
    'bug', {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      problem: {
        allowNull: false,
        type: DataType.STRING,
      },
      errorText: {
        allowNull: true,
        type: DataType.STRING,
      },
      commit: {
        allowNull: true,
        type: DataType.STRING,
      },
      featureId: {
        type: DataType.INTEGER,
        allowNull: false,
      },
    },
    { underscored: true },
  );
}
