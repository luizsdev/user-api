import bcrypt from 'bcrypt';
const saltRounds = 10;

export const encryptPassword = (password: string) => {
  bcrypt.hash(password, saltRounds, (err, hash) => {
    return hash;
  });
};
