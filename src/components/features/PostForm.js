import PropTypes from "prop-types";
import { useState } from "react";
import AppButton from "../common/Button";

const PostForm = ({ 
    action,
    actionText,
    title: initialTitle,
    author: initialAuthor,
    publishedDate: initialPublishedDate,
    shortDescription: initialShortDescription,
    content: initialContent,
 }) => {
    const [title, setTitle] = useState(initialTitle);
    const [shortDescription, setShortDescription] = useState(initialShortDescription);
    const [content, setContent] = useState(initialContent);
    const [publishedDate, setPublishedDate] = useState(initialPublishedDate);
    const [author, setAuthor] = useState(initialAuthor);

    const handleSubmit = (e) => {
        e.preventDefault();
        action({ title, shortDescription, content, publishedDate, author});
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
            <div>
                <AppButton type="submit">{actionText}</AppButton> 
            </div>      
        </form>
    );
};

PostForm.propTypes = {
    action: PropTypes.func.isRequired,
    actionText: PropTypes.string.isRequired,

    title: PropTypes.string,
    author: PropTypes.string,
    publishedDate: PropTypes.string,
    shortDescription: PropTypes.string,
    content: PropTypes.string,
};

PostForm.defaultProps = {
    title: "",
    author: "",
    publishedDate: "",
    shortDescription: "",
    content: "",
};

export default PostForm;