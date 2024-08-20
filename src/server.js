import { createServer, Model, Response } from "miragejs"

createServer({
    models: {
        hobbies: Model,
    },

    seeds(server) {
        server.create("hobby", {
            id: "1", name: "Photography", price: 60, description: "Photography is a hobby that allows you to capture the world through your lens. Whether you're into landscapes, portraits, or street photography, this kit has everything you need to get started.", imageUrl: "https://raw.githubusercontent.com/Pefam/react-hobby/main/src/assets/images/photography.png", type: "creative", hostId: "123" })
        server.create("hobby", { id: "2", name: "Gardening", price: 80, description: "Gardening is a peaceful hobby that brings you closer to nature. This kit includes everything you need to start your own garden, from seeds to tools.", imageUrl: "https://raw.githubusercontent.com/Pefam/react-hobby/main/src/assets/images/gardening.png", type: "outdoor", hostId: "123" })
        server.create("hobby", { id: "3", name: "Cooking", price: 100, description: "Cooking is a hobby that can turn into a passion. This kit includes all the essentials you need to start creating delicious meals from scratch.", imageUrl: "https://raw.githubusercontent.com/Pefam/react-hobby/main/src/assets/images/cooking.png", type: "culinary", hostId: "456" })
        server.create("hobby", { id: "4", name: "Painting", price: 65, description: "Painting allows you to express your creativity on canvas. This kit comes with all the paints, brushes, and canvases you need to get started.", imageUrl: "https://raw.githubusercontent.com/Pefam/react-hobby/main/src/assets/images/painting.png", type: "creative", hostId: "789" })
        server.create("hobby", { id: "5", name: "Hiking", price: 120, description: "Hiking is a great way to explore the outdoors and stay fit. This kit includes a durable backpack, water bottle, and all the gear you need for a safe and enjoyable hike.", imageUrl: "https://raw.githubusercontent.com/Pefam/react-hobby/main/src/assets/images/hiking.png", type: "outdoor", hostId: "789" })
        server.create("hobby", { id: "6", name: "Woodworking", price: 70, description: "Woodworking is a rewarding hobby that lets you create beautiful pieces with your own hands. This kit includes the tools and materials needed to get started on your first project.", imageUrl: "https://raw.githubusercontent.com/Pefam/react-hobby/main/src/assets/images/woodworking.png", type: "craft", hostId: "123" })
    },

    routes() {
        this.namespace = "api"
        this.logging = false
        this.timing = 1000

        this.get("/hobbies", (schema, request) => {
            return new Response(400, {}, { error: "Error fetching data" })
            // return schema.hobbies.all()
        })

        this.get("/hobbies/:id", (schema, request) => {
            const id = request.params.id
            return schema.hobbies.find(id)
        })

        this.get("/teacher/hobbies", (schema, request) => {
            // Hard-code the hostId for now
            return schema.hobbies.where({ hostId: "123" })
        })

        this.get("/teacher/hobbies/:id", (schema, request) => {
            // Hard-code the hostId for now
            const id = request.params.id
            return schema.hobbies.findBy({ id, hostId: "123" })
        })
    }
})
