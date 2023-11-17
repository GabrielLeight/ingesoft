import { Sequelize } from 'sequelize';
import sequelize from '../database.js';

class Simulacion extends Sequelize.Model {};

Simulacion.init({

  id: {
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  dia: {
    type: Sequelize.DataTypes.INTEGER,
  },
  mes: Sequelize.DataTypes.INTEGER,
  año:{
    type: Sequelize.DataTypes.INTEGER,
  },
  taza: {
    type: Sequelize.DataTypes.INTEGER,
  },
  cuotauf: {
    type: Sequelize.DataTypes.INTEGER,
  },  
  valorUf: {
    type: Sequelize.DataTypes.INTEGER,
    }}, {
    sequelize,
    timestamps: true,
  },
  
);

export {Simulacion};