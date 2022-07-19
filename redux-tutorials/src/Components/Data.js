import React, { useState, useEffect } from "react";
import axios from "axios";

const Data = () => {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users`
        );
        setData(response.data);
        console.log(response.data);
        setErr(null);
      } catch (err) {
        setErr(err.message);
        setData(null);
      }
    };
    getData();
  }, []);

  if(data === null){
    return <div>Loading...
        {err && (
        <div><h3>{`There is a problem fetching the post data - ${err}`}</h3></div>
      )}
    </div>
  }
  return (
    <div>
      <h1>API Posts</h1>

      <ul>
        {data.map((item) => (
            <li key={item.id}>
              <h3>{item.name}</h3>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Data;
