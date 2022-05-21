import { memo } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { red } from "material-ui-colors";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./styles.module.css";
import PropTypes from "prop-types";

//import getUsers from "../../api/api";

const MainScreenViewForm = ({ handleChange, handleSubmit, value, getData }) => {
  return (
    <>
      <div className={styles.header}>
        <GitHubIcon
          className={styles.github}
          sx={{ color: red[500] }}
          sx={{ fontSize: 40 }}
        />
        <form onSubmit={handleSubmit}>
          <input
            name="userName"
            className={styles.userInput}
            value={value}
            onChange={handleChange}
            type="text"
          />
          <div>{value}</div>
        </form>
      </div>
      {/* <div>{getData}</div> */}
    </>
  );
};

MainScreenViewForm.propTypes = {
  value: PropTypes.string.isRequired,
};

export default memo(MainScreenViewForm);
