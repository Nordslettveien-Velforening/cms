
export default {
    name: "contentSection",
    title: "Innholdselement",
    description: "Innholdselementer kan brukes som toppnivåsider i hovedmenyen, eller underelementer til en toppnivåside.",
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
    ]
}

