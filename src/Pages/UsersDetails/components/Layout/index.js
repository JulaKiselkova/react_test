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
import PaginatedItems from "../../../../hooks/paginate";
import UsersController from "../../../MainScreen/containers/MainScreenContainer";
import PaginationControlled from "../../../../hooks/paginate";

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
  currentItems,
  paginate,
  currentPage,
  numberOfPages,
}) => {
  if (isLoading === false) {
    return (
      <div>
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
            <div>Repositories({numberOfRepos})</div>
            {currentItems.map(({ name, url, id, clone_url, description }) => {
              return (
                <ul key={url} className={styles.reposItem}>
                  <div onClick={() => open(clone_url)}>{name}</div>
                  <div>{description}</div>
                </ul>
              );
            })}
          </div>
        </div>
        <Pagination count={numberOfPages} color="primary" onChange={paginate} />
      </div>
    );
  }
  //   } else {
  //     return (
  //       <>
  //         <CircularProgress></CircularProgress>
  //       </>
  //     );
  //   }
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
