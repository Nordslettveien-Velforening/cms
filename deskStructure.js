import S from '@sanity/desk-tool/structure-builder'
import { MdSettings, MdMenu, CgFileDocument, BsInfoCircle } from "react-icons/all"

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
                .title("Dokumenter")
                .icon(CgFileDocument)
                .child(
                    S.documentTypeList("documentCategory")
                        .title("Dokumentsamlinger")
                ),
            S.listItem()
                .title("Styret informerer")
                .icon(BsInfoCircle)
                .child(
                    S.documentTypeList("news")
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
