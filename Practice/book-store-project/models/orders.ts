import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { deliveries, deliveriesId } from './deliveries';
import type { orderedBooks, orderedBooksId } from './orderedBooks';
import type { users, usersId } from './users';

export interface ordersAttributes {
  id: number;
  delivery_id: number;
  user_id: number;
  created_at: Date;
}

export type ordersPk = "id";
export type ordersId = orders[ordersPk];
export type ordersOptionalAttributes = "id" | "created_at";
export type ordersCreationAttributes = Optional<ordersAttributes, ordersOptionalAttributes>;

export class orders extends Model<ordersAttributes, ordersCreationAttributes> implements ordersAttributes {
  id!: number;
  delivery_id!: number;
  user_id!: number;
  created_at!: Date;

  // orders belongsTo deliveries via delivery_id
  delivery!: deliveries;
  getDelivery!: Sequelize.BelongsToGetAssociationMixin<deliveries>;
  setDelivery!: Sequelize.BelongsToSetAssociationMixin<deliveries, deliveriesId>;
  createDelivery!: Sequelize.BelongsToCreateAssociationMixin<deliveries>;
  // orders hasMany orderedBooks via order_id
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
  // orders belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof orders {
    return sequelize.define('orders', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    delivery_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'deliveries',
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
    }
  }, {
    tableName: 'orders',
    timestamps: true,
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
        name: "orders_delivery_id",
        using: "BTREE",
        fields: [
          { name: "delivery_id" },
        ]
      },
      {
        name: "orders_user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  }) as typeof orders;
  }
}
