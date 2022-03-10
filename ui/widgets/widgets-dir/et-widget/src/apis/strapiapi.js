import axios from 'axios';

export const coreAPIEndpoint = `${process.env.REACT_APP_PUBLIC_API_STARPI_URL}`
export const  headers = { 
  'Content-Type': 'application/json',
  'Authorization': '', 
  'entkctoken': ''
}
  
const strapiEndPoint = `${coreAPIEndpoint}`

export const getPost = async () => {
    const data = await axios.get(`${strapiEndPoint}/posts`);
    return data;
}

export const getCustomer = async () => {
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

export const getContentTypes = async (strapiToken) => {
  console.log('api called: getContentTypes');
  headers.Authorization = getDefaultOptions();
  setHeaders(strapiToken);
  console.log('getContentTypes headers: ', headers);
    return await axios.get(`http://localhost:1337/content-manager/content-types`, { headers: headers });
}

const setHeaders = (strapiToken) => {
  headers.entkctoken = getKeycloakToken();
  headers.Authorization = strapiToken;
}

const getKeycloakToken = () => {
  if (window && window.entando && window.entando.keycloak && window.entando.keycloak.authenticated) {
    console.log('window.entando.keycloak.token: ', window.entando.keycloak.token);
    return window.entando.keycloak.token
  }
  return 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJoOHVDQjJFbTUxeDdJS0lqSlItM252SW5UeUk3b215SnU4QXMta0RESi1NIn0.eyJleHAiOjE2NDY4OTcyNjgsImlhdCI6MTY0Njg5Njk2OCwiYXV0aF90aW1lIjoxNjQ2ODkxNDA1LCJqdGkiOiIwMDJkN2E3YS0zZmVkLTQzNjUtYWRiNi1hMjBjY2RiZDVlYWUiLCJpc3MiOiJodHRwOi8vMTkyLjE2OC40My4zLm5pcC5pby9hdXRoL3JlYWxtcy9lbnRhbmRvIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjMxYTdjYmVhLWVhNGMtNDEwMS05MzdlLTc2NzRjMTZhMTcxNSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImVudGFuZG8td2ViIiwibm9uY2UiOiJhYmI5ZTJkYy01YzQ0LTQ5NmEtYmYwMS1iMjIwODJmNjQwNWIiLCJzZXNzaW9uX3N0YXRlIjoiM2U0YzZjMzAtMGRlMy00ZjcyLWI3YWItYjM0YWJlNGI3ZmQwIiwiYWNyIjoiMCIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwOi8vMTkyLjE2OC40My4zLm5pcC5pbyJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInByZWZlcnJlZF91c2VybmFtZSI6ImFkbWluIn0.LligFcAt0QveLcetege4tXHhaShcfJt1BCcztbTebAZff7VLPOMgpo1vUNIRQtelTYyZA83pFkuBvWQgyO_qIrKHarX2udC51ubSE_RXB0fWts5t9IMGIqMWtzS1av0ACA9Pj4krzLH-AUYEKpWjiAsMMTTsFq-WCKlwF6kvONmTqvuVkD0Q7L05sAHmcRRvv342zW71lUfELgvNRw0CQO6CotrQ7609EewkK9WNSt4kbwdeQG5INjZJ_q33LpGlo5dcIQrnQput5tIZy3u40joR7OoSCChqfO4869b94Ye0JZp9C2iPy8A2b0NOHtD9SPzYtFeXej-AZ8rBPLRknw';
}

//currently not in use
const getDefaultOptions = () => {
  const token = getKeycloakToken();
  if (!token) return {}
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
}