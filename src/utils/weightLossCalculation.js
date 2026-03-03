export function weightLossCalculation(inputValues){
    const currentWeight = inputValues.currentWeight;
    const desiredWeight = inputValues.desiredWeight;
    const time = inputValues.time;
    const tdee = inputValues.tdee;
    
    const dailyDeficit = Math.round((3500*(currentWeight - desiredWeight))/(time*7))
    const dailyCaloricIntake = Math.round(tdee -((3500*(currentWeight - desiredWeight))/(time*7)));
    
    return ({dailyCalories: dailyCaloricIntake, dailyDeficit: dailyDeficit});
}