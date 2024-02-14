import type { Schema, Attribute } from '@strapi/strapi';

export interface LinksSocialLinks extends Schema.Component {
  collectionName: 'components_links_social_links';
  info: {
    displayName: 'socialLinks';
  };
  attributes: {
    instagramLink: Attribute.String;
    youtubeLink: Attribute.String;
    facebookLink: Attribute.String;
  };
}

export interface ListParagraph extends Schema.Component {
  collectionName: 'components_paragraph_paragraphs';
  info: {
    displayName: 'list';
    description: '';
  };
  attributes: {
    listItem: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'links.social-links': LinksSocialLinks;
      'list.paragraph': ListParagraph;
    }
  }
}
