import * as jwt from 'jsonwebtoken';
import { configDotenv } from 'dotenv';
configDotenv();

const key: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJkdW1teUBtYWlsLmNvbSIsImlhdCI6MTcxMzc1MjMzNSwiaXNzIjoiSERXIn0.c30rrVckQoEHJjQLdGhbzVzGXlLoDMD5InmGT2urFpc";

const decoded = jwt.verify(key, process.env.ACCESS_TOKEN_KEY) as jwt.JwtPayload;

console.log(decoded);
console.log(decoded.iat);