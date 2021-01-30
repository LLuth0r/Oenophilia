import React from 'react'
import './Home.css';
import Layout from '../../layouts/Layout';
import Footer from '../../layouts/Footer/Footer';


export default function Home(props) {

    return (
       <Layout username={props.user}>
           <div className="landing_page">
               Testing...
           </div>
       </Layout>
    )
}
