const category = $("#categoryName")

/**
* @description This function adds a new category to the database via an API call to
* "/api/category".
*/
const addNewCategory = () => {
    let newCategory = {
        category_name: category.val().trim()
    }
    axios.post("/api/category", newCategory)
    .then(console.log("Category posted!"))
    .catch(error => console.log(error));
}



