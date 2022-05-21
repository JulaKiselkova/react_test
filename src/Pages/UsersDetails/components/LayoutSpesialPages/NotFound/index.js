import { memo } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { browserHistory } from "react-router";
import styles from "./styles.module.css";
import PropTypes from "prop-types";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const NotFoundView = () => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <PersonOutlineIcon sx={{ fontSize: 100 }} color="disabled" />
        <p className={styles.text}>User not found</p>
      </div>
    </div>
  );
};

export default memo(NotFoundView);
