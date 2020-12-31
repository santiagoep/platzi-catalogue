export default `
query ProductQuery() {
  products(orderBy: updatedAt_DESC, stage: PUBLISHED, locales: es) {
    slug
    name
    price
    images {
      url
      fileName
    }
  }
}
`;
