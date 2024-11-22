import { CiHeart } from "react-icons/ci";
import { FiEye } from "react-icons/fi";
import ReactStars from 'react-stars'



function Card(props) {

    const discountPrice = (props.price - (props.discountPercentage * (props.price / 100))).toFixed(2);

    return (
        <>
            <div>

                <div className='w-64 bg-gray-200 p-3 rounded shadow-lg'>

                    <div className="flex justify-between">
                        <div className='text-white w-14 bg-[#db4444] flex justify-center
items-center text-xs h-6'>
                            <p>-40%</p>
                        </div>
                        <div className="space-y-3">
                            <div className="w-8 h-8 bg-white flex justify-center
     items-center text-2xl rounded-full text-black">
                                <CiHeart />
                            </div>

                            <div className="w-8 h-8 bg-white flex justify-center
     items-center text-2xl rounded-full text-black">
                                <FiEye />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img src={props.image} alt="" />
                    </div>
                </div>
                <div className="mt-5 leading-9">
                    <div className="max-w-60">
                        <p className="text-base font-medium">{props.name}</p>
                    </div>
                    <div>
                        <p
                            className="text-[#db4444] flex gap-3"
                        >${discountPrice} <span className="line-through text-gray-400">
                                {props.price}</span></p>
                    </div>
                    <div className="flex gap-1">
                        <ReactStars
                         count={5}
                         value={props.rating}
                        // onChange={ratingChanged}
                        size={24}
                        color2={'#ffd700'} />

                        <p className="text-sm text-gray-400 ml-2">( {props.stock} )</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
