import { Link } from "react-router-dom";
import AppButton from "../common/Button";
import { useSelector } from "react-redux";
import { getAllPosts } from "../../redux/postRedux";

const PostCards = () => {
    const posts = useSelector(getAllPosts);

    return (
        <div className="row g-4  mt-3">
            {posts.map(post => 
                <div key={post.id} className="col-md-4 ">
                    <div className="border rounded p-4 shadow-sm h-100">
                        <h4>{post.title}</h4>
                        <p className="mb-0 mt-4"><span className="fw-bold">Author:</span> {post.author}</p>
                        <p><span className="fw-bold">Published: </span>{post.publishedDate}</p>
                        <p>{post.shortDescription}</p>
                        <Link to={`/post/${post.id}`}>
                            <AppButton>Read more</AppButton>
                        </Link>
                </div>
                    </div>
            )}
        </div>        
    );
};

export default PostCards;