import { SignedIn, SignedOut, SignInButton, useAuth, UserButton, useUser } from "@clerk/clerk-react";
import "./home.css";
import { useEffect, useState } from "react";
import { getUser } from "../../axios/userAxios";
import UserPreview from "../../components/Protected/UserPreview";
import { useNavigate } from "react-router";

const DashboardPage = () => {

    const [userData, setUserData] = useState({});
    const { getToken } = useAuth();
    const { user } = useUser();


    const displayToken = async() => {
        const token = await getToken();
        const fetchedUserData = await getUser(token);  
        
        setUserData({
           id: fetchedUserData.user.id,
            imageUrl: fetchedUserData.user.imageUrl,
            firstName: fetchedUserData.user.firstName,
            lastName: fetchedUserData.user.lastName,
            emailAdress: {
                id: fetchedUserData.user.emailAddresses[0].id,
                email: fetchedUserData.user.emailAddresses[0].emailAddress,
                verificationStatus: fetchedUserData.user.emailAddresses[0].verification.status,
                linkedTo: fetchedUserData.user.emailAddresses[0].linkedTo[0].type
            }
        });
    }

    const navigate = useNavigate();

    useEffect(() => {
        if(user){
            displayToken();
        }
        if(!user){
            navigate("/");
        }
    },[user])


    return(
        <>
        <h1>Clerk Authentication System</h1>
            <SignedIn>
                <div>
                    <UserButton 
                    />
                </div>
                <UserPreview userData={userData}/>
            </SignedIn>
        </>
    )
}

export default DashboardPage;