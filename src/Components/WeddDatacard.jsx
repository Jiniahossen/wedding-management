import { Link } from "react-router-dom";

const WeddDatacard = ({ data }) => {

    const { service_title, price, details, reservation_date, img,id } = data;

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" className=" h-60 w-full" /></figure>
                <div className="card-body">
                    <h2 className=" font-serif font-semibold">{service_title}</h2>
                    <p className=" text-base font-serif font-normal">{details}</p>
                    <div className="">
                        <h1 className=" text-base font-sans font-medium">Price:{price}</h1>
                        <h1 className=" text-blue-400 text-base font-serif font-normal">Reservation going on till:{reservation_date}</h1>
                    </div>
                    <div className=" justify-center">
                    <Link to={`/details/${id}`}> <button className=" text-red-500">View Details</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WeddDatacard;