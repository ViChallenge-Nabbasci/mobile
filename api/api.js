import axios from "axios";

const queryTour = async (byCar, lunch, dinner, onlyFree, withPet, date, categories, fromDate) => {
    let url = "umpalumpa";
    let payload = {
        byCar: byCar,
        lunch: lunch,
        dinner: dinner,
        onlyFree: onlyFree,
        withPet: withPet,
        date: date,
        categories: categories,
        fromData: fromDate
    };

    return axios({
        url: url,
        method: "POST",
        validateStatus: () => true, // Don't crash on bad status
        headers: {
            "Content-Type": "application/json application/text */*"
        },
        body: JSON.stringify(payload)
    });
}

export {
    queryTour
}
