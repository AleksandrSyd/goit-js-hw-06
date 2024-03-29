const categoriesList = document.querySelector('#categories');
const categoryItems = categoriesList.querySelectorAll('.item');

console.log('Numbers of categories:', categoryItems.length);

categoryItems.forEach(item => {
    const categoryTitle = item.querySelector('h2').textContent;
    const categoryElements = item.querySelectorAll('li').length;

    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryElements}`);
});