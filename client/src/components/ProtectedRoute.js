import { useNavigate } from 'react-router-dom'
function ProtectedRoute(props){
    const navigate = useNavigate()
    // const user = props.user;
    const user = true;
    console.log(user, "hello")
    if (!user) {
        navigate("/login")
    }
    return (
        props.children
    )
}

export default ProtectedRoute