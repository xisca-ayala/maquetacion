
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
}
