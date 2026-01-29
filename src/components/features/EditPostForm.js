import { editPost, getPostById } from "../../redux/postRedux";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import PostForm from "./PostForm";
import { useEffect } from "react";


const EditPostForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    const post = useSelector((state) =>getPostById(state, id));

    useEffect(() =>{
        if (!post) {
            navigate("/");
        }
    }, [post, navigate]);

    const handleEdit = (postData) => {
        dispatch(editPost({ ...postData, id }));
        navigate('/');
    };

    if (!post) return null;

    return (
        <PostForm action={handleEdit} actionText={"Edit post"} title={post.title} author={post.author} publishedDate={post.publishedDate} shortDescription={post.shortDescription} content={post.content} />
    )
};

export default EditPostForm;