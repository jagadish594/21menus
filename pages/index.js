import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import { useState, useEffect, useRef } from 'react';

const Index = (props) => {
    const [data, setFetchData] = useState("");
    //const {totalHits, currentPage, totalPages, foods} = props.data || "";
    const [inputQuery, setInputQuery] = useState("");
    const [isSearch, setSearch] = useState(false);
    const inputRef = useRef(null);
    useEffect(() =>{
        const fetchData = async () =>{
            const URL = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=GiSVQi6vc4bkITDFpqevACfryGTKgtKeRaE6FR98&query=${inputQuery}`;
            const resp = await fetch(URL);
            const jsonData = await resp.json();
            setFetchData(jsonData);
            setSearch(false);
        }

        if(isSearch){
            fetchData();
        }
        
    }, [isSearch]);

    const handleSearchClick = () => {
        setSearch(true);
    }
    return ( <Layout>
        <h1>Hello 21Menus</h1>

        <input type="text" value={inputQuery} ref = {inputRef} onChange={() => setInputQuery(inputRef.current.value)}/>
        <button onClick={handleSearchClick}>Search</button>
        <ul>
        {
            data.foods && data.foods.map(food =><li key={food.fdcId}>{food.fdcId} - {food.brandOwner}</li>)
        }
        </ul>

        </Layout>);
}

// Index.getInitialProps = async () => {
//     const URL = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=GiSVQi6vc4bkITDFpqevACfryGTKgtKeRaE6FR98&query=Cheddar%20Cheese`;
//     const response = await fetch(URL);
//     const data = await response.json();
//     return {
//         data: data
//     }

// }
export default Index;