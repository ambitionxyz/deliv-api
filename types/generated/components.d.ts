import type { Schema, Attribute } from '@strapi/strapi';

export interface TagNameTag extends Schema.Component {
  collectionName: 'components_tag_name_tags';
  info: {
    displayName: 'Tag';
    icon: 'apps';
  };
  attributes: {
    Name: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'tag-name.tag': TagNameTag;
    }
  }
}
