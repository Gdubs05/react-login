export function tdeeCalculation(inputValues){
    let genderVariable;
    if(inputValues.gender === 'male'){
        genderVariable = 5;
    }
    if(inputValues.gender === 'female'){
        genderVariable = -161;
    }

    const bmrCalories = ( 
        (10 * (parseInt(inputValues.weight)/2.205)) 
        + (6.25 * (inputValues.height * 2.54)) 
        - (inputValues.age * 5) 
        + genderVariable
    )

    const tdeeCalories = (bmrCalories * parseFloat(inputValues.activity));
    
    console.log(bmrCalories);
    console.log(tdeeCalories);

    return (tdeeCalories);
}