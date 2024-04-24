const { Op } = require('sequelize');
const models = require('../models/index');
const sequelize = require('../sequelize'); 

/**
 * 
 * @param {string | number | null} categoryId 
 * @param {string | number | null} recentDays 
 * @param {string | number} listNum 
 * @param {string | number} page 
 * @returns information of searched books
 */
const searchBooks = async (categoryId, recentDays, listNum = 20, page = 1) => {
  try {
    const result = await sequelize.transaction(async t => {
      let condition = {};
      
      if (categoryId) {
        condition = {
          ...condition,
          category_id: +categoryId
        };
      }
      if (recentDays) {
        condition = {
          ...condition,
          pub_date: {
            [Op.between]: [
              new Date(Date.now() - +recentDays * 24 * 60 * 60 * 1000),
              Date.now()
            ]
          }
        };
      }

      const books = await models.books.findAll({
        include: [
          {
            model: models.categories,
            required: false,
            attributes: []
          }
        ],
        attributes: {
          include:[
            [sequelize.col('category.name'), 'category_name']
          ]
        },
        where: {
          ...condition
        },
        limit: +listNum,
        offset: (+page-1)*(+listNum),
        transaction: t,
      });

      return books;
    });
    return result;
  } catch (error) {
    console.error(error);
  }
}

/**
 * 
 * @param {string | number} bookId 
 * @param {string | number | null} userId
 * @returns information of searched book
 */
const searchBook = async (bookId, userId) => {
  try {
    const result = await sequelize.transaction(async t => {
      let condition = {
        id: bookId
      };

      let isLiked = [];
      if (userId) {
        isLiked = [
          sequelize.literal(`EXISTS (SELECT * FROM likes WHERE user_id=${userId} AND book_id=${bookId})`),
          'isLiked'
        ]
      }

      const book = await models.books.findOne({
        include: [
          {
            model: models.categories,
            required: false,
            attributes: []
          }
        ],
        attributes: {
          include:[
            [
              sequelize.col('category.name'), 'category_name'
            ],
            [
              sequelize.literal('(SELECT COUNT(*) FROM likes WHERE likes.book_id = books.id)'),
              'likes'
            ],
            isLiked
          ]
        },
        where: {
          ...condition
        },
        transaction: t,
      });

      return book;
    });
    return result;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  searchBooks,
  searchBook
}