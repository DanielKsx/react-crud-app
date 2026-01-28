import Button from "react-bootstrap/Button";

const AppButton = props => {
    return(
        <>
            <Button {...props}>{props.children}</Button>
        </>
    );
};

export default AppButton;