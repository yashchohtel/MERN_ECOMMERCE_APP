// function to create send and store JWT token for user authentication

export const sendToken = (user, statusCode, res) => {

    // creating JWT token for the user
    const token = user.getJwtToken();

    // options for cookie
    const options = {
        httpOnly: true, // cookie is not accessible via JavaScript
        maxAge: 7 * 24 * 60 * 60 * 1000 // Cookie expires in 7 days
    }

    res.status(statusCode).cookie("token", token, options).json({
        success: true,
        message: "Sign-up successful",
        token: token,
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
        }
    })

}