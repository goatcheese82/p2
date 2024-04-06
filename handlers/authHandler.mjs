// Authentication Middleware
const isAuthenticated = (req, res, next) => {
   if (req.isAuthenticated()) {
       // If the user is authenticated, proceed to the next middleware
       return next();
   } else {
       // If the user is not authenticated, redirect to the login page or send an error response
       res.redirect('/auth/google');
   }
};

// Authorization Middleware
const isAuthorized = (req, res, next) => {
   // Check if the authenticated user has the necessary permissions
   // You can implement your own logic here based on user roles, permissions, etc.
   if (req.user && req.user.isAdmin) {
       // If the user is authorized, proceed to the next middleware
       return next();
   } else {
       // If the user is not authorized, send a 403 Forbidden response
       res.status(403).send("You are not authorized to access this resource");
   }
};


export default { isAuthenticated, isAuthorized }