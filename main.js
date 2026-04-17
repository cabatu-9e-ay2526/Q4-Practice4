function openGate() {
    let carCounter = 10;
    const maxCar = 25;

    while (carCounter < maxCar) {
        window.alert("Car Number " + carCounter + " is entering"); 
        carCounter += 1;
    }

    window.alert("Garage is full");
}