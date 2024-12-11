import { useParams } from "react-router";
import Navbar from "../Home/Navbar";

function ProductDetail() {

    const params = useParams();

    return (
        <>
            <Navbar />
            <div>
                Product Detail{" "}
                {params.id}
            </div>
        </>
    )
}

export default ProductDetail
