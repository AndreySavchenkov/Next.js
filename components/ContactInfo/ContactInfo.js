import Heading from "../../components/Heading";
import styles from "./ContactInfo.module.scss";

const ContactInfo = ({contact}) => {
    const {name,email,address} = contact || {};
    const {street,suite,city,zipcode} = address || {};

    if(!contact) {
        return <Heading tag={'h3'} text={'Empty contact'}/>
    }

    return(
        <section className={styles.wrapper}>
            <Heading tag={'h3'} text={name}/>
            <div className={styles.innerContainer}>
                <div className={styles.item}>
                    <strong className={styles.email}>Email:</strong>
                    {email}
                </div>
                <div className={styles.item}>
                    <strong className={styles.title}>Address:</strong>
                    {`${street}, ${suite}, ${city}, ${zipcode}`}
                </div>
            </div>

        </section>
    )
}

export default ContactInfo;