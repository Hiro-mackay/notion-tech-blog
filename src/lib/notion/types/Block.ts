import { EquationObject, MentionObject, TextObject } from '.';

export interface BaseBlock {
  object: 'block';
  id: string;
  type: BlockType;
  created_time: string;
  last_edited_time: string;
  archived: boolean;
  has_children: boolean;
}

export interface ParagraphBlock extends BaseBlock {
  paragraph: NestedBlock;
  type: 'paragraph';
}

export interface HeadingOneBlock extends BaseBlock {
  heading_1: { text: RichTextItem };
  type: 'heading_1';
}

export interface HeadingTwoBlock extends BaseBlock {
  heading_2: { text: RichTextItem };
  type: 'heading_2';
}

export interface HeadingThreeBlock extends BaseBlock {
  heading_3: { text: RichTextItem };
  type: 'heading_3';
}

export interface CalloutBlock extends BaseBlock {
  callout: {
    icon: Icon;
    text: RichTextItem;
  };
  type: 'callout';
}

export interface QuoteBlock extends BaseBlock {
  quote: { text: RichTextItem };
  type: 'quote';
}

export interface BulletedListItemBlock extends BaseBlock {
  bulleted_list_item: NestedBlock;
  type: 'bulleted_list_item';
}

export interface NumberedListItemBlock extends BaseBlock {
  numbered_list_item: NestedBlock;
  type: 'numbered_list_item';
}

export interface ToDoBlock extends BaseBlock {
  to_do: NestedBlock & { checked: boolean };
  type: 'to_do';
}

export interface ToggleBlock extends BaseBlock {
  toggle: NestedBlock;
  type: 'toggle';
}

export interface CodeBlock extends BaseBlock {
  code: { text: RichTextItem; language: CodeLanguage };
  type: 'code';
}

export interface ChildPageBlock extends BaseBlock {
  child_page: {
    title: 'Lacinato kale';
  };
  type: 'child_page';
}

export interface ChildDatabaseBlock extends BaseBlock {
  type: 'child_database';
  child_database: { title: string };
}

export interface EmbedBlock extends BaseBlock {
  embed: {
    url: string;
  } & Caption;
  type: 'embed';
}

export interface ImageBlock extends BaseBlock {
  image: External | FileObject;
  type: 'image';
}

export interface VideoBlock extends BaseBlock {
  video: FileObject | External;
  type: 'video';
}

export interface FileBlock extends BaseBlock {
  file: FileObject;
  type: 'file';
}

export interface PDFBlock extends BaseBlock {
  pdf: FileObject;
  type: 'pdf';
}

export interface BookmarkBlock extends BaseBlock {
  bookmark: Caption & { url: string };
  type: 'bookmark';
}

export interface EquationBlock extends BaseBlock {
  equation: { expression: string };
  type: 'equation';
}

export interface DividerBlock extends BaseBlock {
  divider: {};
  type: 'divider';
}

export interface TableOfContentsBlock extends BaseBlock {
  table_of_contents: {};
  type: 'table_of_contents';
}

export interface NestedBlock extends BaseBlock {
  text: RichTextItem;
  children: Array<BaseBlock>;
}

export type RichTextItem = Array<TextObject | MentionObject | EquationObject>;

export interface Icon {
  type: 'emoji';
  emoji?: string | null;
}

export interface External extends Caption {
  type: 'external';
  external: { url: string };
}

export interface FileObject extends Caption {
  type: 'file';
  file: {
    expiry_time: string;
    url: string;
  };
}

export interface Caption {
  caption: RichTextItem;
}

export type CodeLanguage =
  | 'abap'
  | 'arduino'
  | 'bash'
  | 'basic'
  | 'c'
  | 'clojure'
  | 'coffeescript'
  | 'c++'
  | 'c#'
  | 'css'
  | 'dart'
  | 'diff'
  | 'docker'
  | 'elixir'
  | 'elm'
  | 'erlang'
  | 'flow'
  | 'fortran'
  | 'f#'
  | 'gherkin'
  | 'glsl'
  | 'go'
  | 'graphql'
  | 'groovy'
  | 'haskell'
  | 'html'
  | 'java'
  | 'javascript'
  | 'json'
  | 'julia'
  | 'kotlin'
  | 'latex'
  | 'less'
  | 'lisp'
  | 'livescript'
  | 'lua'
  | 'makefile'
  | 'markdown'
  | 'markup'
  | 'matlab'
  | 'mermaid'
  | 'nix'
  | 'objective-c'
  | 'ocaml'
  | 'pascal'
  | 'perl'
  | 'php'
  | 'plain text'
  | 'powershell'
  | 'prolog'
  | 'protobuf'
  | 'python'
  | 'r'
  | 'reason'
  | 'ruby'
  | 'rust'
  | 'sass'
  | 'scala'
  | 'scheme'
  | 'scss'
  | 'shell'
  | 'sql'
  | 'swift'
  | 'typescript'
  | 'vb.net'
  | 'verilog'
  | 'vhdl'
  | 'visual basic'
  | 'webassembly'
  | 'xml'
  | 'yaml'
  | 'java/c/c++/c#';

export type BlockType =
  | 'paragraph'
  | 'heading_1'
  | 'heading_2'
  | 'heading_3'
  | 'callout'
  | 'quote'
  | 'bulleted_list_item'
  | 'numbered_list_item'
  | 'to_do'
  | 'toggle'
  | 'code'
  | 'child_page'
  | 'child_database'
  | 'embed'
  | 'image'
  | 'video'
  | 'file'
  | 'pdf'
  | 'bookmark'
  | 'equation'
  | 'divider'
  | 'table_of_contents';
