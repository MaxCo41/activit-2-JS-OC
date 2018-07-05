/*
Activité : gestion des contacts
*/
 
console.log("Bienvenue dans le gestionnaire de contacts !\n1 : Lister les contacts\n2 : Ajouter un contact\n0 : Quitter");
 
var Contacts = {
    init :  function(prenom, nom){
            this.prenom = prenom;
            this.nom = nom;
    },
     
    showContacts : function(){
       var describe = "Nom : " + this.nom + ", prénom : " + this.prenom;
       return describe;
    },
     
    addContact : function(prenom , nom){
                var createContacts = Object.create(Contacts);
                createContacts.init(prenom, nom);
                return createContacts;
    }     
};
 
var contact1 = Object.create(Contacts);
contact1.init("Carole", "Lévisse");
 
var contact2 = Object.create(Contacts);
contact2.init("Mélodie", "Nelsonne");
 
var contacts = [contact1, contact2];

console.log(contacts);
 
 
 option = ["1: afficher la liste des contacts", "2: ajouter un nouveau contact", "0: quitter"]
 
var userChoice = Number(prompt("Choisissez une option"));
 
while(userChoice !== 0){
    console.log("1 : Lister les contacts");
    console.log("2 : Ajouter un contact");
    console.log("0 : Quitter");
    var choix = prompt("Choisissez une option :");

switch(userChoice){
    case 1 :    for(var i = 0; i < contacts.length; i++){
                console.log(contacts[i].showContacts())
                } 
                userChoice = Number(prompt("Choisissez une option"));
                break;
         
    case 2 :    var nom = prompt("Entrez le nom du nouveau contact :");
                var prenom = prompt("Entrez le prénom du nouveau contact :");
                var contact = Object.create(Contacts);
                contact.init(prenom, nom);
                contacts.push(contact);
                console.log("Le nouveau contact a été ajouté");       
                userChoice = Number(prompt("Choisissez une option"));
                break;
         
    case 0 :    console.log("Au revoir");
                break;
         
    default :   for (let i = 0; i < option.length; i++) {
                option[i];
                }  
} 
}         

 
 
// TODO : complétez le programme