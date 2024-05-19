import { useEffect, useState } from "react";

const useLocalStorageState = (key) => {
  const [value, setValue] = useState(() => {
    try{
      let val = JSON.parse(window.localStorage.getItem(key)) || {};
      return val;
    } catch (err){
      console.error(`issue with ${key}`, err)
    }
  });

  useEffect(() => {
    try{
      let val = JSON.stringify(value)
      window.localStorage.setItem(key, val)
    } catch (err){
      console.log(err)
    }
  }, [value]);

  return [value, setValue];
};

export default useLocalStorageState;