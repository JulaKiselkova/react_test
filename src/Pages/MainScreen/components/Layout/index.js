import { memo } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import styles from "./styles.module.css";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import { grey } from "@mui/material/colors";


const MainScreenView = ({
  handleGoToDetails,
  handleChange,
  handleSubmit,
  value,
  users,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <GitHubIcon
          className={styles.github}
          sx={{ color: grey[50], fontSize: 40 }}
        />
        <form onSubmit={() => handleGoToDetails(value)}>
          <input
            name="userName"
            className={styles.userInput}
            value={value}
            onChange={handleChange}
            type="text"
          />
        </form>
      </div>
    </div>
  );
};

MainScreenView.propTypes = {
  value: PropTypes.string.isRequired,
};

export default memo(MainScreenView);
