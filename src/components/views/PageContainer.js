
const PageContainer = props => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 offset-md-1">
                    {props.children}
                </div>
            </div>
        </div> 
    );
};

export default PageContainer;        
