import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

// import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
import logo from "../utils/logo.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#19181A",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={25} />
        {/* <Typography variant="h4" fontWeight="bold" color="#FC1503">
          DStream
        </Typography> */}
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
