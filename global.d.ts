// global.d.ts

type ViCommon = typeof import('./messages/vi/common.json');
type ViGlossary = typeof import('./messages/vi/glossary.json');
type ViValidation = typeof import('./messages/vi/validation.json');

type EnCommon = typeof import('./messages/en/common.json');
type EnGlossary = typeof import('./messages/en/glossary.json');
type EnValidation = typeof import('./messages/en/validation.json');

// Importing other language files ..

// Create a new type by combining all message types
type Messages = ViCommon & ViGlossary & ViValidation & EnCommon & EnGlossary & EnValidation;

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
declare interface IntlMessages extends Messages {}
