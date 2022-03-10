import React, { useEffect, useState } from 'react';
import { getContentTypes } from '../apis/strapiapi';
import { HashRouter } from 'react-router-dom';
import '../App.css';


// export default function Home() {
    const Home = () => {

    // const [posts, setPost] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        (async () => {
            await getContentTypes('')
                .then((data) => {
                }).catch(async (error) => {
                    if (error.response.data.error) {
                        await getContentTypes(error.response.data.error.details.strapiToken).then((data) => {
                            setCustomers(data.data.data);
                        });
                    }
                });
        })()
    }, [])

    // if (!customers.length) return <div>no customers to load</div>
    // if (!customers.length && !projects.length) return <div>no data to load</div>

    return (
        <div className='mg'>
            {/* <h1>This is fake posts don't take it serious 😝</h1> */}
            {!customers.length && <div>No customers to load</div>}
            {/* {!projects.length && <div>No projects to load</div>}
            <h3>Projects List</h3>
            {projects.length && projects.map((pro) => {
                console.log(pro.attributes.img.data.attributes.url)
                return (<div style={{
                    "boxShadow": "0 4px 8px 0 rgba(0,0,0,0.2)",
                    "transition": "0.3s",
                    "width": "20rem",
                    "padding": "1rem"
                }} key={pro.id}>
                    <img src={`${coreAPIEndpoint}${pro.attributes.img.data.attributes.formats.thumbnail.url}`} alt="project img" />
                    <h4><b>#{pro.id}</b></h4>
                    <h1>{pro.attributes.name}</h1>
                    <div>
                        <b>Version:</b> {pro.attributes.version} <b>Release-Date:</b> {pro.attributes.releaseDate}
                    </div>
                    <p>{pro.attributes.description}</p>
                </div>)
            })} */}
            <hr />

            <h3>Collection Types
                <HashRouter>
                    {/* <Link to="/addcustomer">Add Customer</Link> */}
                </HashRouter>
            </h3>
            {customers && customers.map((cust) => {
                if(cust.uid.startsWith("api:")) {
                    return (
                        <div className="card" key={cust.uid}>
                            <h4><b>{cust.info.displayName}</b></h4>
                            {/* <h1>{cust.attributes.name}</h1>
                            <div>
                                <b>Email:</b> {cust.attributes.email}
                            </div>
                            <b>Created-At:</b> {cust.attributes.createdAt}
                            <p>{cust.attributes.address}</p> */}
                        </div>)
                }
                })}

        </div>
    );
}
export default Home;