import Link from 'next/link';

const Display = (props) =>{
    return (
        <ul>
            {props.data.foods && props.data.foods.map((food) => (
                <li key={food.fdcId}>
                <Link href="/p/[id]" as={`/p/${food.fdcId}`}>
                    <a>
                    {food.fdcId} - {food.brandOwner}
                    </a>
                </Link>
                </li>
            ))}
        </ul>
    )
}

export default Display;