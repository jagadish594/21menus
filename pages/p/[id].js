import Layout from '../../components/Layout'
import { useRouter } from 'next/router';

const FoodDetailsPage = (props) => {
  const router = useRouter();
  const fdcId = router.query.id;
  //const foods = props.data.filter(food => food.fdcId===fdcId);
  return (
    <div>
    <h3>{fdcId}</h3>
      
    <p>{/* props.foods && props.foods.ingredients */}</p>
      <ul>
        {/* props.foods &&
          props.foods.foodNutrients.map((nutrient) => (
            <li key={nutrient.nutrientId}>{nutrient.nutrientId}</li>
          ))*/ }
      </ul>
    </div>
  );
};
  

export default FoodDetailsPage;