import Heading from "../components/Heading";

const PostInfo = ({post}) => {
    const {title, body} = post || {};

    if(!post) {
        return <Heading tag={'h3'} text={'Empty Post'}/>
    }

    return(
        <section>
            <Heading tag={'h3'} text={title}/>
            <div>
                {body}
            </div>
        </section>
    )
}

export default PostInfo;