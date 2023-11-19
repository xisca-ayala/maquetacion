
let info_array = [];

function pickInfo(){
        const info = {
                'name': document.getElementById('name').value, 
                'origin': document.getElementById('origin').value, 
                'destination': document.getElementById('destination').value, 
                'paxes': document.getElementById('paxes').value,
                'date': document.getElementById('date').value,
                'email': document.getElementById('email').value
        }
        info_array.push(info);
        console.log(info_array);
}


function filter(){
        let filteredInfo = '';
        info_array.forEach(function(info) {
                if((info.destination.toUpperCase() == 'MALLORCA')
                || (info.destination.toUpperCase() == 'GALICIA') 
                || (info.destination.toUpperCase() == 'CANARIAS') ) {
                        filteredInfo += '<p>Nombre: ' + info.name + '</p>' +
                                        '<p>Origen: ' + info.origin + '</p>' +
                                        '<p>Destino: ' + info.destination + '</p>' +
                                        '<p>Número de personas: ' + info.paxes + '</p>' +
                                        '<p>Fecha: ' + info.date + '</p>' +
                                        '<p>Correo electrónico: ' + info.email + '</p>';
                }
        });
        document.getElementById("showInfo").innerHTML = filteredInfo;
}