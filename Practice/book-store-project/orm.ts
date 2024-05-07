import SequelizeAuto from 'sequelize-auto';

const auto = new SequelizeAuto('BookShop', 'root', 'root', {
  useDefine: true,
  dialect: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  directory: './models',
  caseModel: 'c',
  caseFile: 'c',
  singularize: false,
  lang: 'ts'
})

auto.run();