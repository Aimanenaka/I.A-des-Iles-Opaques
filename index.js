const  Discord  =  require ( ' discord.js ' );
const  bot  =  new  Discord.Client ();

préfixe var = ( " / " )
var randnum =  0

bot . on ( ' prêt ' , fonction () {
    bot . utilisateur . setUsername ( " I.A des Iles Opaques " )
    bot . utilisateur . setPresence ({jeu : {nom :  ' Calculer le nombre d'Habitant ' }, statut : 'en ligne'})
    console . log ( " Connecté " )
});

bot . login ( processus . env . JETON );


bot . sur ( ' message ' , message  => {

if ( message . content . startsWith ( "/test" )) {
   message . canal . send (`Hey petit test`)
