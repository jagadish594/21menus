import Link from 'next/link';

const Display = (props) =>{
    let foods = [];
    if(props.data.foods){
        foods = props.data.foods
    }
    return (
        <ul>
            {foods ? foods.map((food) => (
                <li key={food.fdcId}>
                    <Link href="/p/[id]" as={`/p/${food.fdcId}`}>
                        <a>
                        {food.fdcId} - {food.brandOwner}
                        </a>
                    </Link>
                </li>
            )) : null}
        </ul>
    )
}

export default Display;