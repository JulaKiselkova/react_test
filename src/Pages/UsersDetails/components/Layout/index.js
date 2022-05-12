import { memo } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { red } from "material-ui-colors";
import CircularProgress from "@mui/material/CircularProgress";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
//import styles from "./styles.module.css";
import PropTypes from "prop-types";

//import getUsers from "../../api/api";

const UsersDetailsView = ({
  users,
  params,
  certainUser,
  isFound,
  isLoading,
  repositoriesObj,
  handleGoToRepository,
  repos,
}) => {
  if (isFound()) {
    console.log(repos);
    return (
      <div>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <>
            Details<div>{params.name}</div>
            <img src={certainUser().avatar_url}></img>
            {/* <>{repos[0].id}</> */}
            {/* <ul>{repos[0][0].name}</ul> */}
          </>
        )}
      </div>
    );
  } else {
    return <>{params.name} not found</>;
  }
};

UsersDetailsView.propTypes = {
  //    repos: PropTypes.string.isRequired,
  //   onIncrement: PropTypes.func.isRequired,
  //   onDecrement: PropTypes.func.isRequired,
  //   onReset: PropTypes.func.isRequired,
  //   onDelete: PropTypes.func.isRequired,
  //   id: PropTypes.string.isRequired,
};

export default memo(UsersDetailsView);
