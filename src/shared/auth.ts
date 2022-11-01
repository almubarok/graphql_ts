import pkg from 'jsonwebtoken';
const { sign } = pkg;
import { genSalt, hash, compare } from 'bcrypt';
import { APP_SECRET, JWT_EXPIRY } from './constant';

export const generateAccessToken = (userId: number) => {
  const accessToken = sign(
    {
      userId,
      timestamp: Date.now(),
    },
    APP_SECRET,
    {
      expiresIn: JWT_EXPIRY,
    }
  );
  return accessToken;
};

export const generatePassword = (password: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    genSalt(10, function (err, salt) {
      if (err) reject(err);
      hash(password, salt, function (err, hash) {
        if (err) reject(err);
        else resolve(hash);
      });
    });
  });
};

export const validPassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  return await compare(password, hashedPassword);
};
