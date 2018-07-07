/* 
Activité : gestion des contacts

TODO : compléter le script de cette activité 2
*/
// création du prototype Contacts
var Contacts = {
    init :  function(prenom, nom){
            this.prenom = prenom;
            this.nom = nom;
    },
     
    showContacts : function(){
       var describe = "Nom : " + this.nom + ", prénom : " + this.prenom;
       return describe;
    }    
};

// init les deux premiers contacts 
let contact1 = Object.create(Contacts);
contact1.init("Carole", "Lévisse");
 
let contact2 = Object.create(Contacts);
contact2.init("Mélodie", "Nelsonne");

// création du tableau contenant les contacts
let contacts = [];

// push des deux premiers contacts dans le tableau contacts
contacts.push(contact1);
contacts.push(contact2);

// Affiche options
let options = console.log("Bienvenue dans le gestionnaire de contacts !\n1 : Lister les contacts\n2 : Ajouter un contact\n0 : Quitter");

// prompt pour que l'utilisateur choisisse une option
let userChoice = Number(prompt("Choisissez une option"));

// Boucle while pour que le programme execute les options choisies par l'utilisateur
while (userChoice !== 0) {    
    if (userChoice == 1){
        for(var i = 0; i < contacts.length; i++){
            console.log(contacts[i].showContacts())
        }; 
        options = console.log("1 : Lister les contacts\n2 : Ajouter un contact\n0 : Quitter");
        userChoice = Number(prompt("Choisissez une option"));

    }else if (userChoice == 2 ) {
        var prenom = prompt("Entrez le prénom du nouveau contact :");
        var nom = prompt("Entrez le nom du nouveau contact :");
        var contact = Object.create(Contacts);
        contact.init(prenom, nom);
        contacts.push(contact);
        console.log("Le nouveau contact a été ajouté");       
        options = console.log("1 : Lister les contacts\n2 : Ajouter un contact\n0 : Quitter");
        userChoice = Number(prompt("Choisissez une option"));

    }else {
        console.log("Vous n'avez pas rentrez une option valable");
        options = console.log("1 : Lister les contacts\n2 : Ajouter un contact\n0 : Quitter");
        userChoice = Number(prompt("Choisissez une option"));
    }
    if (userChoice == 0) {
        console.log("Au revoir");    
    }         
}       