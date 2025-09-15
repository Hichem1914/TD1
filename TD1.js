console.log("Hello world"); 


/*Page 32: */ 

/*Exercice 1: Déclarez une variable pour stocker une température en degrés Celsius.
Convertissez cette température en degrés Fahrenheit en utilisant la
formule : F = C * 9/5 + 32.
Affichez la température en degrés Celsius et Fahrenheit*/


let temperature_celsius = 30; 

let temperature_fahrenheit = (temperature_celsius * 9/5) + 32; 

console.log("Température en Celsius : " + temperature_celsius + "°C");
console.log("Température en Fahrenheit : " + temperature_fahrenheit + "°F");


/*  
Exercice 2 :
Déclarez deux variables pour stocker la longueur et la largeur d'un
rectangle.
Calculez l'aire du rectangle en multipliant la longueur par la largeur.
Affichez le résultat.
*/

let longueur = 10; 
let largeur = 5;

let aire_rectangle = longueur * largeur; 

console.log("l'air du rectangle est : " + aire_rectangle); 



/*
Exercice 3 :
Déclarez deux variables pour stocker un prénom et un nom.
Concaténez les deux variables pour former une chaîne complète.
Affichez la chaîne complète.
*/

let prenom = "hichem";

let nom = "chellal";

let nom_prenom = prenom + nom; 

console.log(nom_prenom); 


/*
Exercice 4 :
Déclarez une variable pour stocker le montant HT (hors taxe) d'un
produit.
Déclarez une constante pour stocker le taux de TVA (par exemple, 20%).
Calculez le montant TTC (toutes taxes comprises) en ajoutant la TVA au
montant HT.
Affichez le montant HT, le montant de la TVA et le montant TTC
*/


let montant_HT = 50; 

const taux_TVA = 0.2;

let montant_TVA = montant_HT * taux_TVA; 

let montant_TTC = montant_HT + montant_TVA; 

console.log("montant_HT = " + montant_HT); 

console.log("montant_tva = " + montant_TVA); 

console.log("montant_ttc = " + montant_TTC); 


/*
Exercice 5 :
((4 >= 6) || ("herbe" != "verte")) && !(((12 * 2) == 144) && true)
Est-ce true ?
*/


/*Exercice 6 :
Déclarez deux variables pour stocker le poids en kilogrammes et la taille
en mètres d'une personne.
Calculez l'indice de masse corporelle (IMC) en utilisant la formule :
IMC = poids / (taille * taille).*/

let poids = 80; 

let taille = 180; 

let imc = poids / (taille * taille); 
imc.toFixed(2); 

console.log("imc de la personne : " + imc); 


/*
Exercice 7 :
Déclarez une constante pour le montant minimum de commande pour la
livraison gratuite.
Déclarez une variable pour le montant total de la commande.
Si le montant total est supérieur ou égal au montant minimum, affichez
"Livraison gratuite !".
Sinon, affichez "Frais de livraison : X euros"
*/


const montant_Min = 20; 

let montant_Total = 30; 

if(montant_Total >= montant_Min) {
    console.log("livraison gratuite !"); 
} else {
    let frais_livraison = 5.99; 
    console.log("frais de livraison : " + frais_livraison); 
}


/*
Exercice 8 :
Déclarez une variable pour stocker un nombre binaire en String
Convertissez cette variable en décimal en utilisant la fonction parseInt().
Affichez le nombre binaire et sa conversion décimale.
*/


let nb_binaire = "1010"; 

let decimal = parseInt(nb_binaire, 2); 

console.log("nombre en binaire : " + nb_binaire + " et convertit en décimal " + decimal); 