import { memo } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { red } from "material-ui-colors";
import CircularProgress from "@mui/material/CircularProgress";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Pagination from "@mui/material/Pagination";
import { browserHistory } from "react-router";
//import styles from "./styles.module.css";
import styles from "./styles.module.css";
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
  open,
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
          <div className={styles.content}>
            <div className={styles.infoContainer}>
              <img
                className={styles.picture}
                src={certainUser().avatar_url}
              ></img>
              <>num of followers</>
              {numberOfFollowers}
              <>num of following</>
              {numberOfFollowing}
              Details<p onClick={() => open(html_url)}>{params.name}</p>
            </div>
            <div className={styles.repos}>
              Repositories({numberOfRepos})
              {repos.map(({ name, url, id, clone_url }) => {
                return (
                  <ul key={url}>
                    <div onClick={() => open(clone_url)}>{name}</div>
                    {/* <a href={clone_url}>{name}</a> */}
                  </ul>
                );
              })}
            </div>
          </div>
        </>
      )}
      <Pagination count={10} color="primary" />
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
