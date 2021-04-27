import S from '@sanity/desk-tool/structure-builder'
import { BiCog, BiArchive, BiBookmark, BiBookmarks, BiMenu, BiInfoCircle     } from "react-icons/all"

export default () =>
    S.list()
        .title('Innhold')
        .items([
            S.listItem()
                .title("Hovedsider")
                .icon(BiBookmark)
                .child(
                    S.documentTypeList("rootPage")
                        .title("Hovedsider")
                ),
            S.listItem()
                .title("Undersider")
                .icon(BiBookmarks)
                .child(
                    S.documentTypeList("contentSection")
                        .title("Undersider")
                ),
            S.listItem()
                .title("Dokumenter")
                .icon(BiArchive)
                .child(
                    S.documentTypeList("documentCategory")
                        .title("Dokumentsamlinger")
                ),
            S.listItem()
                .title("Styret informerer")
                .icon(BiInfoCircle)
                .child(
                    S.documentTypeList("news")
                ),
            S.divider(),
            S.listItem()
                .title("Menystruktur")
                .icon(BiMenu)
                .child(
                    S.editor()
                        .schemaType('mainMenu')
                        .documentId('mainMenu')
                ),
            S.listItem()
                .title('Innstillinger')
                .icon(BiCog)
                .child(
                    S.editor()
                        .schemaType('siteSettings')
                        .documentId('siteSettings')
                )
        ])
