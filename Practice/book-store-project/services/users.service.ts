import { Transaction } from "sequelize";
import { sequelize } from "../sequelize";
import { initModels } from "../models/init-models";

import * as jwt from 'jsonwebtoken';
import * as crypto from 'crypto';
import { configDotenv } from "dotenv";
import { UserNotFoundError, PasswordEqualToPrevError } from "../errors";
configDotenv();

const models = initModels(sequelize);

/**
 * create user
 * @returns information about INSERT
 */
export async function insertUser(email: string, username: string, password: string) {
  const salt: string = crypto.randomBytes(10).toString('base64');
  const hashedPassword: string = getHashedPassword(password, salt);

  const result = sequelize.transaction(async (t: Transaction) => {
    const insertInfo = models.users.create({
      email: email,
      username: username,
      password: hashedPassword,
      salt: salt
    }, {
      transaction: t
    });

    return insertInfo;
  });
  return result;
}

/**
 * search for user specified by email and password  
 * @returns jwt token
 */
export async function searchUser(email: string, password: string) {
  const result = sequelize.transaction(async (t: Transaction) => {
    const user = await models.users.findOne({
      where: {
        email: email
      },
      transaction: t
    });

    if (!user) {
      throw new UserNotFoundError("There is no user matched");
    }

    const hashedPassword: string = getHashedPassword(password, user.salt);
    
    if (user.password !== hashedPassword) {
      throw new UserNotFoundError("Password not matched. But treat this as not found");
    }

    const token = jwt.sign({
      id: user.id,
      email: user.email,
      username: user.username
    }, process.env.ACCESS_TOKEN_KEY, {
      issuer: "HDW"
    });

    return token;
  });
  return result;
}

/**
 * search for user specified by email
 * @returns email provided
 */
export async function searchUserByEmail(email: string) {
  const result = sequelize.transaction(async (t: Transaction) => {
    const user = models.users.findOne({
      where: {
        email: email
      },
      transaction: t
    });
    
    if (!user) {
      throw new UserNotFoundError("There is no user matched");
    }

    return user;
  });
  return email;
}

/**
 * updates user's password into given password  
 * the user must be guaranteed to exist 
 * @returns information about UPDATE
 */
export async function updateUserPassword(email: string, password: string) {
  const salt = crypto.randomBytes(10).toString('base64');
  const hashedPassword = getHashedPassword(password, salt);

  const result = sequelize.transaction(async (t: Transaction) => {
    const user = await models.users.findOne({
      where: {
        email: email
      },
      transaction: t
    });

    if (user.password === hashedPassword) {
      throw new PasswordEqualToPrevError("Password is equal to previous one");
    }

    const updateInfo = models.users.update({
      password: hashedPassword,
      salt: salt,
    }, {
      where: {
        email: email
      },
      transaction: t
    });
    
    return updateInfo;
  });
  return result;
}

function getHashedPassword(password: string, salt: string): string {
  return crypto.pbkdf2Sync(password, salt, 10000, 10, 'sha512').toString('base64');
}