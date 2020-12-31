import { GraphQLClient } from 'graphql-request';

import queries from './queries';
import { cms } from '@config/index';
/* import mutations from './mutation'; */
import serializers from './serializers';

class Cms {
  static boot() {
    this.graphQLClient = new GraphQLClient(cms.endpoint, {
      headers: {
        authorization: `Bearer ${cms.apiKey}`
      }
    });

    this.load = true;
  }

  static async query(query, variables = {}) {
    if (!this.graphQLClient) this.boot();
    const data = await this.graphQLClient.request(queries[query], variables);
    return serializers[query](data);
  }
}

export default Cms;
