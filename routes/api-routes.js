// Requiring all models
var db = require("../models");


module.exports = function(app) {

  app.get("/", (req, res) => {

    db.Burger.findAll({}).then(dbBurger => {

      var dbBurgerObj ={
        burgers: dbBurger
      };
      console.log(dbBurgerObj);
       res.render("index", dbBurgerObj);
     });
   });

  // GET route for getting all of the Burgers
  app.get("/api/burgers", (req, res) => {

    db.Burger.findAll({}).then(dbBurger => {
      res.json(dbBurger);
    });
  });

  // POST route for saving a new Burger
  app.post("/api/burgers", (req, res) => {
    
    db.Burger.create({

      title: req.body.text,
      devoured: req.body.complete

    }).then(dbBurger => {
      res.json(dbBurger);
    })
      .catch((err) => {
        res.json(err);
      });
  });

  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // req.params.id
  app.delete("/api/burgers/:id", (req, res) => {
    // We just have to specify which todo we want to destroy with "where"
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(dbBurger => {
      res.json(dbBurger);
    });

  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/burgers/:id", function(req, res) {

    db.Burger.update({
      devoured: req.body.eaten
    }, {
      where: {
        id: req.params.id
      }
    }).then((dbBurger) =>{
      res.json(dbBurger);
      console.log(dbBurger)
    });
      
  });
};
