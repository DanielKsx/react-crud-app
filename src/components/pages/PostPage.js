import PageTitle from '../common/PageTitle';
import { getPostById } from '../../redux/postRedux';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Navigate, Link } from 'react-router-dom';
import AppButton from '../common/Button';
import { removePost } from '../../redux/postRedux';
import AppModal from '../features/DeletePostModal';
import { useState } from 'react';



const PostPage = props => {

    const { id } = useParams();
    const dispatch = useDispatch();

    const post = useSelector(state => getPostById(state, id));
    const [showModal, setShowModal] = useState(false);

    if (!post) return <Navigate to="/"/>;

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleConfirmDelete = () => {
        dispatch(removePost(id));
        setShowModal(false);
    };


    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="d-flex align-items-center mb-3">
                        <PageTitle>{post.title}</PageTitle>
                        <div className="ms-auto">
                            <Link to={`/post/edit/${post.id}`}>
                                <AppButton variant="outline-primary" className="me-2">Edit</AppButton>
                            </Link>
                            <AppButton variant="outline-danger" onClick={handleOpenModal}>Delete</AppButton>
                        </div>
                    </div>
                    <div className=" mt-3">
                        <p className="mb-0"><span className="fw-bold">Author:</span> {post.author}</p>
                        <p><span className="fw-bold">Published: </span>{post.publishedDate}</p>
                        <p>{post.content}</p>
                    </div>
                </div>
            </div>
                    <AppModal show={showModal} onClose={handleCloseModal} onConfirm={handleConfirmDelete} postTitle={post.title}/>
        </div>

  );
};

export default PostPage;