import "./styles.css";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

const getPosts = gql`
  query getPosts {
    posts(order_by: { timestamp: desc }) {
      id
      subject
      content
      user {
        firstName
        lastName
      }
      timestamp
    }
  }
`;

const client = new ApolloClient({
  uri: "https://graphql-bootcamp-sample-blog.herokuapp.com/v1alpha1/graphql"
});

client
  .query({ query: getPosts })
  .then(res => console.log(res))
  .catch(e => console.log(e));

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
