import { useState } from "react";
import Portal from "../layout/portal";
import { showAlert } from "./../../lib/showAlert";

const ProductQuestion = ({ _id, questions = [] }) => {
  const [showQuestionBox, setShowQuestionBox] = useState(false);
  const [showAnswerBox, setShowAnswerBox] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const submitAnswerHandler = async (id) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:3080/api/v1/questions/${id}/answer`,
        {
          method: "POST",
          body: JSON.stringify({ text: answer }),
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }
      );
      const result = await response.json();
      showAlert(result.message, result.status);
      if (result.status !== "success") throw new Error(result.message);
      setShowAnswerBox(false);
      setAnswer("");
    } catch (err) {
      console.log(err.message);
    }
  };
  const submitQuestionHandler = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:3080/api/v1/products/${_id}/questions`,
        {
          method: "POST",
          body: JSON.stringify({ text: question }),
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }
      );
      const result = await response.json();
      showAlert(result.message, result.status);
      if (result.status !== "success") throw new Error(result.message);
      setShowQuestionBox(false);
      setQuestion("");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="mt-5">
      <p className="text-h5 text-neutral-900 inline border-0 border-b-2 border-primary-500 border-solid">
        پرسش ها
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-4">
        <div>
          <p className="text-neutral-400 mr-2 text-caption mt-4">
            شما هم درباره این کالا پرسش ثبت کنید
          </p>
          <div className="mt-5 max-w-md lg:max-w-none">
            <button
              className="primary-button-outline px-6 py-3"
              onClick={() => setShowQuestionBox(true)}
            >
              ثبت پرسش
            </button>
          </div>
        </div>

        <div className="lg:col-span-3  mt-8 lg:m-0 pr-5 flex flex-col gap-10">
          {questions.map((e) => (
            <article key={e._id}>
              <div className="flex">
                <span>
                  <img src="/icons/question.svg" className="w-10" />
                </span>
                <p className="text-subtitle">{e.text}</p>
              </div>
              {e.answers?.map((e) => (
                <div key={e._id}>
                  <div className="mt-4 text-neutral-600 flex items-center">
                    <p className="text-caption ml-4">پاسخ</p>
                    <p className="text-body-1">{e.text}</p>
                  </div>
                  <div className="mr-10"></div>
                </div>
              ))}
              <div className="mt-4 mr-10">
                <button
                  className="text-button-secondary text-button-2"
                  onClick={() => setShowAnswerBox(e)}
                >
                  {e.answers?.length > 0 ? "ثبت پاسخ جدید" : "ثبت پاسخ "} &#62;
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {showQuestionBox && (
        <Portal
          className="w-full md:w-1/2"
          closeHandler={() => setShowQuestionBox(false)}
        >
          <div className="flex justify-between">
            <p className="text-h5 py-3">
              پرسش خود را درباره این کالا مطرح کنید
            </p>
            <img
              src="/icons/close.svg"
              className="cursor-pointer"
              onClick={() => setShowQuestionBox(false)}
            />
          </div>
          <div>
            <textarea
              className="px-5 py-4"
              maxLength="100"
              value={question}
              onChange={(e) => {
                setQuestion(e.target.value);
              }}
            ></textarea>
            <div className="text-neutral-400 text-body-2 text-left">
              100/{question.length}
            </div>
          </div>
          <div>
            <button
              className="primary-button mt-16"
              onClick={submitQuestionHandler}
            >
              ثبت پرسش
            </button>
            <p className="text-center mt-2">
              ثبت پاسخ به معنی موافقت باقوانین سایت است.
            </p>
          </div>
        </Portal>
      )}

      {showAnswerBox && (
        <Portal
          className="w-full md:w-1/2"
          closeHandler={() => setShowAnswerBox(false)}
        >
          <div className="flex justify-between">
            <p className="text-h5">به این پرسش پاسخ دهید</p>
            <img
              src="/icons/close.svg"
              className="cursor-pointer"
              onClick={() => setShowAnswerBox(false)}
            />
          </div>
          <div className="py-4">
            <p className="text-body-1 mb-4">{showAnswerBox.text}</p>
            <div>
              <label className="text-body-1 text-neutral-700 mb-2 mr-4">
                پاسخ
              </label>
              <textarea
                maxLength="500"
                value={answer}
                onChange={(e) => {
                  setAnswer(e.target.value);
                }}
              ></textarea>
              <div className="text-neutral-400 text-body-2 text-left">
                500/{answer.length}
              </div>
            </div>
          </div>
          <div className="flex py-4">
            <button
              className="primary-button ml-4"
              onClick={() => submitAnswerHandler(showAnswerBox._id)}
            >
              ثبت پاسخ
            </button>
            <p className="text-center">
              {" "}
              ثبت پاسخ به معنی موافقت باقوانین انتشار سایت است.{" "}
            </p>
          </div>
        </Portal>
      )}
    </div>
  );
};
export default ProductQuestion;
