import { useState, useCallback, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainScreenView from "../components/Layout/index";
import { useNavigate } from "react-router-dom";
import getUserRequest from "../thunks/getUserRequest";

const UsersController = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [value, setValue] = useState("");
  const { users } = useSelector((state) => state.usersPage);

  const handleChange = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  const onEnter = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  const handleSubmit = useCallback(() => {
    alert(value);
  }, [value]);

  const handleGoToDetails = useCallback((login) => {
    navigate(`/${login}`);
    return <></>;
  });

  const usersLogin = () => {
    return users.map((user) => {
      return user.login;
    });
  };

  const test = useEffect(() => {
    dispatch(getUserRequest());
  }, []);

  return (
    <div>
      <MainScreenView
        value={value}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        onEnter={onEnter}
        test={test}
        users={users}
        handleGoToDetails={handleGoToDetails}
      />
    </div>
  );
};

export default memo(UsersController);
