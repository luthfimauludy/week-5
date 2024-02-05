"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class forgot_requests extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  forgot_requests.init(
    {
      email: DataTypes.STRING,
      code: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "forgot_requests",
    }
  );
  return forgot_requests;
};
