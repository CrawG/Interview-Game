var db = require("../models");

module.exports = function(app) {
  // make a job card 
  app.post("/api/jobs", function(req, res) {
    db.job.create(req.body).then(function(dbJob) {
      res.json(dbJob);
    });
  });

   // make a phrase card 
   app.post("/api/phrases", function(req, res) {
    db.phrase.create(req.body).then(function(dbPhrase) {
      res.json(dbPhrase);
    });
  });


};
