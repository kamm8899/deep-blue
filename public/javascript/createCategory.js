const category = $("#categoryName")

const addnNewCategory = () => {
    let newCategory = {
        category_name: category.val().trim()
    }
    axios.post("/api/category", newCategory)
    .then(console.log("Category posted!"))
    .catch(error => console.log(error));
}