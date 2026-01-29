import PageTitle from '../common/PageTitle';
import EditPostForm from '../features/EditPostForm';
import PageContainer from '../views/PageContainer'

const EditPostPage = props => {
    return (
        <PageContainer>
            <PageTitle>Edit Post</PageTitle>
            <EditPostForm />
        </PageContainer>
    );
};

export default EditPostPage;