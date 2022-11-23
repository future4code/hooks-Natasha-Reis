import * as jwt from "jsonwebtoken";

const expiresIn = "1min";

export const generateToken = (id: string): string => {
  const token = jwt.sign(
    {
      id,
    },
    process.env.JWT_KEY as string,
    {
      expiresIn,
    }
  );
  return token;
};
