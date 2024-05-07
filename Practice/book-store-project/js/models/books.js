const Sequelize = require('sequelize');

/**
 * 
 * @param {Sequelize.Sequelize} sequelize 
 * @param {Sequelize.DataTypes} DataTypes 
 * @returns 
 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('books', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    img: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categories',
        key: 'id'
      }
    },
    form: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    author: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    isbn: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    pages: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    summary: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    detail: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    contents: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pub_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'books',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "category_id_idx",
        using: "BTREE",
        fields: [
          { name: "category_id" },
        ]
      },
    ]
  });
};
