import { SignedIn, SignedOut, SignInButton, useAuth, UserButton, useUser } from "@clerk/clerk-react";
import "./home.css";
import { useEffect, useState } from "react";
import { getUser } from "../../axios/userAxios";
import UserPreview from "../Protected/UserPreview";

const Home = () => {

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

    useEffect(() => {
        if(user){
            displayToken();
        }
    },[user])


    return(
        <>
            <SignedOut>
                <div className="flex-container">
                    <SignInButton 
                        className="btn-primary"
                    />
                </div>
            </SignedOut>
            <SignedIn>
                <div className="flex-container">
                    <UserButton 
                        className="btn-primary"
                    />
                </div>
                <UserPreview userData={userData}/>
            </SignedIn>
        </>
    )
}

export default Home;