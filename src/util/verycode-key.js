import { stringToHex, tripleDes } from './3des';

const setKey = (val) => {
  const key = 'ODc2NTU2Nzg4NzY1NTY3ODg3NjU1Njc4Cg==';// $('#keyvm').val();
  const desret = tripleDes(key, val, 1, 0, 0, 3);
  return stringToHex(desret);
};

const getKey = (phone, rand) => {
  return setKey(phone
    + rand.substring(rand.length - 7, rand.length - 1));
};

export default getKey;

