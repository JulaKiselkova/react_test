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
import GroupIcon from "@mui/icons-material/Group";
import PersonIcon from "@mui/icons-material/Person";
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
  name,
}) => {
  if (isLoading === false) {
    return (
      <div>
        <UsersController></UsersController>
        <div className={styles.main_container}>
          <div className={styles.content}>
            <div className={styles.infoContainer}>
              <img
                className={styles.picture}
                src={certainUser().avatar_url}
              ></img>
              <div>
                <p>{name}</p>
                <p className={styles.login} onClick={() => open(html_url)}>
                  {params.name}
                </p>
                <div className={styles.followers_following}>
                  <p>
                    <GroupIcon sx={{ fontSize: 20 }} />
                    {` ${numberOfFollowers} followers`}
                  </p>
                  <p>
                    <PersonIcon sx={{ fontSize: 20 }} />
                    {` ${numberOfFollowing} following`}
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.repos}>
              <div className={styles.numberOfRepos}>
                Repositories({numberOfRepos})
              </div>
              {currentItems.map(({ name, url, id, clone_url, description }) => {
                return (
                  <ul key={url} className={styles.reposBox}>
                    <div className={styles.description_and_title}>
                      <div
                        className={styles.reposItem}
                        onClick={() => open(clone_url)}
                      >
                        {name}
                      </div>
                      <div className={styles.description}>{description}</div>
                    </div>
                  </ul>
                );
              })}
              <Pagination
                className={styles.pagination}
                count={numberOfPages}
                color="primary"
                onChange={paginate}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default memo(UsersDetailsView);
