function sleep(ms) {
    return new Promise(resolve => setTimeout(() => resolve(), ms))
}

export async function getHobbies(id) {
    const url = id ? `/api/hobbies/${id}` : "/api/hobbies"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch hobbies",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.hobbies
}

export async function getTeacherHobbies(id) {
    const url = id ? `/api/teacher/hobbies/${id}` : "/api/teacher/hobbies"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch hobbies",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.hobbies
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}