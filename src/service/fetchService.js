const BASE_URL = process.env.BASE_URL;

const headers = new Headers();

export async function get(path) {
    headers.set("Content-Type", "application/json");

    return await fetchService(
        new Request(`${BASE_URL}${path}`, { method: "get", headers })
    );
}

async function fetchService(request) {
    const response = await fetch(request);

    if (!response.ok) {
        throw new Error(
            `Request failed: ${response.status} ${response.statusText}`
        );
    }

    const result = await response.json();

    return result;
}
