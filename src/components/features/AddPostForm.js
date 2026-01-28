import { useState } from "react"
import { addPost } from "../../redux/postRedux";
import { useDispatch } from "react-redux";
import AppButton from "../common/Button";
import { useNavigate } from "react-router-dom";


const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [content, setContent] = useState('');
    const [publishedDate, setPublishedDate] = useState('');
    const [author, setAuthor] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addPost({title, shortDescription, content, publishedDate, author}));
        navigate('/');
        setTitle('');
        setShortDescription('');
        setContent('');
        setPublishedDate('');
        setAuthor('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label" htmlFor="title">Title</label>
                <input id="title" type="text" className="form-control" placeholder="Enter Title" value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="author">Author</label>
                <input id="author" type="text" className="form-control" placeholder="Enter author" value={author} onChange={e => setAuthor(e.target.value)} />
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="published">Published</label>
                <input id="published" type="text" className="form-control" placeholder="dd.mm.yy" value={publishedDate} onChange={e => setPublishedDate(e.target.value)} />
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="shortdesc">Short description</label>
                <textarea id="shortdesc" className="form-control" rows="3" placeholder="Short description..." value={shortDescription} onChange={e => setShortDescription(e.target.value)} />
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="content">Main content</label>
                <textarea id="content" className="form-control" rows="6" placeholder="Leave a comment here..." value={content} onChange={e => setContent(e.target.value)} />
            </div>
            <div className="d-flex justify-content-end">
                <AppButton type="submit">Add post</AppButton> 
            </div>      
        </form>
    );
};




export default AddPostForm;