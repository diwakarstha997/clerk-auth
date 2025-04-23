// clerk test route
import { clerkClient, getAuth, requireAuth } from "@clerk/express";
import express from "express";

const userRouter = express.Router();

// Use requireAuth() to protect this route
// If user isn't authenticated, requireAuth() will redirect back to the homepage
userRouter.get('/protected', requireAuth(), async (req, res) => {
    // Use `getAuth()` to get the user's `userId`
    const { userId } = getAuth(req)
  
    // Use Clerk's JavaScript Backend SDK to get the user's User object
    const user = await clerkClient.users.getUser(userId)
  
    console.log(user);
    return res.json({ user })
  })

export default userRouter;
