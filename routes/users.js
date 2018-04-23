let express = require('express')
let router = express.Router()

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

//--> une route (/users/[prénom]) acceptant le GET pour afficher le formulaire de update-user.pug

router.get('/:prenom([\\a-zA-Z]+)', function (req, res, next) {
  res.render('update-user')
})

// --> une route (/users/[prénom]) acceptant le PUT et prenant en paramètre dans l'URL une chaîne de caractères, qui affichera The new name is [prénom]

router.put('/:prenom', function(req, res, next) {
  res.send('The new name is ' + req.body.prenom)
})

// //--> une route (/users/[numéro]) acceptant le GET pour afficher le formulaire de delete-user.pug

router.get('/:numero([\\d]+)', function (req, res, next) {
  res.render('delete-user')
})

// // -- > une route (/users/[numéro]) acceptant le DELETE et prenant en paramètre dans l'URL un entier, qui affichera No more user with id [numéro]

router.delete('/:numero', function (req, res, next) {
  res.send('No more users with id ' +  req.body.numero)
})

module.exports = router
