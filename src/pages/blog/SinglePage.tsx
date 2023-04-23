import { useParams, useNavigate } from "react-router-dom";
import { data } from "../../assets/data";

const getPost = (id: string | undefined) =>
  data.filter((data) => data.id === id);

export const SinglePage = () => {
  const { id } = useParams();
  const post = getPost(id)[0];

  const navigation = useNavigate();

  const goHome = () => navigation("/", { replace: true });
  const goBack = () => navigation(-1);

  return (
    <section className="container__section w-full mt-20 md:mt-32">
      <div className="flex flex-col items-center">
        <img src={post.icon} alt={post.title} width={50} height={50} />
        <h3 className="my-[17px] text-[24px] sm:text-[30px] font-semibold tracking-widest">
          {post.title}
        </h3>
        <p className="text-[14px] sm:text-[18px] max-w-[800px] text-center">
          {post.content}
        </p>

        <div className="grid grid-cols-2 gap-[18px] mt-[100px]">
          <button
            onClick={goBack}
            className="px-3 py-3 border-2 border-gray rounded-md text-gray"
          >
            back to blog
          </button>
          <button
            onClick={goHome}
            className="px-3 py-3 border-2 border-gray rounded-md text-gray"
          >
            back home
          </button>
        </div>
      </div>
    </section>
  );
};
