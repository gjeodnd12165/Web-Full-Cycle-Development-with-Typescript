var DataTypes = require("sequelize").DataTypes;
var _books = require("./books");
var _cartItems = require("./cartItems");
var _categories = require("./categories");
var _deliveries = require("./deliveries");
var _likes = require("./likes");
var _orderedBooks = require("./orderedBooks");
var _orders = require("./orders");
var _users = require("./users");

function initModels(sequelize) {
  var books = _books(sequelize, DataTypes);
  var cartItems = _cartItems(sequelize, DataTypes);
  var categories = _categories(sequelize, DataTypes);
  var deliveries = _deliveries(sequelize, DataTypes);
  var likes = _likes(sequelize, DataTypes);
  var orderedBooks = _orderedBooks(sequelize, DataTypes);
  var orders = _orders(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  cartItems.belongsTo(books, { as: "book", foreignKey: "book_id"});
  books.hasMany(cartItems, { as: "cartItems", foreignKey: "book_id"});
  likes.belongsTo(books, { as: "book", foreignKey: "book_id"});
  books.hasMany(likes, { as: "likes", foreignKey: "book_id"});
  orderedBooks.belongsTo(books, { as: "book", foreignKey: "book_id"});
  books.hasMany(orderedBooks, { as: "orderedBooks", foreignKey: "book_id"});
  books.belongsTo(categories, { as: "category", foreignKey: "category_id"});
  categories.hasMany(books, { as: "books", foreignKey: "category_id"});
  orders.belongsTo(deliveries, { as: "delivery", foreignKey: "delivery_id"});
  deliveries.hasMany(orders, { as: "orders", foreignKey: "delivery_id"});
  orderedBooks.belongsTo(orders, { as: "order", foreignKey: "order_id"});
  orders.hasMany(orderedBooks, { as: "orderedBooks", foreignKey: "order_id"});
  cartItems.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(cartItems, { as: "cartItems", foreignKey: "user_id"});
  likes.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(likes, { as: "likes", foreignKey: "user_id"});
  orders.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(orders, { as: "orders", foreignKey: "user_id"});

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
