import PageTitle from '../common/PageTitle';
import PostCards from '../features/PostCards';
import AppButton from '../common/Button';
import { Link } from 'react-router-dom';

const HomePage = () => {
 

    return (
        <>
        <div className="d-flex align-items-center mb-3">
            <PageTitle>All posts</PageTitle>
            <div className="ms-auto">
                <Link to={`/post/add`}>
                <AppButton variant="outline-primary" className="me-2">Add post</AppButton>
                </Link>
            </div>
        </div>
            <PostCards />
        </>
    );
};

export default HomePage;