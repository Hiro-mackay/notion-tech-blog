import { External, Icon } from '.';

export interface BaseObject {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  archived: boolean;
  icon: Icon;
  cover: External;
  properties: Properties;
  parent: {
    type: 'page_id' | 'workspace';
  };
  url: string;
}

export type RichTextColor =
  | 'default'
  | 'gray'
  | 'brown'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'purple'
  | 'pink'
  | 'red'
  | 'gray_background'
  | 'brown_background'
  | 'orange_background'
  | 'yellow_background'
  | 'green_background'
  | 'blue_background'
  | 'purple_background'
  | 'pink_background'
  | 'red_background';

export interface TextAnnotations {
  bold?: boolean;
  italic?: boolean;
  strikethrough?: boolean;
  underline?: boolean;
  code?: boolean;
  color?: RichTextColor;
}

export interface RichTextObject {
  type: 'text' | 'mention' | 'equation';
  annotations?: TextAnnotations;
  plain_text: string;
  href?: string | null;
}

export interface TextObject extends RichTextObject {
  type: 'text';
  text: {
    content: string;
    link?: { url: TextRequest } | null;
  };
}

export interface MentionObject extends RichTextObject {
  type: 'mention';
  mention:
    | {
        type: 'user';
        user:
          | { id: IdRequest; object: 'user' }
          | {
              type: 'person';
              person: { email: string };
              name: string | null;
              avatar_url: string | null;
              id: IdRequest;
              object: 'user';
            }
          | {
              type: 'bot';
              bot:
                | Record<string, never>
                | {
                    owner:
                      | {
                          type: 'user';
                          user:
                            | {
                                type: 'person';
                                person: { email: string };
                                name: string | null;
                                avatar_url: string | null;
                                id: IdRequest;
                                object: 'user';
                              }
                            | {
                                id: IdRequest;
                                object: 'user';
                              };
                        }
                      | { type: 'workspace'; workspace: true };
                  };
              name: string | null;
              avatar_url: string | null;
              id: IdRequest;
              object: 'user';
            };
      }
    | {
        type: 'date';
        date: { start: string; end: string | null };
      }
    | { type: 'page'; page: { id: IdRequest } }
    | { type: 'database'; database: { id: IdRequest } };
  annotations: TextAnnotations;
  plain_text: string;
  href: string | null;
}

export interface EquationObject extends RichTextObject {
  type: 'equation';
  equation: { expression: TextRequest };
  annotations: TextAnnotations;
  plain_text: string;
  href: string | null;
}

export interface Person {
  type: 'person';
  person: { email: string };
  name: string | null;
  avatar_url: string | null;
  id: IdRequest;
  object: 'user';
}

export interface Bot {
  type: 'bot';
  bot:
    | Record<string, never>
    | {
        owner:
          | {
              type: 'user';
              user:
                | {
                    type: 'person';
                    person: { email: string };
                    name: string | null;
                    avatar_url: string | null;
                    id: IdRequest;
                    object: 'user';
                  }
                | { id: IdRequest; object: 'user' };
            }
          | { type: 'workspace'; workspace: true };
      };
  name: string | null;
  avatar_url: string | null;
  id: IdRequest;
  object: 'user';
}

export type TextRequest = string;
export type IdRequest = string;
export type StringRequest = string;

export type Properties = Record<
  string,
  | TitleProperties
  | RichTextProperties
  | NumberProperties
  | UrlProperties
  | SelectProperties
  | MultiSelectProperties
  | PeopleProperties
  | EmailProperties
  | PhoneNumberProperties
  | DateProperties
  | FilesProperties
  | CheckboxProperties
  | FormulaProperties
  | RollupProperties
  | CreatedDateProperties
  | CreatedByProperties
  | LastEditedTimeProperties
  | LastEditedByProperties
>;

export interface TitleProperties {
  type: 'title';
  title: Array<TextObject | MentionObject | EquationObject>;
  id: string;
}

export interface RichTextProperties {
  type: 'rich_text';
  rich_text: Array<TextObject | MentionObject | EquationObject>;
  id: string;
}

export interface NumberProperties {
  type: 'number';
  number: number;
  id: string;
}

export interface UrlProperties {
  type: 'url';
  url: string;
  id: string;
}

export interface SelectProperties {
  type: 'select';
  select: {
    id: StringRequest;
    name: StringRequest;
    color: 'default' | 'gray' | 'brown' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'pink' | 'red';
  };
  id: string;
}

export interface MultiSelectProperties {
  type: 'multi_select';
  multi_select: Array<{
    id: StringRequest;
    name: StringRequest;
    color: 'default' | 'gray' | 'brown' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'pink' | 'red';
  }>;
  id: string;
}

export interface PeopleProperties {
  type: 'people';
  people: Array<{ id: IdRequest; object: 'user' } | Person | Bot>;
  id: string;
}

export interface EmailProperties {
  type: 'email';
  email: string;
  id: string;
}

export interface PhoneNumberProperties {
  type: 'phone_number';
  phone_number: string;
  id: string;
}

export interface DateProperties {
  type: 'date';
  date: { start: string; end: string | null };
  id: string;
}

export interface FilesProperties {
  type: 'files';
  files: Array<
    | {
        file: { url: string; expiry_time: string };
        name: string;
        type?: 'file';
      }
    | { external: { url: string }; name: string; type?: 'external' }
  >;
  id: string;
}

export interface CheckboxProperties {
  type: 'checkbox';
  checkbox: boolean;
  id: string;
}

export interface FormulaProperties {
  type: 'formula';
  formula:
    | { type: 'string'; string: string | null }
    | {
        type: 'date';
        date: { start: string; end: string | null } | null;
      }
    | { type: 'number'; number: number | null }
    | { type: 'boolean'; boolean: boolean | null };
  id: string;
}
export interface RelationProperties {
  type: 'relation';
  relation: Array<{ id: string }>;
  id: string;
}

export interface RollupProperties {
  type: 'rollup';
  rollup: any;
  id: string;
}

export interface CreatedDateProperties {
  type: 'created_time';
  created_time: string;
  id: string;
}

export interface CreatedByProperties {
  type: 'created_by';
  created_by: { id: IdRequest; object: 'user' } | Person | Bot;
  id: string;
}
export interface LastEditedTimeProperties {
  type: 'last_edited_time';
  last_edited_time: string;
  id: string;
}
export interface LastEditedByProperties {
  type: 'last_edited_by';
  last_edited_by: { id: IdRequest; object: 'user' } | Person | Bot;
  id: string;
}

export interface PageParent {
  type: 'page_id';
  page_id: string;
}

export interface WorkspaceParent {
  type: 'workspace';
  workspace: true;
}
