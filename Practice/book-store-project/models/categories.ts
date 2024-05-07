import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { books, booksId } from './books';

export interface categoriesAttributes {
  id: number;
  name: string;
}

export type categoriesPk = "id";
export type categoriesId = categories[categoriesPk];
export type categoriesCreationAttributes = categoriesAttributes;

export class categories extends Model<categoriesAttributes, categoriesCreationAttributes> implements categoriesAttributes {
  id!: number;
  name!: string;

  // categories hasMany books via category_id
  books!: books[];
  getBooks!: Sequelize.HasManyGetAssociationsMixin<books>;
  setBooks!: Sequelize.HasManySetAssociationsMixin<books, booksId>;
  addBook!: Sequelize.HasManyAddAssociationMixin<books, booksId>;
  addBooks!: Sequelize.HasManyAddAssociationsMixin<books, booksId>;
  createBook!: Sequelize.HasManyCreateAssociationMixin<books>;
  removeBook!: Sequelize.HasManyRemoveAssociationMixin<books, booksId>;
  removeBooks!: Sequelize.HasManyRemoveAssociationsMixin<books, booksId>;
  hasBook!: Sequelize.HasManyHasAssociationMixin<books, booksId>;
  hasBooks!: Sequelize.HasManyHasAssociationsMixin<books, booksId>;
  countBooks!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof categories {
    return sequelize.define('categories', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "name_UNIQUE"
    }
  }, {
    tableName: 'categories',
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
        name: "name_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
    ]
  }) as typeof categories;
  }
}
