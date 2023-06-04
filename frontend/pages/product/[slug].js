import React from 'react'
import Wrapper from '@/components/Wrapper'
import { IoMdHeartEmpty } from 'react-icons/io'
import ProductDetailsCarousal from '@/components/ProductDetailsCarousal'
import RelatedProducts from '@/components/RelatedProducts'

const ProductDetails = () => {
  return (
    <div className='w-full md:py-20'>
        <Wrapper>
            <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
                {/* left column start */}
                <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0"><ProductDetailsCarousal /></div>
            {/* left column end */}
            {/* right column start */}
                <div className="flex-[1] py-3">
                     {/* PRODUCT TITLE */}
                     <div className="text-[34px] font-semibold mb-2 leading-tight">
                            Jordan Retro 6 G
                        </div>

                        {/* PRODUCT SUBTITLE */}
                        <div className="text-lg font-semibold mb-5">
                            Mens's shoe
                        </div>

                        {/* PRODUCT PRICE */}
                        <div className="flex items-center">
                            <div className="text-[20px] font-semibold mr-2">₹20000</div>
                        </div>
                        <div className="text-md font-medium text-black/[0.5]">
                            incl. of taxes
                        </div>
                        <div className="text-md font-medium text-black/[0.5] mb-20">
                            {`(Also includes all applicable duties)`}
                        </div>

                         {/* PRODUCT SIZE RANGE START */}
                        <div className="mb-10">
                            {/* HEADING START */}
                            <div className="flex justify-between mb-2">
                                <div className="text-md font-semibold">
                                    Select Size
                                </div>
                                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                                    Selection Guide
                                </div>
                            </div>
                            {/* HEADING END */}

                            {/* SIZE OPTIONS START */}
                            <div className="flex flex-wrap gap-2">
                                <div className="w-[50px] h-[50px] bg-black text-white flex items-center justify-center text-[20px] font-semibold cursor-pointer hover:opacity-90">7</div>
                                <div className="w-[50px] h-[50px] bg-black text-white flex items-center justify-center text-[20px] font-semibold cursor-pointer hover:opacity-90">8</div>
                                <div className="w-[50px] h-[50px] bg-black text-white flex items-center justify-center text-[20px] font-semibold cursor-pointer hover:opacity-90">9</div>
                                <div className="w-[50px] h-[50px] bg-black text-white flex items-center justify-center text-[20px] font-semibold cursor-pointer hover:opacity-90">10</div>
                                <div className="w-[50px] h-[50px] bg-black text-white flex items-center justify-center text-[20px] font-semibold cursor-pointer hover:opacity-90">11</div>
                                <div className="w-[50px] h-[50px] bg-black text-white flex items-center justify-center text-[20px] font-semibold cursor-not-allowed opacity-50">12</div>
                                </div>
                            {/* SIZE OPTIONS START */}

                            {/* SHOW ERROR START */}
                            <div className="text-red-600 mt-1">
                                    Size selection is required*
                            </div>
                            {/* SHOW ERROR END */}

                            {/* ADD TO CART BUTTON START */}
                            <button
                                className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
                                Add To Cart
                            </button>
                            {/* ADD TO CART BUTTON END */}

                            {/* WHISHLIST BUTTON START */}
                        <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                            Whishlist
                            <IoMdHeartEmpty size={20} />
                        </button>
                        {/* WHISHLIST BUTTON END */}

                        {/* PRODUCT DESCRIPTION START */}
                        <div>
                            <div className="text-lg font-bold mb-5">
                                Product Details
                            </div>
                            <div className="text-md font-medium text-black/[0.5] mb-5">
                                lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget aliquam quam. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nisl quis aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl
                            </div>
                            <div className="text-md font-medium text-black/[0.5] mb-5">
                                lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget aliquam quam. Sed euismod, nisl quis aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nisl quis aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl
                            </div>
                        </div>
                        {/* PRODUCT DESCRIPTION END */}

                        </div>
                </div>
            {/* right column end */}
            </div>

            {/* RELATED PRODUCTS START */}
            <RelatedProducts />

        </Wrapper>
    </div>
  )
}

export default ProductDetails