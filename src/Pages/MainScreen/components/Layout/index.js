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
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";
import { ROUTE_NAMES } from "../../../../Routes/routeNames";
import { grey } from "@mui/material/colors";

import getUsers from "../../api/api";

// {
//   users.map(({ login, url }) => {
//     return (
//       <div key={url} onClick={() => handleGoToDetails(login)}>
//         {/* <Link to={`${ROUTE_NAMES.HOME_PAGE}/${login}`}>{login}</Link> */}
//         {login}
//       </div>
//     );
//   });
// }

const MainScreenView = ({
  //onClick={() => handleGoToDetails(login)}
  handleGoToDetails,
  handleChange,
  handleSubmit,
  value,
  users,
  //onClick={() => handleGoToDetails(login)
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <GitHubIcon
          //color="pink"
          className={styles.github}
          //sx={{ fontSize: 40 }}
          sx={{ color: grey[50], fontSize: 40 }}
        />
        <form onSubmit={() => handleGoToDetails(value)}>
          {/* <SearchIcon /> */}
          <input
            name="userName"
            className={styles.userInput}
            value={value}
            onChange={handleChange}
            type="text"
          />
          <div>{value}</div>
        </form>
        <button onClick={() => handleGoToDetails(value)}>find</button>
      </div>
      <ul></ul>
    </div>
  );
};

// </div>
//       <ul>
//         {users.map(({ login, url }) => {
//           return (
//             <div key={url} onClick={() => handleGoToDetails(login)}>
//               {/* <Link to={`${ROUTE_NAMES.HOME_PAGE}/${login}`}>{login}</Link> */}
//               {login}
//             </div>
//           );
//         })}
//       </ul>
//     </div>

MainScreenView.propTypes = {
  value: PropTypes.string.isRequired,
  //   onIncrement: PropTypes.func.isRequired,
  //   onDecrement: PropTypes.func.isRequired,
  //   onReset: PropTypes.func.isRequired,
  //   onDelete: PropTypes.func.isRequired,
  //   id: PropTypes.string.isRequired,

  //   <ul>
  //         {users.map(({ login, url }) => {
  //           return (
  //             <div key={url} onClick={() => handleGoToDetails(login)}>
  //               {/* <Link to={`${ROUTE_NAMES.HOME_PAGE}/${login}`}>{login}</Link> */}
  //               {login}
  //             </div>
  //           );
  //         })}
  //       </ul>
};

export default memo(MainScreenView);
