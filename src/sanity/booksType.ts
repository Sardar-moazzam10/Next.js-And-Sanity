import { defineField, defineType } from "sanity";

export const booksType = defineType({
  name: "Book",
  type: "document",
  title: "Books",
  fields: [
    defineField({
      name: "BookTitle",
      type: "string",
    }),
    defineField({
      name: "AuthorName",
      type: "reference",
      to: [{ type: "aurthor" }],
    }),
    defineField({
      name: "image",
      type: "image",
    }),
  ],
});
