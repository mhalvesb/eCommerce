const localStrategy = require("passport-local").Strategy;
const passport = require("passport");
const Usuario = require("../db/users.js");



module.exports = function(passport){
    passport.use(new localStrategy({usernameField: "email", passwordField: "senha"}, (email, senha, done) =>{
        Usuario.findOne({where: {email: email}}).then((usuario) =>{
            if(!usuario || usuario === undefined || usuario === null){
                return done(null, false, {message: "Conta inexistente"});
            }

            if(senha == usuario.senha){
                return done(null, usuario);
            }
            else{
                return done(null, false, {message: "Senha incorreta"});
            }
        })
    }));
}
passport.serializeUser((usuario, done) =>{
        done(null, usuario.id);
});


passport.deserializeUser((id, done)=>{
    Usuario.findByPk(id).then(user =>{
        done(null, user);
    });
})