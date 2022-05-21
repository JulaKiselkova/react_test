import { useState, useCallback, memo, useEffect } from "react";
import MainScreenViewForm from "../components/Layout/index";
import axios from "axios";
import { useDispatch } from "react-redux";
//import usersFetchingManagerReducer from "../reducers/index"
import getUserRequest from "../thunks/getUsersRequest";
import { debounceTime } from "rxjs/operators";

//   //const BASE_URL = "https://pokeapi.co/api/v2";
//   const BASE_URL = "https://api.github.com/users";
//   const [pokemons, setPokemons] = useState([]);
//   useEffect(() => {
//     fetch(`${BASE_URL}`)
//       .then((response) => response.json())
//       .then((data) => setPokemons(data));
//   }, []); //did mount
//   console.log(pokemons);

//   return <div>Dataaa</div>;
// };

// export default Async;
const BASE_URL = "https://api.github.com/users";

const Async = () => {
  const dispatch = useDispatch();

  useEffect(() =>{
      dispatch(getUserRequest());
  }, [])
  const getData = () => {
    axios.get(BASE_URL).then(function (response) {
      //console.log(response.data);
      return response.data;
    });
    //console.log(getData());
    return getData();
  };

  const [value, setValue] = useState("");
  const [arrOfSubmit, setArrOfSubmit] = useState([]);

  const handleChange = useCallback((event) => {
    console.log(event.target.value);
    setValue(event.target.value);
    const data = axios.get(BASE_URL).then(function (response) {
      console.log(response.data);
      return response.data;
    });
    console.log(data);
  }, []);

  const handleSubmit = useCallback(() => {
    const data = axios.get(BASE_URL).then(function (response) {
      console.log(response.data);
    });
    console.log(data);
    //setArrOfSubmit(data);
    //arrOfSubmit = [...arrOfSubmit, data];
    alert(value);
  }, [value]);

  return (
    <MainScreenViewForm
      value={value}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      //onEnter={onEnter}
      getData={getData[0]}
      //test={test}
    />
  );
};

export default Async;
