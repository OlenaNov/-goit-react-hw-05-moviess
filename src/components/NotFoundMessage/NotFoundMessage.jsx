import { Logo, Message, StyledLink, Wrapper } from "./NotFoundMessage.styled";

const NotFoundMessage = () => {

    return (
        <Wrapper>
            <Message>
                OOps! Page not found!
                Maybe the page is out of date.
                Want to return to 
            </Message>
            <StyledLink to='/'>
                <Logo />
                Home page?
            </StyledLink>
        </Wrapper>
    );
};

export default NotFoundMessage;