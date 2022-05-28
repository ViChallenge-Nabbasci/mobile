import axios from "axios";

const queryTour = async (byCar, lunch, dinner, onlyFree, withPet, date, categories) => {
    let url = "http://192.168.15.163:8080/getItinerary";

    let payload = {
        byCar: byCar,
        lunch: lunch,
        dinner: dinner,
        onlyFree: onlyFree,
        withPet: withPet,
        data: "2022-05-28",
        categories: categories
    };

    console.log("data: ", JSON.stringify(payload));

    return axios({
        url: url,
        method: "POST",
        validateStatus: () => true, // Don't crash on bad status
        data: payload
    });
}

export {
    queryTour
}
