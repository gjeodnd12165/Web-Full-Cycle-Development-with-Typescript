import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { books, booksId } from './books';
import type { users, usersId } from './users';

export interface cartItemsAttributes {
  id: number;
  book_id: number;
  user_id: number;
  quantity: number;
}

export type cartItemsPk = "id";
export type cartItemsId = cartItems[cartItemsPk];
export type cartItemsOptionalAttributes = "id" | "quantity";
export type cartItemsCreationAttributes = Optional<cartItemsAttributes, cartItemsOptionalAttributes>;

export class cartItems extends Model<cartItemsAttributes, cartItemsCreationAttributes> implements cartItemsAttributes {
  id!: number;
  book_id!: number;
  user_id!: number;
  quantity!: number;

  // cartItems belongsTo books via book_id
  book!: books;
  getBook!: Sequelize.BelongsToGetAssociationMixin<books>;
  setBook!: Sequelize.BelongsToSetAssociationMixin<books, booksId>;
  createBook!: Sequelize.BelongsToCreateAssociationMixin<books>;
  // cartItems belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof cartItems {
    return sequelize.define('cartItems', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'books',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    tableName: 'cartItems',
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
        name: "cartItems_book_id_idx",
        using: "BTREE",
        fields: [
          { name: "book_id" },
        ]
      },
      {
        name: "cartItems_user_id_idx",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  }) as typeof cartItems;
  }
}
