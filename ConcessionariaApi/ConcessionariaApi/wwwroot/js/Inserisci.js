let Model = document.getElementById("Model");
let Displacement = document.getElementById("Displacement");
let Colour = document.getElementById("Colour");
let Seats = document.getElementById("Seats");
let Port = document.getElementById("Port");
let PortField = document.getElementById("PortField");
let valore = "/api/moto";

document.getElementById("Options").addEventListener("change", function () {

    if (this.value === "Car") {
        PortField.style.display = "block";
        valore = "/api/auto";
    } else {
        PortField.style.display = "none";
        valore = "/api/moto";
    }
});

function PostApiData() {

    axios.post(valore, {
        Model: Model.value,
        Displacement: Number(Displacement.value),
        Colour: Colour.value,
        Seats: Number(Seats.value),
        Port: valore === "/api/auto" ? Number(Port.value) : null
    })

        .then((r) => {
            console.log(r)
            document.getElementById("Dati").innerHTML = "i dati sono stati inseriti";
        })
        .catch((e) => {
            document.getElementById("Dati").innerHTML = "i dati non sono stati inseriti " + e;
        })
}