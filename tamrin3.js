let grades = {
    math: 18,
    physics: 9,
    programming: 20,
    database: 14,
    english: 7
};

for (let dars in grades) {
    if (grades[dars] < 10) {
        console.log(dars + ": mardod");
    } else if (grades[dars] <= 15) {
        console.log(dars + ": motevaset");
    } else {
        console.log(dars + ": ali");
    }
}