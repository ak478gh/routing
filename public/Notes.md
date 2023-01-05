
Routing-III

Navigate Hook
    importing -> import { Navigate } from 'react-router-dom';

    Using -> <Navigate to='/path'>

useNavigate Hook
    importing:
    import { useNavigate } from 'react-router-dom';

    creating an instance:
    const navigate = useNavigate();

    Using:
    <Navigate to='/path'>

useSearchParams Hook
    importing:
    import { useSearchParams } from 'react-router-dom';

    const [searchParams, setSearchParams] = useSearchParams

    retrive:
    searchParams.get('param')