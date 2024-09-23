import { defineField, defineType } from "sanity";

export const aurthorType = defineType({
  name: "aurthor",
  type: "document",
  title: "Author",
  fields: [
    defineField({
      name: "AurthorName",
      type: "string",
    }),
    defineField({
      name: "Book",
      type: "reference",
      to: [{ type: "Book" }],
    }),
    defineField({
      name: "image",
      type: "image",
    }),
  ],
});
