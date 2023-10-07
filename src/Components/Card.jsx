

const Card = ({ card }) => {
    const { service_title, price, details, reservation_date, img, id } = card;

    return (
        <div className=" max-w-5xl mx-auto mt-20">
            <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                    <img src={img} alt={service_title} className="h-full w-[500px]" />
                </figure>
                <div className=" ms-6">
                    <h2 className="card-title pt-6 pb-4 text-xl font-serif font-semibold">{service_title}</h2>
                    <p className="text-lg font-sans font-semibold">Price: {price}</p>
                    <p className=" text-base font-serif font-medium my-4"> {details}</p>
                    <p className="text-blue-400 text-base font-serif font-normal">Reservation going on till: {reservation_date}</p>
                    <div className="card-actions">
                        <button className=" mt-6 bg-amber-500 text-white font-serif font-medium text-lg px-4 py-1 rounded-sm">Book</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
