import {Navigate, Outlet} from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
    const name = useSelector(state => state.name)
    if(name){
        return <Outlet/>
    }else{
        return <Navigate to="/" />
    }
}

export default ProtectedRoute