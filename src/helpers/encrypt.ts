import CryptoJS from 'crypto-js';
import AES from 'crypto-js/aes';
import { SECRET_KEY } from '@env';

export const encrypt = (data: string) => {
  const encryptData = typeof data === 'object' ? JSON.stringify(data) : data;
  return AES.encrypt(encryptData, SECRET_KEY).toString();
};

export const decrypt = (data: string) =>
  AES.decrypt(data, SECRET_KEY).toString(CryptoJS.enc.Utf8);
