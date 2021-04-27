export default {
    title: "Bilde med bildetekst",
    name: "blockImage",
    type: "object",
    fields: [
        {
            title: "Bilde",
            name: "bilde",
            type: "image",
        },
        {
            title: "Bildetekst",
            name: "caption",
            type: "string",
        },
        {
            title: "Beskrivende tekst for bilde (for skjermlesere)",
            name: "alt",
            type: "string",
        },
    ],
};
