import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img5 from "../../../assets/home/slide5.jpg";

const ChefCard = () => {
  return (
    <div>
      <section>
        <SectionTitle
          subHeading="Should Try"
          heading="CHEF RECOMMENDS"
        ></SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="card card-compact  bg-base-100 shadow-xl">
            <figure>
              <img src={img1} alt="Shoes" />
            </figure>
            <div className="card-body">
            <div className="text-center">
                <h2 className="text-2xl font-bold">Salads</h2>
                <p>
                  Lettuce, Eggs, Parmesan Cheese, Chicken<br />
                 Breast Fillets.
                 </p>
              </div>
              <div className="card-actions justify-center">
              <button className="btn btn-outline border-0 text-orange-500 border-b-4 mt-4">Add To Cart</button>
              </div>
            </div>
          </div>
          <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img src={img2} alt="Shoes" />
            </figure>
            <div className="card-body">
            <div className="text-center">
                <h2 className="text-2xl font-bold">Pizzas</h2>
                <p>
                  Lettuce, Eggs, Parmesan Cheese, Chicken<br />
                 Breast Fillets.
                 </p>
              </div>
              <div className="card-actions justify-center">
              <button className="btn text-orange-500 ">Add To Cart</button>
              </div>
            </div>
          </div>
          <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img src={img5} alt="Shoes" />
            </figure>
            <div className="card-body">
            <div className="text-center">
                <h2 className="text-2xl font-bold">Salads</h2>
                <p>
                  Lettuce, Eggs, Parmesan Cheese, Chicken<br />
                 Breast Fillets.
                 </p>
              </div>
              <div className="card-actions justify-center">
              <button className="btn btn-outline border-0 text-orange-500 border-b-4 mt-4">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChefCard;
