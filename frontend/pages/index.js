import HeroBanner from "@/components/HeroBanner";
import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";

export default function Home() {
    return <main className="">
        <HeroBanner />
        <Wrapper>
            {/* heading and paraghragh start */}
            <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                    Cushioning your Miles
                </div>
                <div className="text-md md:text-xl">
                    A soft, smooth ride for miles and miles.
                </div>
            </div>
            {/* heading and paraghragh end */}

            {/* product card grid start */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
           
            </div>
            {/* product card grid end */}

        </Wrapper>
    </main>;
}
