import { defineField, defineType } from "sanity";

export const blogType = defineType({
  name: "Blog",
  type: "document",
  title: "New Blog",
  fields: [
    defineField({
      name: "BlogTitle",
      type: "string",
    }),
    defineField({
      name: "Name",
      type: "string",
    }),
    defineField({
      name: "image",
      type: "image",
    }),
    defineField({
      name: "Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "BlogPostDate",
      type: "datetime",
    }),
  ],
});
