 let num1 = document.getElementById("num1");
        let num2 = document.getElementById("num2");
        
        function calculate() {
            let result = parseInt(num1.value) + parseInt(num2.value);
            document.getElementById("result").innerHTML = "Result: " + result;
        }

        //array
        let numbers = [5, 10, 15, 20, 25];
        console.log(numbers[2]);

        //object
        let person = {
            make: "Kubota",
            model: "Camry",
            year: 2020
            run: function() {
                console.log("The car is running");
            }
        };
        console.log(person.make);
        console.log(car.model);

       $(document).ready(() => {
       

        $("#calculate").click(() => {
            let num1 = $("#num1").val();
        let num2 = $("#num2").val();
            let result = parseInt(num1) + parseInt(num2);
            $("#result").html(result);
        });

       });