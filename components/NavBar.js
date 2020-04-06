import Link from 'next/link';

const StyleLink = {
    marginRight: 10
}

const StyleNavBar = {
    border: "1px solid #DDD",
    padding: 10,
    margin: 5
}

const NavBar = () =>{
    return (
        <div style={StyleNavBar}>
            <Link href="/">
                <a style={StyleLink}>
                    Home
                </a>
            </Link>
            <Link href="/about">
                <a style={StyleLink}>
                    About
                </a>
            </Link>
            <Link href="/contact">
                <a style={StyleLink}>
                    Contact
                </a>
            </Link>

            </div>
    )
}

export default NavBar;