import { Link } from "react-router-dom";
import { data } from "../assets/data";
import { CartItem } from "../components/CartItem";
import Audience from "../assets/images/Audience.png";

const blog = () => {
  return (
    <section className="container__section w-full mt-20 md:mt-32">
      <h2 className="heading text-center">Content Sources</h2>
      <p className="text-[14px] sm:text-[18px] text-center mb-[100px]">
        Connect these sources to your Marico homepage.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[23px] max-w-[1255px] mx-auto mb-[100px]">
        {data.map((item) => (
          <Link key={item.id} to={`/blog/${item.id}`}>
            <CartItem {...item} />
          </Link>
        ))}
      </div>

      <div className="relative mt-[100px] w-full flex justify-center items-center">
        <img src={Audience} alt="Audience" />
        <h2 className="text-[20px] sm:text-[50px] lg:text-[70px] text-center absolute max-w-[1236px] px-[20px]">
          We've helped over 1,000 creators claim control of their audience.
        </h2>
      </div>
    </section>
  );
};

export default blog;
