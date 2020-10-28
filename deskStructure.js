import S from '@sanity/desk-tool/structure-builder'
import { MdSettings, MdMenu, MdLibraryBooks } from "react-icons/md"

export default () =>
    S.list()
        .title('Innhold')
        .items([
            S.listItem()
                .title("Hovedmeny")
                .icon(MdMenu)
                .child(
                    S.documentTypeList("rootPage").title("Hovedsider i toppmenyen")
                ),
            S.listItem()
                .title("Innholdssider")
                .icon(MdLibraryBooks)
                .child(
                    S.documentTypeList("contentPage").title("Innholdssider")
                ),
            S.divider(),
            S.listItem()
                .title('Innstillinger')
                .icon(MdSettings)
                .child(
                    S.editor()
                        .schemaType('siteSettings')
                        .documentId('siteSettings')
                )
        ])
