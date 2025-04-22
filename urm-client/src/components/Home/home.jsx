import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import "./home.css";

const Home = () => {
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