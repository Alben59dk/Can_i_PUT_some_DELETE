var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//une route (/users/[prénom]) acceptant le GET pour afficher le formulaire de update-user.pug
router.get('/:user(\[a-z]+)', (req, res, next) => {
  res.render('update-user', {user: req.params.user});
});

//une route (/users/[prénom]) acceptant le PUT et prenant en paramètre dans l'URL une chaîne de caractères, qui affichera The new name is [prénom]
router.put('/:user(\[a-z]+)', (req, res, next) => {
  res.send('My name is ' + req.params.user);
});

//une route (/users/[numéro]) acceptant le GET pour afficher le formulaire de delete-user.pug
router.get('/:id(\\d+)', (req, res, next) => {
  res.render('delete-user', {id: req.params.id});
});

//une route (/users/[numéro]) acceptant le DELETE et prenant en paramètre dans l'URL un entier, qui affichera No more user with id [numéro]
router.delete('/:id(\\d+)', (req, res, next) => {
  res.send('No more user with id ' + req.params.id);
});

module.exports = router;
