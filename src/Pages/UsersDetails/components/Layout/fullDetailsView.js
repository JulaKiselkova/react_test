import { memo } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { red } from "material-ui-colors";
import CircularProgress from "@mui/material/CircularProgress";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { browserHistory } from "react-router";
import UserDetailsContainer from "../../containers/getUserDetails";
//import styles from "./styles.module.css";
import PropTypes from "prop-types";
import PaginatedItems from "../../../../hooks/paginate";
import UsersController from "../../../MainScreen/containers/MainScreenContainer";

//import getUsers from "../../api/api";

const FullDetailsView = ({ isFound, isLoading }) => {
  if (isFound()) {
    return (
      <>
        <UserDetailsContainer></UserDetailsContainer>
        <p>yes</p>
      </>
    );
  } else {
    return (
      <>
        <UsersController></UsersController>
        <p>User not found</p>
      </>
    );
  }
};

FullDetailsView.propTypes = {
  //    repos: PropTypes.string.isRequired,
  //   onIncrement: PropTypes.func.isRequired,
  //   onDecrement: PropTypes.func.isRequired,
  //   onReset: PropTypes.func.isRequired,
  //   onDelete: PropTypes.func.isRequired,
  //   id: PropTypes.string.isRequired,
};

export default memo(FullDetailsView);
