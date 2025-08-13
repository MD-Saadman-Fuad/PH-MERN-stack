function woodCalculator (chair, table, bed){
    const chairWood = 3;
    const tableWood = 10;
    const bedWood = 50;

    const totalChairWood = chair * chairWood;
    const totalTableWood = table * tableWood;
    const totalBedWood = bed * bedWood;

    const total =  totalChairWood + totalTableWood + totalBedWood;
    return total;
}

console.log(woodCalculator(2, 5, 6));