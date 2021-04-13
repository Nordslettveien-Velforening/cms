export default {
    name: "documentCategory",
    title: "Dokumenttyper",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Tittel",
            type: "string",
            validation: (Rule) => Rule.required().error("Feltet er påkrevd"),
        },
        {
            name: "slug",
            title: "Brukervennlig url / alias",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96
            },
            validation: (Rule) => Rule.required().error("Feltet er påkrevd"),
        },
        {
            title: "Kort beskrivelse",
            name: "body",
            type: "blockContent"
        },
        {
            title: "Dokumenter",
            name: "documents",
            type: "array",
            of: [{ type: "documentContent" }]
        }
    ]
}
