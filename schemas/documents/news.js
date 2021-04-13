export default {
    title: "Styret informerer",
    name: "news",
    type: "document",
    fields: [
        {
            title: "Overskrift",
            name: "title",
            type: "string",
            validation: (Rule) => Rule.required().error("Feltet er påkrevd"),
        },
        {
            title: "Innhold",
            name: "body",
            type: "blockContent",
            validation: (Rule) => Rule.required().error("Feltet er påkrevd"),
        }
    ]
}
