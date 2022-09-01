export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '90cd56673emshc051da503badc65p1bb4a3jsn3ad3dcdc0c00',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
}

export const fetchData = async (url, options) => {
    const response = await fetch(url, options)
    const data = await response.json()
    return data
}