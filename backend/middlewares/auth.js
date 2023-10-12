import jwt from "jsonwebtoken"

const auth = (req, res, next) => {
      try {
            // pulling token from request header
            const token = req.headers.token;

            // if token is empty or null or undefined sending bad response
            if (!token) {
                  return res.status(401).json({ sucess: false, message: "Please try again with a valid token!!" })
            }

            // trying to decode the token
            jwt.verify(token, 'himanshu@iNotebook', function (err, decoded) {
                  // setting userId in req object if it's a verified token
                  if (decoded) { req.userId = decoded.userId }

                  // sending asses denial response if it's not a verified token
                  else {
                        console.log(err)
                        return res.status(401).json({ sucess: false, message: "Asses denined!!" })
                  }
            });

            // calling the controller or next function if not getting even a single error
            next();
      }
      catch (e) {
            console.log(e);
            res.status(500).json({ sucess: false, message: "Internal Serval Error(ISE) occured" });
      }
}

// exporting auth middleware
export default auth;