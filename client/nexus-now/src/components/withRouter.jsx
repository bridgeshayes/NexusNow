import { useNavigate } from 'react-router-dom';
import React from 'react';

const withRouter = WrappedComponent => {
    const WithRouterWrapper = props => {
        const navigate = useNavigate();
        return <WrappedComponent{...props} navigate={navigate} />;
    }
    return WithRouterWrapper;
}

export default withRouter;