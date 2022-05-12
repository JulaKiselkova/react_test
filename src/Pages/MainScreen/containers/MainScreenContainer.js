import { useState, useCallback, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainScreenView from "../components/Layout/index";
import { useNavigate } from "react-router-dom";
//import { getUsers } from "../api/api";
import {
  ROUTE_NAMES,
  DATA_FETCHING,
  USER_DETAILS,
} from "../../../Routes/routeNames";
import getUserRequest from "../thunks/getUserRequest";

const UsersController = () => {
  //const baseUrl = "https://pokeapi.co/api/v2/";
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [value, setValue] = useState("");
  //const {theUser} = useSelector((state) => state.userPage.wycats)
  const { users } = useSelector((state) => state.usersPage);
  //const { d } = useSelector((state) => state.usersPage);
  //console.log(d);

  const handleChange = useCallback((event) => {
    //console.log(event.target.value);
    //console.log(getUsers());
    setValue(event.target.value);
  }, []);

  const onEnter = useCallback((event) => {
    //console.log("Enterrrrrr");
    //console.log(event.target.value);
    setValue(event.target.value);
  }, []);

  const handleSubmit = useCallback(() => {
    alert(value);
  }, [value]);

  const handleGoToDetails = useCallback((login) => {
    //navigate(`${ROUTE_NAMES.HOME_PAGE}/${login}`);
    navigate(`/${login}`);
  });

  const test = useEffect(() => {
    dispatch(getUserRequest());
  }, []);

  //   const test2 = useEffect(() => {
  //     const l =fetch(`${baseUrl}`).then((response) => response.json()).then((data) => {setUser(data.results)})
  //     console.log(l)
  //   }, []);
  //   const handleDecrement = useCallback(() => {
  //     if (countValue > 0) {
  //       setCountValue(countValue - 1);
  //     }
  //   }, [countValue]);
  //   const handleOnReset = useCallback(() => {
  //     setCountValue(0);
  //   }, []);

  //   const handleDel = useCallback(() => {
  //     setCountValue(0);
  //   }, [countValue]);

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
        //test2={test2}
        //onIncrement={handleIncrement}
        //onDecrement={handleDecrement}
        //onDelete={handleDel}
      />
    </div>
  );
};

export default memo(UsersController);
