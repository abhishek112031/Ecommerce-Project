
     
window.addEventListener('DOMContentLoaded', () => {
    async function get() {
        try {
            let getResponse = await axios.get("http://localhost:3000/");
            for (let i = 0; i < getResponse.data.length; i++) {

                let eachObj = getResponse.data[i]

                //display on screen:-->
                const parent_node = document.getElementById("products");
                const child_node = `<div class="justify-content-center mt-3 rounded border border-info col-md-3"><div class="col align-item-center">
            <h3 class="text-primary text-center">${eachObj.title}</h3>
            <img class="rounded mx-auto d-block img-thumbnail" height="200" width="190" src="${eachObj.productUrl}" alt="${eachObj.title}">
            <h3 class="text-success text-center">${eachObj.productPrice}$</h3>
            <p class="text-dark text-center fst-italic">${eachObj.productDescription}</p>

            <div class="justify-content-center"><a href="/admin/all-Products/${eachObj.id}" class="btn btn-warning btn-outline-dark">Details</a>
            <a href="#" class="btn ms-5 btn-outline-dark btn-warning">Add to Cart</a></div>
            
            </div></div>`;

                parent_node.innerHTML = parent_node.innerHTML + child_node;

            }

        }
        catch (err) {
            document.body.innerHTML += `<h3>1st ON REFRESH:something went wrong::ref${err}</h3>`


        }

    }
    get();
});

