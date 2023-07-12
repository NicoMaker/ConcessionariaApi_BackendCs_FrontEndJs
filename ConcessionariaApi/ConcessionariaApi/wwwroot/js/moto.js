const urlMoto = 'moto';
const elementMoto = document.getElementById('element-moto');

getApiData(
    urlMoto,
    'An error occurred while reading the motorbike data',
    (data) => data.forEach((motoData) => elementMoto.appendChild(getDataDiv(motoData)))
);