export default {
    name: "mainMenu",
    type: "document",
    title: "Hovedmeny",
    initialValue: {
        title: "Hovedmeny"
    },
    fields: [
        {
            name: "title",
            title: "Tittel",
            type: "string",
            hidden: true
        },
        {
            name: "menuItems",
            title: "Menyelementer",
            type: "array",
            of: [
                { type: "mainMenuItem" }
            ]

        }
    ]
}
