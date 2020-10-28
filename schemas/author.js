export default {
    name: "author",
    title: "Forfatter",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Navn",
            type: "string"
        },
        {
            name: "slug",
            title: "Brukervennlig url / alias",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96
            }
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
