import { type SchemaTypeDefinition } from "sanity";
import { blogType } from "../blogType";
import { booksType } from "../booksType";
import { aurthorType } from "../aurthorType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogType, booksType, aurthorType],
};
