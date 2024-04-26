import { Op, Transaction } from 'sequelize';
import { initModels } from '../models/init-models';
import { sequelize } from '../sequelize';
import { Literal } from 'sequelize/types/utils';

const models = initModels(sequelize);

/**
 * @returns information of searched books
 */
export async function searchBooks(
  categoryId: string | undefined, 
  recentDays: string | undefined, 
  listNum: string | undefined = '20', 
  page: string | undefined = '1'
) {
  const result = await sequelize.transaction(async (t: Transaction) => {
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
          attributes: [],
          as: 'categories'
        }
      ],
      attributes: {
        include:[
          [sequelize.col('categories.name'), 'category_name']
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
}

/**
 * @returns information of searched book
 */
export async function searchBook(
  bookId: string, 
  userId: string | undefined
) {
  if (isNaN(Number(bookId))) {
    throw new TypeError('bookId should be able to be casted to a number');
  }
  
  const result = await sequelize.transaction(async (t: Transaction) => {

    let condition = {
      id: +bookId
    };

    let isLiked: [Literal, string] | null;
    if (userId) {
      isLiked = [
        sequelize.literal(`EXISTS (SELECT * FROM likes WHERE user_id=${+userId} AND book_id=${+bookId})`),
        'isLiked'
      ]
    }

    const book = await models.books.findOne({
      include: [
        {
          model: models.categories,
          required: false,
          attributes: [],
          as: 'categories'
        }
      ],
      attributes: {
        include:[
          [
            sequelize.col('categories.name'), 'category_name'
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
}