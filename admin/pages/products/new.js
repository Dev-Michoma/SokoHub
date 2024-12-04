import Layout from "@/components/Layout";
import { useState } from "react";
import axios from 'axios';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/router';
import ProductForm from "@/components/ProductForm";

export default function NewProduct(){
  return (<Layout>
    <ProductForm/>
  </Layout>)
}