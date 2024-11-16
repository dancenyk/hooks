import { useState, useEffect } from "react";

const useFecthCharacter = (url) => {
const [data, setData] = useState(null);
  const getCharacter = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      setData(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getCharacter()
  }, []);

  return { data }
}


export default useFecthCharacter