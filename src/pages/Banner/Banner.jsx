import img1 from '../../../src/assets/images/banner/1.jpg';
import img2 from '../../../src/assets/images/banner/2.jpg';
import img3 from '../../../src/assets/images/banner/3.jpg';
import img4 from '../../../src/assets/images/banner/4.jpg';
import img5 from '../../../src/assets/images/banner/5.jpg';
import img6 from '../../../src/assets/images/banner/6.jpg';


const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] ">
            <div id="slide1" className="carousel-item relative w-full bg-cover">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute h-full left-0 top-0 space-y-6 rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='space-y-6 ml-6'>
                        <h1 className='text-6xl font-bold  text-white mt-28 space-y-2'>Affordable Price
                            <br />

                            For Car 
                            <br />
                            Servicing </h1>
                        <p className='text-white'>There are many variations of passages of  available, but the majority
                            <br />
                            have suffered alteration in some form</p>
                    </div>
                    <div className='flex  gap-4 ml-6'>
                        <button className="btn btn-outline btn-primary">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle  mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full bg-cover">
                <img src={img2} className="w-full rounded-xl" />
                <div className="absolute h-full left-0 top-0 space-y-6 rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='space-y-6 ml-6'>
                        <h1 className='text-6xl font-bold  text-white mt-28 space-y-2'>Affordable Price
                            <br />

                            For Car 
                            <br />
                            Servicing </h1>
                        <p className='text-white'>There are many variations of passages of  available, but the majority
                            <br />
                            have suffered alteration in some form</p>
                    </div>
                    <div className='flex  gap-4 ml-6'>
                        <button className="btn btn-outline btn-primary">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle  mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full bg-cover">
                <img src={img3} className="w-full rounded-xl" />
                <div className="absolute h-full left-0 top-0 space-y-6 rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='space-y-6 ml-6'>
                        <h1 className='text-6xl font-bold  text-white mt-28 space-y-2'>Affordable Price
                            <br />

                            For Car 
                            <br />
                            Servicing </h1>
                        <p className='text-white'>There are many variations of passages of  available, but the majority
                            <br />
                            have suffered alteration in some form</p>
                    </div>
                    <div className='flex  gap-4 ml-6'>
                        <button className="btn btn-outline btn-primary">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle  mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full bg-cover">
                <img src={img4} className="w-full rounded-xl" />
                <div className="absolute h-full left-0 top-0 space-y-6 rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='space-y-6 ml-6'>
                        <h1 className='text-6xl font-bold  text-white mt-28 space-y-2'>Affordable Price
                            <br />

                            For Car 
                            <br />
                            Servicing </h1>
                        <p className='text-white'>There are many variations of passages of  available, but the majority
                            <br />
                            have suffered alteration in some form</p>
                    </div>
                    <div className='flex  gap-4 ml-6'>
                        <button className="btn btn-outline btn-primary">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle  mr-5">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full bg-cover">
                <img src={img5} className="w-full rounded-xl" />
                <div className="absolute h-full left-0 top-0 space-y-6 rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='space-y-6 ml-6'>
                        <h1 className='text-6xl font-bold  text-white mt-28 space-y-2'>Affordable Price
                            <br />

                            For Car 
                            <br />
                            Servicing </h1>
                        <p className='text-white'>There are many variations of passages of  available, but the majority
                            <br />
                            have suffered alteration in some form</p>
                    </div>
                    <div className='flex  gap-4 ml-6'>
                        <button className="btn btn-outline btn-primary">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle  mr-5">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full bg-cover">
                <img src={img6} className="w-full rounded-xl" />
                <div className="absolute h-full left-0 top-0 space-y-6 rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='space-y-6 ml-6'>
                        <h1 className='text-6xl font-bold  text-white mt-28 space-y-2'>Affordable Price
                            <br />

                            For Car 
                            <br />
                            Servicing </h1>
                        <p className='text-white'>There are many variations of passages of  available, but the majority
                            <br />
                            have suffered alteration in some form</p>
                    </div>
                    <div className='flex  gap-4 ml-6'>
                        <button className="btn btn-outline btn-primary">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn btn-circle  mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;