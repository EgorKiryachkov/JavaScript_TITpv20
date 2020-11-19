console.log("Hello, World!");
let name = "Egor Kiryachkov";
let age = 16;
let born = true;
let city = "Moscow";
let commentary = "";
let drivingLicense = "";
console.log(`Character: ${name}. Age: ${age}. City: ${city}.`);

if(born){
    commentary = "Lover of military marches was born";
} else {
    commentary = "There is no this military marches lover";
}
console.log(`character ${name} ${commentary}`);

if(age < 18) {
    drivingLicense = `${name} is too young to drive a car.`;
} else {
    drivingLicense = `${name} is old enough to drive a car.`;
}

console.log(drivingLicense);

const html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>City: ${city}</li>
        <li>${commentary}</li>
        <li>${drivingLicense}</li>
    </ul>
`;

document.body.innerHTML = html;