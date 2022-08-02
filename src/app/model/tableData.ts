export interface TableItem {
    userId: number,
    id: number,
    title: string,
    body: string
}

export async function getContent() {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    })
        .then((response) => response.json())
        .catch((e) => console.log(e))
}