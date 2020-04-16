import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import { useEffect, useReducer } from "react";
import InputSearch from '../components/InputSearch';
import foodSearchReducer from '../components/FoodSearchReducer';
import myKeys from '../myKeys.json';
import Display from '../components/Display';

const FoodSearch = (props) => {

  const   initialState = {
    data: "",
    inputQuery: "",
    isSearch: false,
  }

  const [state, dispatch] = useReducer(foodSearchReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      const searchURL = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${myKeys.usda}&query=${state.inputQuery}`;
      const resp = await fetch(searchURL);
      const jsonData = await resp.json();
      dispatch({
        type: "FETCH-DATA",
        value: jsonData,
      });
      dispatch({
        type: "IS-SEARCH",
        value: false
      });

    };
    
    if (state.isSearch) {
      fetchData();
    }

  }, [state.isSearch]);

  const handleInput = (event) => {
    dispatch({
      type: "INPUT-QUERY",
      value: event.target.value
    })
  };

  const handleSearchButton = () => {
    dispatch({
      type: "SEARCH"
    })
  };

  return (
    <Layout>
      <InputSearch
        inputQuery={state.inputQuery}
        handleInput={handleInput}
        handleSearchButton={handleSearchButton}
      />
      <Display data={state.data}/>

    </Layout>
  );
};

export default FoodSearch;
