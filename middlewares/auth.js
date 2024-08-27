export const checkUserSession = (req, res, next) => {
    console.log(req.session);
    if (req.session.user) {
        next();
    } else {
       res.status(401).json('No user session')
    }
}