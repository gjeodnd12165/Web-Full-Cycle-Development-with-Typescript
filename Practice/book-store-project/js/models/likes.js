const Sequelize = require('sequelize');

/**
 * 
 * @param {Sequelize.Sequelize} sequelize 
 * @param {Sequelize.DataTypes} DataTypes 
 * @returns 
 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('likes', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'books',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'likes',
    timestamps: false,
    indexes: [
      {
        name: "user_id_idx",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "book_id_idx",
        using: "BTREE",
        fields: [
          { name: "book_id" },
        ]
      },
    ]
  });
};
