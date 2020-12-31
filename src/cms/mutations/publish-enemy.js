export default `
  mutation publishEnemy($id: ID!) {
    publishEnemy(where: { id: $id }, to: PUBLISHED) {
      id
    }
  }
`;
