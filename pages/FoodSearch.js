import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import { useEffect, useReducer } from "react";
import InputSearch from '../components/InputSearch';
import Display from '../components/Display';
import foodSearchReducer from '../components/FoodSearchReducer';
import myKeys from '../myKeys.json';

const FoodSearch = () => {
  const initialState = {
    data: "",
    inputQuery: "",
    isSearch: false
  }

  const [state, dispatch] = useReducer(foodSearchReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      const searchURL = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${myKeys.usda}&query=${state.inputQuery}`;
      const resp = await fetch(searchURL);
      const jsonData = await resp.json();
      dispatch({
        type: "FETCH-DATA",
        value: jsonData
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





/*
import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import { useState, useEffect } from "react";
import InputSearch from '../components/InputSearch';
import Display from '../components/Display';

const FoodSearch = () => {
  const [data, setFetchData] = useState("");
  const [inputQuery, setInputQuery] = useState("");
  const [isSearch, setSearch] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const searchURL = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=GiSVQi6vc4bkITDFpqevACfryGTKgtKeRaE6FR98&query=${inputQuery}`;
      const resp = await fetch(searchURL);
      const jsonData = await resp.json();
      setFetchData(jsonData);
      setSearch(false);
    };
    
    if (isSearch) {
      fetchData();
    }
  }, [isSearch]);

  const handleInput = (event) => {
    setInputQuery(event.target.value);
  };

  const handleSearchButton = () => {
    setSearch(true);
  };

  return (
    <Layout>
      <InputSearch
        inputQuery={inputQuery}
        handleInput={handleInput}
        handleSearchButton={handleSearchButton}
      />
      <Display data={data}/>
    </Layout>
  );
};

export default FoodSearch;
*/