import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Works = () => {

    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div className=" my-10">
            <h1 className=" text-center text-4xl font-serif font-medium mb-10">Some of our work</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 h-50">
                <div className=" image-full bg-opacity-0" data-aos='zoom-in-up'>
                    <figure><img src="https://i.ibb.co/bK3f5GY/pexels-pavel-danilyuk-7178868.jpg" alt="Shoes" /></figure>
                </div>
                <div className=" image-full" data-aos='zoom-in-up'>
                    <figure><img src="https://i.ibb.co/M9yKjN4/beautiful-couple-posing-their-wedding-day.jpg" alt="Shoes" /></figure>
                </div>
                <div className=" image-full" data-aos='zoom-in-up'>
                    <figure><img src="https://i.ibb.co/3Fhf1yG/full-shot-bride-groom-celebrating.jpg" alt="Shoes" /></figure>
                </div>
            </div>

            <div className="my-6 text-center flex justify-center">
                <button className=" rounded-sm text-white bg-[#a83315] text-base font-serif font-medium px-4 py-2">
                    <Link to={`/about`}>View more about us</Link></button>
            </div>
        </div>


    );
};

export default Works;