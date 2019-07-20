var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
  host: "localHost",
  port: 3306,
  user: "root",
  password: "password",
  database: "bamazon_db"
});

connection.connect(function(err) {
    if (err) throw err;
    buyProduct();
});

function buyProduct() {
    connection.query("SELECT * FROM products", function(err, results) {
        if (err) throw err;
        console.table(results);

        inquirer.prompt([
              {
                name: "productID",
                type: "number",
                message: "What item ID would you like to purchase?"
              },
              {
                    name: "numProducts",
                    type: "number",
                    message: "How many units would you like to purchase?"
              }
            ])
            .then(function(answer) {
            var chosenProduct;
                for (var i = 0; i < results.length; i++) {
                    if (results[i].id === answer.productID) {
                        chosenProduct = results[i];
                    }
                }
             
         if (chosenProduct.stock_quantity > parseInt(answer.numProducts)) {
                    connection.query(
                        "UPDATE products SET ? WHERE ?",
                        [
                            {
                                stock_quantity: chosenProduct.stock_quantity - answer.numProducts
                            },
                            {
                                id: chosenProduct.id
                            }
                        ],
                    function(error) {
                        if (error) throw err;
                        var total = chosenProduct.price * answer.numProducts;
                        console.log("Your order was placed!  " + "Your total is: " + total);
                        // buyProduct();
                    });
            
                }
                 else {
                    console.log(chosenProduct.stock_quantity);
                    console.log(answer.numProducts);
                    console.log("Insufficient quantity! There was not enough stock to place your order");
                    buyProduct();
                }
            });
    });
}
