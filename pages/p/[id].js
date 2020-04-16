import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useReducer, useState } from "react";
import fetch from "isomorphic-unfetch";
import myKeys from "../../myKeys.json";

const Result = (props) => {
  if (!props.brandOwner || !props.ingredients) {
    return null;
  }
  return (
    <div>
      {props.brandOwner.length > 0 && (
        <div>
          <h3>Brand: {props.brandOwner}</h3>
          <h3>ingredients: {props.ingredients}</h3>
        </div>
      )}
    </div>
  );
};

const FoodDetailsPage = () => {
  const router = useRouter();
  const [fdcId] = useState(router.query.id);
  const [foodDetails, setFoodDetails] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.nal.usda.gov/fdc/v1/food/${fdcId}?api_key=${myKeys.usda}`
      );
      const jsonData = await response.json();
      dispatch({
        type: "FETCH",
        payload: jsonData,
      });
    };

    fetchData();
  }, [fdcId]);

  const initialState = {
    foodDetails: "",
    isLoading: true,
  };

  const reducer = (state, action) => {
    const newState = { ...state };
    switch (action.type) {
      case "FETCH":
        newState.foodDetails = action.payload;
        newState.isLoading = false;
        break;
      default:
        throw new Error();
    }
    return newState;
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <Link href="/">
        <a>Back</a>
      </Link>
      {state.isLoading ? (
        <div>Loading...</div>
      ) : (
        <Result
          ingredients={state.foodDetails.ingredients}
          brandOwner={state.foodDetails.brandOwner}
        />
      )}
    </div>
  );
};

export default FoodDetailsPage;
