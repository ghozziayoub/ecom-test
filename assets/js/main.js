const categories = [
    {
        id: 0,
        name: "All",
    },
    {
        id:1,
        name:"Informatique",
    },
    {
        id:2,
        name:"Electromenager",
    },
    {
        id:3,
        name:"Mode et Beauté",
    },
    {
        id:4,
        name:"Maison-Décoration",
    },
    {
        id:5,
        name:"Sports", 
    },
 ];
const ulCategoriesList = document.getElementById('categories-list');


function displayCategories() {
    for (i = 0; i < categories.length; i++) {
        ulCategoriesList.innerHTML = ulCategoriesList.innerHTML + `<li>${categories[i].name}</li>`;
    }
}
displayCategories();


// 
