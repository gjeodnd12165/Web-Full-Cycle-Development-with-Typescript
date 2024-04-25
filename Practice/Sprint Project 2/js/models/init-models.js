var DataTypes = require("sequelize").DataTypes;
const { Sequelize } = require("sequelize");
var _books = require("../../models/books");
var _cartItems = require("../../models/cartItems");
var _categories = require("../../models/categories");
var _deliveries = require("../../models/deliveries");
var _likes = require("../../models/likes");
var _orderedBooks = require("../../models/orderedBooks");
var _orders = require("../../models/orders");
var _users = require("../../models/users");

/**
 * 
 * @param {Sequelize} sequelize 
 * @returns 
 */
function initModels(sequelize) {
  var books = _books(sequelize, DataTypes);
  var cartItems = _cartItems(sequelize, DataTypes);
  var categories = _categories(sequelize, DataTypes);
  var deliveries = _deliveries(sequelize, DataTypes);
  var likes = _likes(sequelize, DataTypes);
  var orderedBooks = _orderedBooks(sequelize, DataTypes);
  var orders = _orders(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  cartItems.belongsTo(books, { foreignKey: "book_id" });
  books.hasMany(cartItems, { foreignKey: "book_id"});
  likes.belongsTo(books, { foreignKey: "book_id"});
  books.hasMany(likes, { foreignKey: "book_id"});
  orderedBooks.belongsTo(books, { foreignKey: "book_id"});
  books.hasMany(orderedBooks, { foreignKey: "book_id"});
  books.belongsTo(categories, { foreignKey: "category_id"});
  categories.hasMany(books, { foreignKey: "category_id"});
  orders.belongsTo(deliveries, { foreignKey: "delivery_id"});
  deliveries.hasMany(orders, { foreignKey: "delivery_id"});
  orderedBooks.belongsTo(orders, { foreignKey: "order_id"});
  orders.hasMany(orderedBooks, { foreignKey: "order_id"});
  cartItems.belongsTo(users, { foreignKey: "user_id"});
  users.hasMany(cartItems, { foreignKey: "user_id"});
  likes.belongsTo(users, { foreignKey: "user_id"});
  users.hasMany(likes, { foreignKey: "user_id"});
  orders.belongsTo(users, { foreignKey: "user_id"});
  users.hasMany(orders, { foreignKey: "user_id"});

  return {
    books,
    cartItems,
    categories,
    deliveries,
    likes,
    orderedBooks,
    orders,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
