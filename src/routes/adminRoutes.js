const express = require("express");
const adminRouter = express.Router();


function applier(nav) {
   
    adminRouter.get("/", function (req, res) {
        res.render("addbooks", {
           
            nav,
            title: "library",
            
        });
    });
    
    
    return adminRouter;
}
// module.exports = booksRouter;
module.exports = applier;
