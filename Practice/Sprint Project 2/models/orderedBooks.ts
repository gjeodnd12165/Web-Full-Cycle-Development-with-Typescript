import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { books, booksId } from './books';
import type { orders, ordersId } from './orders';

export interface orderedBooksAttributes {
  id: number;
  order_id: number;
  book_id: number;
  quantity: number;
}

export type orderedBooksPk = "id";
export type orderedBooksId = orderedBooks[orderedBooksPk];
export type orderedBooksOptionalAttributes = "id";
export type orderedBooksCreationAttributes = Optional<orderedBooksAttributes, orderedBooksOptionalAttributes>;

export class orderedBooks extends Model<orderedBooksAttributes, orderedBooksCreationAttributes> implements orderedBooksAttributes {
  id!: number;
  order_id!: number;
  book_id!: number;
  quantity!: number;

  // orderedBooks belongsTo books via book_id
  book!: books;
  getBook!: Sequelize.BelongsToGetAssociationMixin<books>;
  setBook!: Sequelize.BelongsToSetAssociationMixin<books, booksId>;
  createBook!: Sequelize.BelongsToCreateAssociationMixin<books>;
  // orderedBooks belongsTo orders via order_id
  order!: orders;
  getOrder!: Sequelize.BelongsToGetAssociationMixin<orders>;
  setOrder!: Sequelize.BelongsToSetAssociationMixin<orders, ordersId>;
  createOrder!: Sequelize.BelongsToCreateAssociationMixin<orders>;

  static initModel(sequelize: Sequelize.Sequelize): typeof orderedBooks {
    return sequelize.define('orderedBooks', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'orders',
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
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'orderedBooks',
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
        name: "orderedBooks_order_id",
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "orderedBooks_user_id",
        using: "BTREE",
        fields: [
          { name: "book_id" },
        ]
      },
    ]
  }) as typeof orderedBooks;
  }
}
