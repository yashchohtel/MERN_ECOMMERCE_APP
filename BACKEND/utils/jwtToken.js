// function to create send and store JWT token for user authentication

export const sendToken = (user, statusCode, res) => {

    // creating JWT token for the user
    const token = user.getJwtToken();

    // options for cookie
    const options = {
        expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000), // cookie expiration time
        httpOnly: true, // cookie is not accessible via JavaScript
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