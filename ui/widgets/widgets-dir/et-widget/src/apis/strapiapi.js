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
  return '';
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