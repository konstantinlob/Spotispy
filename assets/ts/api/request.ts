interface requestParameter {
    endpoint: string,
    query?: object,
    body?: object,
    method?: "GET" | "POST" | "PUT",
}

export function request<DataType>({ endpoint, query, body, method }: requestParameter): Promise<DataType> {
    const auth = localStorage.getItem("auth-token");
    if (!auth) {
        navigateTo("/login");
        throw new Error("missing authorization token");
    }

    const url = new URL(`https://api.spotify.com/v1${endpoint}`);
    if (query) {
        Object.entries(query).forEach(([key, value]) => url.searchParams.append(key, value));
    }

    // TODO: catch 429 and make retries

    const response = fetch(url, {
        method: method ?? "GET",
        headers: {
            Authorization: `Bearer ${auth}`,
            "Content-Type": "application/json",
        },
        body: body ? JSON.stringify(body) : undefined,
    }).then((response) => {
        if (response.status === 204) {
            return null;
        }
        if (response.status === 401 || response.status === 403) {
            navigateTo("/login");
            throw new Error(response.status + ": " + response.statusText);
        }
        return response.json();
    }).then<dataType>((data) => { // see https://developer.spotify.com/documentation/web-api/ for possible error responses
        if (data?.error) {
            if (data.error.status) {
                throw new Error(data.error.status + ": " + data.error.message);
            }
            throw new Error(data.error + ": " + data.error_description);
        }
        return data;
    });
}
