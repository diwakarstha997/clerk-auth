import { SignedOut } from "@clerk/clerk-react";
import "./home.css";
import { Link } from "react-router";

const Home = () => {

    return(
        <>
        <h1>Clerk Authentication System</h1>
            <SignedOut>
                <Link to="">
                    Get Started
                </Link>
            </SignedOut>
        </>
    )
}

export default Home;