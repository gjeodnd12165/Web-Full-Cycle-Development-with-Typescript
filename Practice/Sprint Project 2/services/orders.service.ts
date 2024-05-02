import { Op, Transaction, WhereOptions } from 'sequelize';
import { booksAttributes, cartItems, initModels } from '../models/init-models';
import { sequelize } from '../sequelize';
import { Literal } from 'sequelize/types/utils';
import { IdNotConvertableError } from '../errors';

const models = initModels(sequelize);

/**
 * @returns information about INSERT
 */
export async function insertOrder(
  cartItemIds: string[], 
  delivery: {
    address: string,
    receiver: string,
    contact: string
  },
  userId: string
) {
  if (
    cartItemIds?.filter((id: string) => isNaN(Number(id))).length ||
    isNaN(Number(userId))
  ) {
    throw new IdNotConvertableError('element of bookIds, userId should be able to be casted to a number');
  }
  
  const result = await sequelize.transaction(async (t: Transaction) => {
    const createdDelivery = await models.deliveries.create({
      address: delivery.address,
      receiver: delivery.receiver,
      contact: delivery.contact
    }, {
      transaction: t
    });

    const createdOrder = await models.orders.create({
      delivery_id: createdDelivery.id,
      user_id: +userId
    }, {
      transaction: t
    });

    const cartItems = await models.cartItems.findAll({
      where: {
        id: {
          [Op.in]: cartItemIds.map((id: string) => +id)
        }
      },
      transaction: t
    });

    const createdOrderedBook = await models.orderedBooks.bulkCreate(
      cartItems.map((cartItem: cartItems) => ({
        id: cartItem.id,
        order_id: createdOrder.id,
        book_id: cartItem.book_id,
        quantity: cartItem.quantity
    })), {
      transaction: t
    });

    const deleteCount = await models.cartItems.destroy({
      where: {
        id: {
          [Op.in]: cartItemIds.map((id: string) => +id)
        }
      },
      transaction: t
    });

    return {
      created: createdOrderedBook,
      deletedRows: deleteCount
    };
  });
  return result;
}

/**
 * @returns information of found orders
 */
export async function searchOrders(
  userId: string
) {
  if (
    isNaN(Number(userId))
  ) {
    throw new IdNotConvertableError('userId should be able to be casted to a number');
  }

  const result = await sequelize.transaction(async (t: Transaction) => {
    const orders = await models.orderedBooks.findAll({
      attributes: [
        ['order_id', 'orderId'],
        [sequelize.fn('COUNT', sequelize.col('*')), 'totalTypes'],
        [sequelize.fn('SUM', sequelize.literal('books.price*orderedBooks.quantity')), 'totalPrice'],
        [sequelize.fn('SUM', sequelize.col('quantity')), 'totalQuantity']
      ],
      include: [
        {
          model: models.orders,
          as: 'orders',
          attributes: ['createdAt'],
          where: { user_id: userId },
          include: [
            {
              model: models.deliveries,
              as: 'deliveries',
              attributes: ['address', 'receiver', 'contact']
            }
          ]
        },
        {
          model: models.books,
          as: 'books',
          attributes: ['title']
        }
      ],
      group: ['order_id'],
      transaction: t
    });
    return orders;
  });
  return result;
}

/**
 * @returns detailed information of found order
 */
export async function searchOrder(
  orderId: string, 
  userId: string
) {
  if (
    isNaN(Number(orderId)) ||
    isNaN(Number(userId))
  ) {
    throw new IdNotConvertableError('orderId, userId should be able to be casted to a number');
  }

  const result = await sequelize.transaction(async (t: Transaction) => {
    const detailedOrder = await models.orderedBooks.findAll({
      include: [
        {
          model: models.orders,
          required: false,
          where: {
            user_id: userId
          },
          attributes: [
            ['user_id', 'userId']
          ],
          as: 'orders'
        },
        {
          model: models.books,
          required: false,
          attributes: ['title', 'author', 'price'],
          as: 'books'
        }
      ],
      attributes: [
        ['book_id', 'bookId'],
         'quantity'
      ],
      where: {
        order_id: orderId,
      },
      transaction: t,
    });

    return detailedOrder;
  });
  return result;
}