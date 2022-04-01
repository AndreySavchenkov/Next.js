import Heading from '../../components/Heading';
import Link from "next/link";
import styles from './Footer.module.scss'

const Footer = () => (
    <footer className={styles.wrapper}>
        <Link href={'https://andreysavchenkov.github.io/portfolio/'}><a target={'_blank'}><Heading tag='h5'
                                                                                 text='Created by Andrew ;)'/></a></Link>
    </footer>
)

export default Footer;