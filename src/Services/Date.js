const baseDate = new Date(Date.now())

export function getOffsetDate(day, hour, minutes) {
    const tmpDate = baseDate
    tmpDate.setDate(tmpDate.getDate() - day);
    tmpDate.setHours(tmpDate.getHours() - hour);
    tmpDate.setMinutes(tmpDate.getMinutes() - minutes);
    return tmpDate.toLocaleString().replace(',', ' ');
}