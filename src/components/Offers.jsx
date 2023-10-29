
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Navigation, FreeMode, Scrollbar, Mousewheel, Autoplay } from 'swiper/modules';

// Data
import { products } from '../data/products';

// Components
import ProductCard from './ProductCard';


export default function Offers() {
    return (
        <>
            <div className='lg:block hidden'>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={20}
                    // pagination={{
                    //     dynamicBullets: true,
                    //     clickable: true,
                    // }}
                    // navigation={{
                    //     hideOnClick: true,
                    // }}
                    autoplay={true}
                    // scrollbar={{
                    //     hide: true,
                    // }}
                    direction={'horizontal'}
                    freeMode={true}
                    scrollbar={true}
                    mousewheel={true}
                    modules={[FreeMode, Autoplay, Scrollbar, Mousewheel]}
                    // modules={[
                    //     Pagination, 
                    //     Navigation, 
                    //     Autoplay,
                    // ]}
                    className="offer-swiper dark:bg-[#1d2d44] bg-[white]"
                >
                    {products.filter((product) => {
                        return product.promoPercentage > 0;
                    }).map((product, index) => (
                        <SwiperSlide key={index}>
                            <ProductCard product={product}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className='grid justify-center items-center grid-cols-3 sm:grid-cols-4 md:grid-cols-4 rounded-lg mb-3 px-1 lg:mx-0 md:mx-8 mx-5 gap-y-3 lg:hidden'>
                {products.filter((product) => {
                    return product.promoPercentage > 0;
                }).map((product, index) => (
                    <ProductCard key={index} product={product}/>
                ))}
            </div>
        </>
    )
}