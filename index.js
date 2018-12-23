const  Discord  =  require ( ' discord.js ' );
const  bot  =  new  Discord.Client ();

préfixe var = ( " / " )
var randnum =  0

bot.on('prêt',fonction(){
    bot.utilisateur.setUsername(" I.A des Iles Opaques ")
    bot.utilisateur.setPresence({jeu : {nom :'Calculer le nombre d'Habitant'}, statut :'en ligne'})
    console.log("Connected")
});

bot.login(processus .env.TOKEN);


bot . sur ( ' message ' , message  => {

if ( message . content . startsWith ( "/test" )) {
   message . canal . send (`Hey petit test`)
