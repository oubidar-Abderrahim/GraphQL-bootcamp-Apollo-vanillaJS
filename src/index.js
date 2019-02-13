import "./styles.css";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

// using graphQl tag to englobe our query
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

// our Apollo client taking in charge the Post request
const client = new ApolloClient({
  // keep in mind that the link is a free tier server so it might be down sometimes
  uri: "https://graphql-bootcamp-sample-blog.herokuapp.com/v1alpha1/graphql"
});

// here we only show the returned object in the console
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
