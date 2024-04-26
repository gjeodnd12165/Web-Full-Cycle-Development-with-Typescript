import type { Sequelize } from "sequelize";
import { books as _books } from "./books";
import type { booksAttributes, booksCreationAttributes } from "./books";
import { cartItems as _cartItems } from "./cartItems";
import type { cartItemsAttributes, cartItemsCreationAttributes } from "./cartItems";
import { categories as _categories } from "./categories";
import type { categoriesAttributes, categoriesCreationAttributes } from "./categories";
import { deliveries as _deliveries } from "./deliveries";
import type { deliveriesAttributes, deliveriesCreationAttributes } from "./deliveries";
import { likes as _likes } from "./likes";
import type { likesAttributes, likesCreationAttributes } from "./likes";
import { orderedBooks as _orderedBooks } from "./orderedBooks";
import type { orderedBooksAttributes, orderedBooksCreationAttributes } from "./orderedBooks";
import { orders as _orders } from "./orders";
import type { ordersAttributes, ordersCreationAttributes } from "./orders";
import { users as _users } from "./users";
import type { usersAttributes, usersCreationAttributes } from "./users";

export {
  _books as books,
  _cartItems as cartItems,
  _categories as categories,
  _deliveries as deliveries,
  _likes as likes,
  _orderedBooks as orderedBooks,
  _orders as orders,
  _users as users,
};

export type {
  booksAttributes,
  booksCreationAttributes,
  cartItemsAttributes,
  cartItemsCreationAttributes,
  categoriesAttributes,
  categoriesCreationAttributes,
  deliveriesAttributes,
  deliveriesCreationAttributes,
  likesAttributes,
  likesCreationAttributes,
  orderedBooksAttributes,
  orderedBooksCreationAttributes,
  ordersAttributes,
  ordersCreationAttributes,
  usersAttributes,
  usersCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const books = _books.initModel(sequelize);
  const cartItems = _cartItems.initModel(sequelize);
  const categories = _categories.initModel(sequelize);
  const deliveries = _deliveries.initModel(sequelize);
  const likes = _likes.initModel(sequelize);
  const orderedBooks = _orderedBooks.initModel(sequelize);
  const orders = _orders.initModel(sequelize);
  const users = _users.initModel(sequelize);

  books.belongsToMany(users, { as: 'user_id_users', through: likes, foreignKey: "book_id", otherKey: "user_id" });
  users.belongsToMany(books, { as: 'book_id_books', through: likes, foreignKey: "user_id", otherKey: "book_id" });
  cartItems.belongsTo(books, { as: "books", foreignKey: "book_id"});
  books.hasMany(cartItems, { as: "cartItems", foreignKey: "book_id"});
  likes.belongsTo(books, { as: "books", foreignKey: "book_id"});
  books.hasMany(likes, { as: "likes", foreignKey: "book_id"});
  orderedBooks.belongsTo(books, { as: "books", foreignKey: "book_id"});
  books.hasMany(orderedBooks, { as: "orderedBooks", foreignKey: "book_id"});
  books.belongsTo(categories, { as: "categories", foreignKey: "category_id"});
  categories.hasMany(books, { as: "books", foreignKey: "category_id"});
  orders.belongsTo(deliveries, { as: "deliveries", foreignKey: "delivery_id"});
  deliveries.hasMany(orders, { as: "orders", foreignKey: "delivery_id"});
  orderedBooks.belongsTo(orders, { as: "orders", foreignKey: "order_id"});
  orders.hasMany(orderedBooks, { as: "orderedBooks", foreignKey: "order_id"});
  cartItems.belongsTo(users, { as: "users", foreignKey: "user_id"});
  users.hasMany(cartItems, { as: "cartItems", foreignKey: "user_id"});
  likes.belongsTo(users, { as: "users", foreignKey: "user_id"});
  users.hasMany(likes, { as: "likes", foreignKey: "user_id"});
  orders.belongsTo(users, { as: "users", foreignKey: "user_id"});
  users.hasMany(orders, { as: "orders", foreignKey: "user_id"});

  return {
    books: books,
    cartItems: cartItems,
    categories: categories,
    deliveries: deliveries,
    likes: likes,
    orderedBooks: orderedBooks,
    orders: orders,
    users: users,
  };
}
