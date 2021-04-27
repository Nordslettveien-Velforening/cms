export default {
    name: "rootPage",
    title: "Hovedside",
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
            title: "Innhold",
            name: "body",
            type: "blockContent",
            validation: (Rule) => Rule.required().error("Feltet er påkrevd"),
        },
        {
            name: "subpages",
            title: "Undersider",
            type: "array",
            description: `For å legge til nye undersider må du først publisere den i "Undersider" i menyen, deretter legge til siden her.`,
            of: [
                {
                    type: "reference",
                    title: "Velg underside",
                    to: { type: "contentSection" }
                }
            ]
        }
    ]
}

