const categories = [
    {
        id: 0,
        categorie: "All",
    },
    {
        id:1,
        categorie:"Informatique",
    },
    {
        id:2,
        categorie:"Electromenager",
    },
    {
        id:3,
        categorie:"Mode et Beauté",
    },
    {
        id:4,
        categorie:"Maison-Décoration",
    },
    {
        id:5,
        categorie:"Sports", 
    },
 ];
const ulCategoriesList = document.getElementById('categories-list');

function display() {
    for (i = 0; i < categories.length; i++) {
        ulCategoriesList.innerHTML = ulCategoriesList.innerHTML + `<li>${categories[i].categorie}</li>`;
    }
}
display();
