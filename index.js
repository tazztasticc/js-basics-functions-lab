
function distanceFromHqInBlocks(someValue){
    if(someValue > 42){
        return someValue - 42;
    }
    else return 42- someValue;
}

function distanceFromHqInFeet(someValue){
    return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(valueA,valueB){
    if (valueA>valueB){
        return (valueA-valueB)*264;
    }
    else return (valueB-valueA)*264;
}

function calculatesFarePrice(valueA,valueB){
    let distance = distanceTravelledInFeet(valueA,valueB);
    if(distance < 400){
        return 0;
    }
    
    if (distance >2500){
        return 'cannot travel that far';
    }
    if (distance>2000){
        return 25;
    }
    else return (distance - 400) * .02;
}

