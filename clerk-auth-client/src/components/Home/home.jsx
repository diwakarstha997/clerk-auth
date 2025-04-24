import { SignedIn, SignedOut, SignInButton, useAuth, UserButton, useUser } from "@clerk/clerk-react";
import "./home.css";
import { useEffect } from "react";

const Home = () => {
    const { getToken } = useAuth();
    const { user } = useUser();

    const displayToken = async() => {
        console.log(`Bearer ${await getToken()}`);  
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
            </SignedIn>
        </>
    )
}

export default Home;