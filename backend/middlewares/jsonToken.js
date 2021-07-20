import jwt from "jsonwebtoken";

export const jsonWebToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN, {
    expiresIn: "10d",
  });
};
