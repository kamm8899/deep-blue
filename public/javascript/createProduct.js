//get all the values from the form to saveld
//d
const productName = $('#productName');
const price = $('#price');
const stock = $('#stock');
const categoryId = $('#categoryId');

$(document).ready(function() {
    //get categories for the selection form
/**
* @description This function retrieves the list of categories from the API using
* axios and populates a select element with the category names and IDs.
*/
    const getCategories = () => {
        axios.get("/api/category")
        .then(response => {
            const cat = response.data;
            console.log(cat);
            for(let i = 0; i<cat.length; i++){
                const categoryId = cat[i].id;
                const categoryName = cat[i].category_name;
                let option = $("<option>").text(categoryName).val(categoryId);
                $(".form-select").append(option);
            }
        })
        .catch(error => console.log(error));
    }
   
    getCategories();
});  

// funciton that will save new product to database
/**
* @description This function adds a new product to the server using an API call to
* /api/product. It takes the values from various form fields (product name. price.
* stock level. category ID) and creates an object with those values.
*/
const addNewProduct = () => {
    //object that holds all the values 
    let newProduct = {
        product_name: productName.val().trim(),
        price: price.val().trim(),
        stock: stock.val().trim(),
        category_id: categoryId.val().trim()
    };

    //send the object to the post request using axios
    axios.post("/api/product", newProduct)
    .then(console.log("Product posted!"))
    .catch(error => console.log(error));
};
// getCategories();



