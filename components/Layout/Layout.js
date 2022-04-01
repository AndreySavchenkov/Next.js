import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import styles from '../../components/Layout/Layout.module.scss';

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