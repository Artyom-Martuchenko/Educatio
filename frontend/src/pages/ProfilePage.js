import Profile from "../components/Profile";
import { useSelector } from "react-redux";

export default function ProfilePage(){
    const data = useSelector((state) => state)
    console.log(data)
    return <Profile data={data}/>;
}