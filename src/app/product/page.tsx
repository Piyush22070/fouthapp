import { Suspense } from "react"
import { Product } from "../components/Product"
import {Review} from '../components/Review'

export default function ProductDetail(){
    return (
        <><h1>Product Detail</h1>
        <Suspense fallback = {<p>Loding Product ...</p>}>
        <Product/>
        </Suspense>
        <Suspense fallback = {<p>Loding Review ...</p>}>
        <Review/>
        </Suspense>
    </>
    )
}