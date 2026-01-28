import PageTitle from '../common/PageTitle';
import AddPostForm from '../features/AddPostForm';
import PageContainer from '../views/PageContainer';

const AddPostPage = props => {
    return (
        <PageContainer>
            <PageTitle>Add Post</PageTitle>
            <AddPostForm/> 
        </PageContainer>

    );
};

export default AddPostPage;