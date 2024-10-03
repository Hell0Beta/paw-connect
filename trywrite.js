
function write(lat, lon) {
    const fs = require('fs');
    const pup = {
        
        la : lat,
        lo : lon
    }

    const jsonData = JSON.stringify(pup, null, 2);

    fs.writeFile('pos.json', jsonData, (err) => {
        if (err) {
            console.error('Error writing to file', err)      
        }else{
            console.log('Data successfully written to file');
        }
    });    
}