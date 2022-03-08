import axios from 'axios';

export const coreAPIEndpoint = `${process.env.REACT_APP_PUBLIC_API_STARPI_URL}`
export const headers = { 
    'Authorization': null,
    // 'entkctoken': 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJoOHVDQjJFbTUxeDdJS0lqSlItM252SW5UeUk3b215SnU4QXMta0RESi1NIn0.eyJleHAiOjE2NDYzMTA5MzQsImlhdCI6MTY0NjMxMDYzNCwiYXV0aF90aW1lIjoxNjQ2Mjg3NjI1LCJqdGkiOiIwNjdhNjQ5Yi1mZTAyLTRlNTEtYWM1Ny02YTdmYzY1NmFhMjAiLCJpc3MiOiJodHRwOi8vMTkyLjE2OC40My4zLm5pcC5pby9hdXRoL3JlYWxtcy9lbnRhbmRvIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjMxYTdjYmVhLWVhNGMtNDEwMS05MzdlLTc2NzRjMTZhMTcxNSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImVudGFuZG8td2ViIiwibm9uY2UiOiIwNDJkYWU1NC0zNGMxLTRlNmUtOWI2ZC1jMTBiZmIzNjQyMWYiLCJzZXNzaW9uX3N0YXRlIjoiNDQzNmJkMzAtYTdmZC00ZGFiLWI1ZTAtYWJiZjRkNjk0MTc2IiwiYWNyIjoiMCIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwOi8vMTkyLjE2OC40My4zLm5pcC5pbyJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInByZWZlcnJlZF91c2VybmFtZSI6ImFkbWluIn0.OYnkK9Xtqq0LhaZ17uZSag8FTo8dHNt8zN4frF6bnNj7-r8cdNcQY-CQ_LqUQv7iCe9JLbmOz0vPoQHCeLWhqKXM9tvgEBLk-OqpEDF-C3ld6g8qOk3rmCxS_nFonZXZcvnTLDtmzhQxZGLiLSEkvFWpAuX6_3Iyq70pfqUkgE8xlESHTu_R_ONJpnB7_8CO9RqWxBFrLo0SiA4U1Aq66-b2yKccn1TpqBCMR0EuY1aaZ-0VsdPA_NPUbxFJMM17ofLjHnyi8wWeA9BUq2ToGVLdXidW8Oh_UOrnD0C6K76Qu6UkookoDo7662VMrO3VEJLxLd68TlSgV5ZSGtEl7Q'
};
  
const strapiEndPoint = `${coreAPIEndpoint}`

export const getPost = async () => {
    const data = await axios.get(`${strapiEndPoint}/posts`);
    return data;
}

// export const getCustomer = async () => {
//     debugger
//     console.log(headers);
//     const data = await axios.get(`${strapiEndPoint}/customers`
//     ,{
//         headers: headers
//       }
//       );
//     return data;
// }

export const getCustomer_ = async () => {
  debugger
  console.log(headers);
  const data = await axios.get(config.url, {
            headers: config.headers
          });
  return data;
}

export const postCustomer = async (data) => {
    return axios.post(`${strapiEndPoint}/customers`, data
    // ,{
    //     headers: headers
    //   }
      )
}

export const getProject = async () => {
    const data = await axios.get(`${strapiEndPoint}/projects?populate=*`
    // ,{
    //     headers: headers
    //   }
      );
    return data;
}

export const getCustomer = async (token) => {
  getDefaultOptions();
  headers.Authorization = token;
    return await axios.get(`http://localhost:1337/content-manager/content-types`, { headers: headers });
}

const getKeycloakToken = () => {
  if (window && window.entando && window.entando.keycloak && window.entando.keycloak.authenticated) {
    console.log('window.entando.keycloak.token: ', window.entando.keycloak.token);
    return window.entando.keycloak.token
  }
  return ''
}

const getDefaultOptions = () => {
  const token = getKeycloakToken()
  if (!token) return {}
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
}