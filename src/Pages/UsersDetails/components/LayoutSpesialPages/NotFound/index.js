import { memo } from "react";
import styles from "./styles.module.css";
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
