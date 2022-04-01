import Heading from "../../components/Heading";
import styles from "./PostInfo.module.scss"

const PostInfo = ({post}) => {
    const {title, body} = post || {};

    if(!post) {
        return <Heading tag={'h3'} text={'Empty Post'}/>
    }

    return(
        <section className={styles.wrapper}>
            <Heading tag={'h3'} text={title}/>
            <div className={styles.text}>
                {body}
            </div>
        </section>
    )
}

export default PostInfo;