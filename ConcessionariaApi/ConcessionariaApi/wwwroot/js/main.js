function getApiData(param, onErrorString, onSuccess) {
    axios.get(`/api/vehicle?type=${param}`)
        .then((response) => onSuccess(response.data))
        .catch((error) => {
            console.error(`Error when fetching ${dataUrl}:`, error);
            errorDiv.innerText = `${onErrorString}: ${error}`;
        });
}

function getDataDiv(vehicleData, isCar = false) {
    const dati = document.createElement('div');
    const model = document.createElement('div');
    const type = document.createElement('div');
    const displacement = document.createElement('div');
    const colour = document.createElement('div');
    const seats = document.createElement('div');

    dati.className = 'dati';
    model.className = 'model';
    type.className = 'type';
    displacement.className = 'displacement';
    colour.className = 'colour';
    seats.className = 'seats';

    model.innerHTML = vehicleData.model;
    type.innerHTML = vehicleData.type;
    displacement.innerHTML = 'cilindrata veicolo: ' + vehicleData.displacement;
    colour.innerHTML = 'colore veicolo: ' + vehicleData.colour;
    seats.innerHTML = 'posti a sedere veicolo: ' + vehicleData.seats;

    dati.appendChild(model);
    dati.appendChild(type);
    dati.appendChild(displacement);
    dati.appendChild(colour);
    dati.appendChild(seats);

    if (isCar) {
        const ports = document.createElement('div');
        ports.className = "ports";
        ports.innerHTML = 'porte veicolo: ' + vehicleData.port;
        dati.appendChild(ports);
    }
    return dati;
}