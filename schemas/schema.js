// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import documentCategory from "./documents/documentCategory";
import news from "./documents/news";
import siteSettings from "./documents/siteSettings";
import contentSection from "./documents/contentSection";
import author from "./objects/author";
import documentContent from "./objects/documentContent"
import blockContent from "./fields/blockContent";
import mainMenu from "./documents/mainMenu";
import rootPage from "./documents/rootPage";
import mainMenuItem from "./objects/mainMenuItem";
import blockImage from "./fields/blockImage";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
      rootPage,
      contentSection,
      documentCategory,
      documentContent,
      news,
      mainMenu,
      mainMenuItem,
      siteSettings,
      author,
      blockContent,
      blockImage
  ])
})
