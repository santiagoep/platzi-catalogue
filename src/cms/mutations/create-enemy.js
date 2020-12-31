export default `
  mutation createEnemy($name: String!, $health: Int!) {
    createEnemy(data: {name: $name, health: $health}){
      id
    }
  }
`;
