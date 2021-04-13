// siteSettings.js
export default {
    name: "siteSettings",
    type: "document",
    title: "Innstillinger for nettstedet",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Hovedtittel",
            description: "Synlig i tittelfeltet i nettleseren og viktig bl.a. for søkemotorer"
        },
        {
            name: "description",
            type: "text",
            title: "Beskrivelse av nettsiden",
            description: "Brukes primært av søkemotorer og sosiale media. Ikke direkte synlig på nettsidene."
        },
        {
            name: "keywords",
            type: "array",
            title: "Nøkkelord",
            description: "Stikkord som beskriver siden. Brukes bl.a. av søkemotorer.",
            of: [{type: "string"}],
            options: {
                layout: "tags"
            }
        },
        {
            name: "author",
            type: "reference",
            title: "Ansvarlig for siden",
            to: [{type: "author"}]
        }
    ]
}
