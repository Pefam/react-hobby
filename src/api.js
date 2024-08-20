export async function getHobbies() {
    const res = await fetch("/api/hobbies")
    const data = await res.json()
    return data.hobbies
}