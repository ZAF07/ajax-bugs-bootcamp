import db from './index.mjs';

export default function initBugModel(sequelize, DataType) {
  return sequelize.define(
    'define', {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: false,
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
    },
    { underscored: true },
  );
}
