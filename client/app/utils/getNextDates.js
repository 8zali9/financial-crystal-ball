export function getNextDates() {
    let dates = [];
    var currDate = new Date();

    for (let i = 0; i < 7; i++) {
        const date = new Date(currDate);
        date.setDate(currDate.getDate() + i);

        const day = date.getDate();
        const month = date.getMonth() + 1;

        dates[i] = `${day}-${month}`;
    }
    return dates;
}

export function getPreviousDates() {
    let dates = [];
    var currDate = new Date();

    for (let i = 0; i < 7; i++) {
        const date = new Date(currDate);
        date.setDate(currDate.getDate() - i);

        const day = date.getDate();
        const month = date.getMonth() + 1;

        dates.unshift(`${day}-${month}`);
    }
    return dates;
}

