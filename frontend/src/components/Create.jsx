import { React, useState, useEffect } from "react";
import AxiosInstance from "./Axios";
import { Box, Typography } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";

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

  return (
    <div>
      <Box className={"TopBar"}>
        <AddBoxIcon />
        <Typography
          sx={{ marginLeft: "15px", fontWeight: "bold" }}
          variant="subtitle2"
        >
          Create a football club
        </Typography>
      </Box>
      <Box className={"FormBox"}>
        <Box className={"FormArea"}>1</Box>
        <Box className={"FormArea"}>2</Box>
        <Box className={"FormArea"}>3</Box>
      </Box>
    </div>
  );
};

export default Create;
