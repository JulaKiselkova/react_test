import { memo } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import UserDetailsContainer from "../../containers/getUserDetails";
import UsersController from "../../../MainScreen/containers/MainScreenContainer";
import NotFoundView from "../LayoutSpesialPages/NotFound/index";

const FullDetailsView = ({ isFound, isLoading }) => {
  if (isFound()) {
    if (isLoading) {
      return <CircularProgress />;
    } else {
      return (
        <>
          <UserDetailsContainer></UserDetailsContainer>
        </>
      );
    }
  } else {
    return (
      <>
        <UsersController></UsersController>
        <NotFoundView />
      </>
    );
  }
};


export default memo(FullDetailsView);
