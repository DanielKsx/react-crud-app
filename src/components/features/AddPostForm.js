import { addPost } from "../../redux/postRedux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PostForm from "./PostForm";


const AddPostForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAdd = (postData) => {
        dispatch(addPost( postData ));
        navigate('/');
    };
    return (
        <PostForm action={handleAdd} actionText={"Add post"} />
    )
};

export default AddPostForm;