import { React, useState, useEffect } from "react";
import AxiosInstance from "./Axios";

const Create = () => {
  const [country, setCountry] = useState([]);
  const [league, setLeague] = useState([]);
  const [characteristic, setCharacteristic] = useState([]);

  const GetData = async () => {
    AxiosInstance.get(`country/`).then((res) => setCountry(res.data));
    AxiosInstance.get(`characteristic/`).then((res) =>
      setCharacteristic(res.data)
    );
    AxiosInstance.get(`league/`).then((res) => setLeague(res.data));
  };

  useEffect(() => {
    GetData();
  }, []);

  return <div>Create page</div>;
};

export default Create;
