import { useState } from 'react';

const useFirebase = () => {
  const [user, setUser] = useState({});
  // set user code

  // some other funtcion

  return {
    user: user,
    setUser: setUser,
    otherFunction: 'Other funtion name',
  };
};
export default useFirebase;
