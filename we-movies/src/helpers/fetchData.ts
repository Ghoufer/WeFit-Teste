const baseUrl = 'http://localhost:3001/'

export default async function fetchData<T>(resourceUrl: string): Promise<T> {
    return fetch(baseUrl + resourceUrl).then(response => {
        // fetching the reponse body data
        return response.json()
    })
}