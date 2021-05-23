export function queryGET(location) {
    const GETs = location.search.slice(1).split('&');
    const GET = {}
    GETs.forEach(get => {
        const splitGet = get.split('=');
        GET[splitGet[0]] = splitGet[1];
    })
    return GET;
}