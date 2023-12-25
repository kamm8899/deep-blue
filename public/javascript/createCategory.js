const category = $("#categoryName")
//
/**
* @description This function allows the user to add a new category by providing the
* category name through an input field. The function then sends a POST request to
* the server with the new category data using the Axios library. If the request is
* successful (i.e., no errors), it logs a message to the console indicating that the
* category has been posted.
*/
const addNewCategory = () => {
    let newCategory = {
        category_name: category.val().trim()
    }
    axios.post("/api/category", newCategory)
    .then(console.log("Category posted!"))
    .catch(error => console.log(error));
}




