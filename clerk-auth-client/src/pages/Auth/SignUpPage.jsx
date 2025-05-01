import { SignedOut, SignUp } from "@clerk/clerk-react";

const SignUpPage = () => {
    return(
        <>
            <SignedOut>
                <div className="d-flex justify-content-center align-items-center vh-100">
                    <SignUp
                    />
                </div>
            </SignedOut>
        </>
    )
}

export default SignUpPage;