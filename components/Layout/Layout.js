import Header from './Header';
import Footer from './Footer';
import styles from './Layout.module.scss';

const Layout = ({children}) => (
    <div className={styles.container}>
        <div>
            <Header/>
            {children}
        </div>
        <Footer/>
    </div>
)

export default Layout;