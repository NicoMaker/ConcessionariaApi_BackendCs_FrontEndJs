const urlAuto = 'auto';
const elementAuto = document.getElementById('element-auto');

getApiData(
    urlAuto,
    'An error occurred while reading the car data',
    (data) => data.forEach((autoData) => elementAuto.appendChild(getDataDiv(autoData, true)))
);