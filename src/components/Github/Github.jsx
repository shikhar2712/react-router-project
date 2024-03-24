import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://api.github.com/users/shikhar2712")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="text-center m-4 bg-white text-black p-4 text-3xl">
      Github followers: {data.followers}
      <img
        className="text-center"
        src={data.avatar_url}
        alt="Git profile photo"
        width={300}
      />
    </div>
  );
}

export default Github;
