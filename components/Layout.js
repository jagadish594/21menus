import NavBar from './NavBar';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';

const Layout = (props) => {
    return (
        <div>
            <NavBar />
            {
                props.children
            }
        </div>
    );
}

export default Layout;