import { getAuth } from "firebase/auth";

export const getUser = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  return user;
};
