import { SignedOut } from "@clerk/clerk-react";
import "./home.css";
import { Link } from "react-router";

const Home = () => {

    return(
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
            <h1>Clerk Authentication System</h1>
            <SignedOut>
                <Link to="/auth/login" className="btn btn-dark rounded-5">
                    Get Started
                </Link>
            </SignedOut>
        </div>
    )
}

export default Home;