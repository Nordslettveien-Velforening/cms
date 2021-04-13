export default {
    title: "Dokument",
    name: "documentContent",
    type: "object",
    fields: [
        {
            title: "Fil",
            name: "file",
            type: "file",
            options: {
                accept: ".pdf,.xls,.xlsx,.doc,.docx"
            },
            validation: (Rule) => Rule.required().error("Feltet er påkrevd")
        },
        {
            title: "Kort beskrivelse",
            name: "description",
            type: "string"
        },
        {
            title: "Dato",
            name: "date",
            type: "date",
            description: "Dato for gjennomføring av årsmøte, styremøte e.l."
        }
    ]
}
