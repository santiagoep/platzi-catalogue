export default `
query ProductQuery($slug: String!) {
    product(where: {slug: $slug}) {
      name
      price
      description {
          text
      }
      images {
        url
        fileName
      },
      category {
        name
      }
    }
  }
  
`;
