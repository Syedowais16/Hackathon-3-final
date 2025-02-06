// schemas/review.js
export const review = {
    name: "review",
    title: "Review",
    type: "document",
    fields: [
      {
        name: "product",
        title: "Product",
        type: "reference",
        to: [{ type: "product" }],
      },
      {
        name: "rating",
        title: "Rating",
        type: "number",
        validation: (Rule) => Rule.min(1).max(5),
      },
      {
        name: "comment",
        title: "Comment",
        type: "text",
      },
      {
        name: "author",
        title: "author",
        type: "string",
      },
      {
        name: "createdAt",
        title: "Created At",
        type: "datetime",
      },
    ],
  };
  