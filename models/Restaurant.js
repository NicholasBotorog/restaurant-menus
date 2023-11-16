const { sequelize, Model, DataTypes } = require('../db')
// const { Sequelize } = require('sequelize')

// TODO - create a Restaurant model
class Restaurant extends Model {}

Restaurant.init(
  {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    cuising: DataTypes.STRING,
  },
  {
    sequelize: sequelize,
    modelName: 'Restaurant',
  }
)

module.exports = Restaurant
