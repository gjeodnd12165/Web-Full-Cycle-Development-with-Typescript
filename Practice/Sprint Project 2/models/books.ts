import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { cartItems, cartItemsId } from './cartItems';
import type { categories, categoriesId } from './categories';
import type { likes, likesId } from './likes';
import type { orderedBooks, orderedBooksId } from './orderedBooks';
import type { users, usersId } from './users';

export interface booksAttributes {
  id: number;
  title: string;
  img?: number;
  category_id: number;
  form: string;
  author: string;
  isbn: string;
  pages: string;
  summary?: string;
  detail?: string;
  contents?: string;
  price: number;
  pub_date: string;
}

export type booksPk = "id";
export type booksId = books[booksPk];
export type booksOptionalAttributes = "id" | "img" | "summary" | "detail" | "contents";
export type booksCreationAttributes = Optional<booksAttributes, booksOptionalAttributes>;

export class books extends Model<booksAttributes, booksCreationAttributes> implements booksAttributes {
  id!: number;
  title!: string;
  img?: number;
  category_id!: number;
  form!: string;
  author!: string;
  isbn!: string;
  pages!: string;
  summary?: string;
  detail?: string;
  contents?: string;
  price!: number;
  pub_date!: string;

  // books hasMany cartItems via book_id
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
  // books hasMany likes via book_id
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
  // books hasMany orderedBooks via book_id
  orderedBooks!: orderedBooks[];
  getOrderedBooks!: Sequelize.HasManyGetAssociationsMixin<orderedBooks>;
  setOrderedBooks!: Sequelize.HasManySetAssociationsMixin<orderedBooks, orderedBooksId>;
  addOrderedBook!: Sequelize.HasManyAddAssociationMixin<orderedBooks, orderedBooksId>;
  addOrderedBooks!: Sequelize.HasManyAddAssociationsMixin<orderedBooks, orderedBooksId>;
  createOrderedBook!: Sequelize.HasManyCreateAssociationMixin<orderedBooks>;
  removeOrderedBook!: Sequelize.HasManyRemoveAssociationMixin<orderedBooks, orderedBooksId>;
  removeOrderedBooks!: Sequelize.HasManyRemoveAssociationsMixin<orderedBooks, orderedBooksId>;
  hasOrderedBook!: Sequelize.HasManyHasAssociationMixin<orderedBooks, orderedBooksId>;
  hasOrderedBooks!: Sequelize.HasManyHasAssociationsMixin<orderedBooks, orderedBooksId>;
  countOrderedBooks!: Sequelize.HasManyCountAssociationsMixin;
  // books belongsToMany users via book_id and user_id
  user_id_users!: users[];
  getUser_id_users!: Sequelize.BelongsToManyGetAssociationsMixin<users>;
  setUser_id_users!: Sequelize.BelongsToManySetAssociationsMixin<users, usersId>;
  addUser_id_user!: Sequelize.BelongsToManyAddAssociationMixin<users, usersId>;
  addUser_id_users!: Sequelize.BelongsToManyAddAssociationsMixin<users, usersId>;
  createUser_id_user!: Sequelize.BelongsToManyCreateAssociationMixin<users>;
  removeUser_id_user!: Sequelize.BelongsToManyRemoveAssociationMixin<users, usersId>;
  removeUser_id_users!: Sequelize.BelongsToManyRemoveAssociationsMixin<users, usersId>;
  hasUser_id_user!: Sequelize.BelongsToManyHasAssociationMixin<users, usersId>;
  hasUser_id_users!: Sequelize.BelongsToManyHasAssociationsMixin<users, usersId>;
  countUser_id_users!: Sequelize.BelongsToManyCountAssociationsMixin;
  // books belongsTo categories via category_id
  category!: categories;
  getCategory!: Sequelize.BelongsToGetAssociationMixin<categories>;
  setCategory!: Sequelize.BelongsToSetAssociationMixin<categories, categoriesId>;
  createCategory!: Sequelize.BelongsToCreateAssociationMixin<categories>;

  static initModel(sequelize: Sequelize.Sequelize): typeof books {
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
  }) as typeof books;
  }
}
