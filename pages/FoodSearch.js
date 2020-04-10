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
