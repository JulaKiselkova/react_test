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
//import styles from "./styles.module.css";
import PropTypes from "prop-types";
import UsersController from "../../../MainScreen/containers/MainScreenContainer";

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
  isEmpty,
  html_url,
  numberOfRepos,
  numberOfFollowers,
  numberOfFollowing,
}) => {
  //console.log(repos);
  return (
    <div>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <UsersController></UsersController>
          {`num of repos`}
          {numberOfRepos}
          <>num of followers</>
          {numberOfFollowers}
          <>num of following</>
          {numberOfFollowing}
          Details<a href={html_url}>{params.name}</a>
          <img src={certainUser().avatar_url}></img>
          <>
            {repos.map(({ name, url, id, clone_url }) => {
              return (
                <ul key={url}>
                  <a
                    //   key={url}
                    href={clone_url}
                    //onClick={() => handleGoToRepository(clone_url)}
                  >
                    {name}
                  </a>
                </ul>
              );
            })}
          </>
        </>
      )}
    </div>
  );
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
