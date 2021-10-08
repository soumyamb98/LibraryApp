const express = require("express");
const adminAuthorsRouter = express.Router();


function applier(nav) {
   
    adminAuthorsRouter.get("/", function (req, res) {
        res.render("addauthors", {
           
            nav,
            title: "library",
            
        });
    });
    
    
    return adminAuthorsRouter;
}
// module.exports = booksRouter;
module.exports = applier;
