const { sequelize, Model, DataTypes } = require('../db')
// const { Sequelize } = require('sequelize')

// TODO - create a Menu model
class Menu extends Model {}

Menu.init(
  {
    title: DataTypes.STRING,
  },
  {
    sequelize: sequelize,
    modelName: 'Menu',
  }
)

module.exports = Menu
