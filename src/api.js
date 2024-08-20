export async function getHobbies() {
    const res = await fetch("/api/hobbies")
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