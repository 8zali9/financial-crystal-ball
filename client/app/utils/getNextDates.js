export function getNextDates() {
    let dates = []
    var currDate = new Date()

    for (let i = 0; i < 7; i++) {
        const date = new Date(currDate)
        date.setDate(currDate.getDate() + i)

        dates[i] = `${date.getDay()}-${date.getMonth() + 1}`
    }
    return dates
}