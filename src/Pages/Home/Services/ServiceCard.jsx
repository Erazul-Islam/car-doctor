/* eslint-disable react/prop-types */
const ServiceCard = ({service}) => {


    const {title,img,price} = service

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>{price}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary border-none bg-[#FF3811]">Go</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;