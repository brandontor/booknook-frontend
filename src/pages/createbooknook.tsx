import * as React from 'react';
import { type NextPage } from "next";
import CreateBookNookForm from '~/components/createbooknook/CreateBookNookForm';
import Layout from '~/components/layout';

export interface IAppProps {
}

const createbooknook: NextPage = () => {
   return(
    <>
        <Layout>
            <CreateBookNookForm/>
        </Layout>
    </>
   ) 
}

export default createbooknook