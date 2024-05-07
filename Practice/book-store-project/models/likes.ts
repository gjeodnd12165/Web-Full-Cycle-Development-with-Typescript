import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { books, booksId } from './books';
import type { users, usersId } from './users';

export interface likesAttributes {
  user_id: number;
  book_id: number;
}

export type likesPk = "user_id" | "book_id";
export type likesId = likes[likesPk];
export type likesCreationAttributes = likesAttributes;

export class likes extends Model<likesAttributes, likesCreationAttributes> implements likesAttributes {
  user_id!: number;
  book_id!: number;

  // likes belongsTo books via book_id
  book!: books;
  getBook!: Sequelize.BelongsToGetAssociationMixin<books>;
  setBook!: Sequelize.BelongsToSetAssociationMixin<books, booksId>;
  createBook!: Sequelize.BelongsToCreateAssociationMixin<books>;
  // likes belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof likes {
    return sequelize.define('likes', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'books',
        key: 'id'
      }
    }
  }, {
    tableName: 'likes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
          { name: "book_id" },
        ]
      },
      {
        name: "user_id_idx",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "book_id_idx",
        using: "BTREE",
        fields: [
          { name: "book_id" },
        ]
      },
    ]
  }) as typeof likes;
  }
}
