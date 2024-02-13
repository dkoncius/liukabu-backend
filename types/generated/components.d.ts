import type { Schema, Attribute } from '@strapi/strapi';

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
      'list.paragraph': ListParagraph;
    }
  }
}
