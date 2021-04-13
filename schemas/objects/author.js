export default {
    name: "author",
    title: "Forfatter",
    type: "object",
    fields: [
        {
            name: "name",
            title: "Navn",
            type: "string"
        },
        {
            name: "image",
            title: "Bilde",
            type: "image",
            options: {
                hotspot: true
            }
        }
    ],
    preview: {
        select: {
            title: "name",
            media: "image"
        }
    }
}
