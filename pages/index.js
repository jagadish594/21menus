import FoodSearch from "./FoodSearch";

const Index = () => {
  return (
    <div>
      <FoodSearch />
    </div>
  );
};

// import Layout from "../components/Layout";
// import fetch from "isomorphic-unfetch";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import FoodDetails from "./p/[id]";

// const Index = (props) => {
//   const { foods } = props.data; //Only  for reference
//   console.log("foods: ", foods); //only for reference
//   const [data, setFetchData] = useState("");
//   //const {totalHits, currentPage, totalPages, foods} = props.data || "";
//   const [inputQuery, setInputQuery] = useState("");
//   const [isSearch, setSearch] = useState(false);
//   useEffect(() => {
//     const fetchData = async () => {
//       const searchURL = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=GiSVQi6vc4bkITDFpqevACfryGTKgtKeRaE6FR98&query=${inputQuery}`;
//       const resp = await fetch(searchURL);
//       const jsonData = await resp.json();
//       setFetchData(jsonData);
//       setSearch(false);
//     };

//     if (isSearch) {
//       fetchData();
//     }
//   }, [isSearch]);

//   return (
//     <Layout>
//       <h1>Hello 21Menus</h1>

//       <input
//         type="text"
//         value={inputQuery}
//         onChange={(event) => setInputQuery(event.target.value)}
//       />
//       <button onClick={() => setSearch(true)}>Search</button>
//       <ul>
//         {data.foods &&
//           data.foods.map((food) => (
//             <li key={food.fdcId}>
//               <Link href="/p/[id]" as={`/p/${food.fdcId}`}>
//                 <a>
//                   {food.fdcId} - {food.brandOwner}
//                   <FoodDetails ingredients={food.ingredients} nutrients={food.foodNutrients}/>
//                 </a>
//               </Link>
//             </li>
//           ))}
//       </ul>
//     </Layout>
//   );
// };

// //Only for reference
// Index.getInitialProps = async () => {
//   const URL = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=GiSVQi6vc4bkITDFpqevACfryGTKgtKeRaE6FR98&query=Cheddar%20Cheese`;
//   const response = await fetch(URL);
//   const data = await response.json();
//   return {
//     data: data,
//   };
// };
export default Index;
