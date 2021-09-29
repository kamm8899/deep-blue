
//get categories for the selection form
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

// funciton that will save new product to database
async function addNewProduct(){
    //Will work on this
    
}

getCategories();