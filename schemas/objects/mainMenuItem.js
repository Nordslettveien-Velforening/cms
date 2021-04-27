import IconInput from "../../components/IconInput";

export default {
    title: "Menyelement",
    name: "mainMenuItem",
    type: "object",
    fields: [
        {
            title: "Menytekst",
            type: "string",
            name: "title",
            validation: (Rule) => Rule.required().error("Feltet er påkrevd")
        },
        {
            title: "Menyikon",
            name: "icon",
            type: "string",
            inputComponent: IconInput,
            validation: (Rule) => Rule.required().error("Feltet er påkrevd")
        },
        {
            title: "Hovedside",
            name: "rootPage",
            type: "reference",
            to: [
                { type: "rootPage" }
            ],
            validation: (Rule) => Rule.required().error("Feltet er påkrevd")
        }
    ]
}
