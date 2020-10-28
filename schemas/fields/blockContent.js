import { FaLink, FaExternalLinkAlt } from "react-icons/fa";

export default {
    title: "Block Content",
    name: "blockContent",
    type: "array",
    of: [
        {
            type: "block",
            styles: [
                {title: "Normal", value: "normal"},
                {title: "Overskrift", value: "h2"},
                {title: "Underoverskrift", value: "h3"},
                { title: "Sitat", value: "blockquote" },
            ],
            lists: [
                { title: "Punktmerking", value: "bullet" },
                { title: "Nummerering", value: "number" },
            ],
            marks: {
                decorators: [
                    {title: "Fet", value: "strong"},
                    {title: "Kursiv", value: "em"},
                ],
                annotations: [
                    {
                        name: "internalLink",
                        type: "object",
                        title: "Lenke til intern lenke",
                        icon: FaLink,
                        fields: [

                            {
                                name: "reference",
                                type: "reference",
                                title: "Side",
                                to: [
                                    {type: "rootPage"},
                                    {type: "contentPage"}
                                ]
                            }
                        ]
                    },
                    {
                        name: "link",
                        type: "object",
                        title: "Ekstern lenke",
                        icon: FaExternalLinkAlt,
                        fields: [
                            {
                                name: "href",
                                type: "url",
                                title: "Adresse (URL)"
                            },
                            {
                                title: "Åpne i ny tab",
                                name: "blank",
                                type: "boolean"
                            }
                        ]
                    }
                ]
            }
        },
        {
            type: "image"
        }
    ]
}
