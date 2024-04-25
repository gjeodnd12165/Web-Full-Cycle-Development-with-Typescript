import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { books, booksId } from './books';
import type { cartItems, cartItemsId } from './cartItems';
import type { likes, likesId } from './likes';
import type { orders, ordersId } from './orders';

export interface usersAttributes {
  id: number;
  email: string;
  username: string;
  password: string;
  salt: string;
}

export type usersPk = "id";
export type usersId = users[usersPk];
export type usersOptionalAttributes = "id";
export type usersCreationAttributes = Optional<usersAttributes, usersOptionalAttributes>;

export class users extends Model<usersAttributes, usersCreationAttributes> implements usersAttributes {
  id!: number;
  email!: string;
  username!: string;
  password!: string;
  salt!: string;

  // users belongsToMany books via user_id and book_id
  book_id_books!: books[];
  getBook_id_books!: Sequelize.BelongsToManyGetAssociationsMixin<books>;
  setBook_id_books!: Sequelize.BelongsToManySetAssociationsMixin<books, booksId>;
  addBook_id_book!: Sequelize.BelongsToManyAddAssociationMixin<books, booksId>;
  addBook_id_books!: Sequelize.BelongsToManyAddAssociationsMixin<books, booksId>;
  createBook_id_book!: Sequelize.BelongsToManyCreateAssociationMixin<books>;
  removeBook_id_book!: Sequelize.BelongsToManyRemoveAssociationMixin<books, booksId>;
  removeBook_id_books!: Sequelize.BelongsToManyRemoveAssociationsMixin<books, booksId>;
  hasBook_id_book!: Sequelize.BelongsToManyHasAssociationMixin<books, booksId>;
  hasBook_id_books!: Sequelize.BelongsToManyHasAssociationsMixin<books, booksId>;
  countBook_id_books!: Sequelize.BelongsToManyCountAssociationsMixin;
  // users hasMany cartItems via user_id
  cartItems!: cartItems[];
  getCartItems!: Sequelize.HasManyGetAssociationsMixin<cartItems>;
  setCartItems!: Sequelize.HasManySetAssociationsMixin<cartItems, cartItemsId>;
  addCartItem!: Sequelize.HasManyAddAssociationMixin<cartItems, cartItemsId>;
  addCartItems!: Sequelize.HasManyAddAssociationsMixin<cartItems, cartItemsId>;
  createCartItem!: Sequelize.HasManyCreateAssociationMixin<cartItems>;
  removeCartItem!: Sequelize.HasManyRemoveAssociationMixin<cartItems, cartItemsId>;
  removeCartItems!: Sequelize.HasManyRemoveAssociationsMixin<cartItems, cartItemsId>;
  hasCartItem!: Sequelize.HasManyHasAssociationMixin<cartItems, cartItemsId>;
  hasCartItems!: Sequelize.HasManyHasAssociationsMixin<cartItems, cartItemsId>;
  countCartItems!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany likes via user_id
  likes!: likes[];
  getLikes!: Sequelize.HasManyGetAssociationsMixin<likes>;
  setLikes!: Sequelize.HasManySetAssociationsMixin<likes, likesId>;
  addLike!: Sequelize.HasManyAddAssociationMixin<likes, likesId>;
  addLikes!: Sequelize.HasManyAddAssociationsMixin<likes, likesId>;
  createLike!: Sequelize.HasManyCreateAssociationMixin<likes>;
  removeLike!: Sequelize.HasManyRemoveAssociationMixin<likes, likesId>;
  removeLikes!: Sequelize.HasManyRemoveAssociationsMixin<likes, likesId>;
  hasLike!: Sequelize.HasManyHasAssociationMixin<likes, likesId>;
  hasLikes!: Sequelize.HasManyHasAssociationsMixin<likes, likesId>;
  countLikes!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany orders via user_id
  orders!: orders[];
  getOrders!: Sequelize.HasManyGetAssociationsMixin<orders>;
  setOrders!: Sequelize.HasManySetAssociationsMixin<orders, ordersId>;
  addOrder!: Sequelize.HasManyAddAssociationMixin<orders, ordersId>;
  addOrders!: Sequelize.HasManyAddAssociationsMixin<orders, ordersId>;
  createOrder!: Sequelize.HasManyCreateAssociationMixin<orders>;
  removeOrder!: Sequelize.HasManyRemoveAssociationMixin<orders, ordersId>;
  removeOrders!: Sequelize.HasManyRemoveAssociationsMixin<orders, ordersId>;
  hasOrder!: Sequelize.HasManyHasAssociationMixin<orders, ordersId>;
  hasOrders!: Sequelize.HasManyHasAssociationsMixin<orders, ordersId>;
  countOrders!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof users {
    return sequelize.define('users', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "email_UNIQUE"
    },
    username: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    salt: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    tableName: 'users',
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
        name: "email_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
    ]
  }) as typeof users;
  }
}
