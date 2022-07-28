import { useRef, useState } from "react";
import Portal from "../layout/portal";

const ProductViews = ({ _id,title,ratingsAverage, reviews = [] }) => {
  const [show, setShow] = useState(false);
  const titleRef = useRef();
  const reviewRef = useRef();
  const ratingRef = useRef();
  const submitViewHandler = async (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const review = reviewRef.current.value;
    const rating = ratingRef.current.value;
    try {
      const response = await fetch(`http://127.0.0.1:3080/api/v1/products/${_id}/reviews`,
        {
          method: "POST",
          body: JSON.stringify({ title, review, rating }),
          headers: { "Content-Type": "Application/json" },
          credentials: "include",
        }
      );
      const result =await response.json();
      if (result.status !== "success") throw new Error(result.message);
      setShow(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  const getRateColor = (rate) => {
    let rateClass = "";
    switch (rate) {
      case "1":
        rateClass = "icon-rating-0-2";
        break;
      case "2":
        rateClass = "icon-rating-0-2";
        break;
      case "3":
        rateClass = "icon-rating-2-3";
        break;
      case "4":
        rateClass = "icon-rating-3-4";
        break;
      case "5":
        rateClass = "icon-rating-4-5";
        break;
      default:
        break;
    }
    return rateClass;
  };

  return (
    <div className="mt-5">
      <p className="text-h5 text-neutral-900 inline border-0 border-b-2 border-primary-500 border-solid">
        دیدگاه ها
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-4">
        <div>
          <div className="flex items-center">
            <div
              className=""
              style={{
                WebkitMaskImage: "url(/icons/star.png)",
                maskImage: "url(/icons/star.png)",
                width: "100px",
              }}
            >
              <div
                className={`bg-icon-rating-0-2 h-8`}
                style={{ width: `${ratingsAverage * 20}px` }}
              ></div>
            </div>
            <p className="text-neutral-400 mr-2">
              {reviews.length} نفر امتیاز داده اند
            </p>
          </div>
          <p className="text-neutral-400 mr-2 text-caption mt-4">
            شما هم درباره این کالا دیدگاه ثبت کنید
          </p>
          <div className="mt-5 max-w-md lg:max-w-none">
            <button
              className="primary-button-outline px-6 py-3"
              onClick={() => setShow(true)}
            >
              ثبت دیدگاه
            </button>
          </div>
        </div>

        <div className="lg:col-span-3  mt-8 lg:m-0 pr-5 flex flex-col gap-10">
          {reviews.map(e => (
            <article className="flex" key={e._id}>
              <div
                className={`bg-${getRateColor(
                  e.rating
                )} text-caption-strong h-10 p-5 text-white rounded-md flex items-center justify-center ml-8`}
              >
                {e.rating}
              </div>
              <div className="divide-y-2 divide-solid divide-neutral-200 divide-x-0">
                <div className="text-caption text-neutral-400 flex gap-12">
                  <p>
                    {new Intl.DateTimeFormat("fa-IR", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    }).format(new Date(e.createAt))}
                  </p>
                  <p>{e.user.firstName} {e.user.lastName}</p>
                </div>
                <p className="text-body-1 pt-3 mb-1">{e.review}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {show && (
        <Portal className="w-full md:w-1/2" closeHandler={() => setShow(false)}>
          <div className="flex justify-between">
            <p className="text-h5">دیدگاه شما</p>
            <img
              src="/icons/close.svg"
              className="cursor-pointer"
              onClick={() => setShow(false)}
            />
          </div>
          <p className="text-neutral-500 text-body-2">
            {title}
          </p>

          <form className="mt-16">
            <div className="flex gap-20">
              <label className="text-body1-strong">امتیاز دهید! </label>
              <input type="range" id="range" max={5} min={1} ref={ratingRef} />
            </div>
            <p className="text-h5 mt-8">دیدگاه خود را شرح دهید</p>
            <div className="mt-4">
              <label className="text-body-1">عنوان نظر</label>
              <input type="text" ref={titleRef} />
            </div>
            <div className="mt-4">
              <label className="text-body-1">متن نظر</label>
              <textarea ref={reviewRef} />
            </div>
            <button
              className="primary-button mt-16"
              onClick={submitViewHandler}
            >
              ثبت دیدگاه
            </button>
          </form>
        </Portal>
      )}
    </div>
  );
};

export default ProductViews;
