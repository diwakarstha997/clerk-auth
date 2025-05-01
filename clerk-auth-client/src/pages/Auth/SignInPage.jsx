import { SignedOut, SignIn, SignUp } from "@clerk/clerk-react";

const SignInPage = () => {
    return(
        <>
            <SignedOut>
                <div className="d-flex justify-content-center align-items-center vh-100">
                    <SignIn
                    />
                </div>
            </SignedOut>
        </>
    )
}

export default SignInPage;