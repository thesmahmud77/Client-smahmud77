import React, { useEffect, useState } from "react";

const useLoader = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:8080/portfolio");
        const projectData = await res.json();
        setData(projectData);
        setLoader(false);
      } catch (error) {
        console.error(error);
        setLoader(false);
      }
    };
    fetchData();
  }, []);
  return { data, loader };
};

export default useLoader;
