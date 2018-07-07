/* /*
Activité : gestion des contacts
*/
 

 
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
 
let contact1 = Object.create(Contacts);
contact1.init("Carole", "Lévisse");
 
let contact2 = Object.create(Contacts);
contact2.init("Mélodie", "Nelsonne");

let contacts = [];
contacts.push(contact1);
contacts.push(contact2);
contacts = [contact1, contact2];
 
 
/* let options = ["1: afficher la liste des contacts", "2: ajouter un nouveau contact", "0: quitter"];*/

let options = console.log("Bienvenue dans le gestionnaire de contacts !\n1 : Lister les contacts\n2 : Ajouter un contact\n0 : Quitter");
let userChoice = Number(prompt("Choisissez une option"));

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
        
    }else if (userChoice == 0) {
        console.log("Au revoir");
    
    }else {
        console.log("Vous n'avez pas rentrez une option valable");
        options = console.log("1 : Lister les contacts\n2 : Ajouter un contact\n0 : Quitter");
        userChoice = Number(prompt("Choisissez une option"));
    }         
}       

 
 
// TODO : complétez le programme */