import { useEffect, useState } from "react";
import Portal  from "../layout/portal";

const ProductQuestion=({_id,questions})=>{
    const [show,setShow]=useState(false);
    const [question,setQuestion]=useState("");
    const submitQuestionHandler=()=>{
      if(question.length<=3) return;
      fetch("/api/product-question",{method:"POST",body:JSON.stringify({question,_id}),headers:{"Content-Type":'application/json'}}).then(()=>setShow(false))
    }
    return(
      <div className="mt-5">
        <p className="text-h5 text-neutral-900 inline border-0 border-b-2 border-primary-500 border-solid">پرسش ها</p>
  
        <div className="grid grid-cols-1 lg:grid-cols-4">
  
          <div>
            <p className="text-neutral-400 mr-2 text-caption mt-4">شما هم درباره این کالا پرسش ثبت کنید</p>
            <div className="mt-5 max-w-md lg:max-w-none"><button className="primary-button-outline px-6 py-3" onClick={()=>setShow(true)}>ثبت پرسش</button></div>
          </div>
  
          <div className="lg:col-span-3  mt-8 lg:m-0 pr-5 flex flex-col gap-10">
            {questions.map((e,i)=><article key={i}>
              <div className="flex"><span><img src="/icons/question.svg" className="w-10"/></span><p className="text-subtitle">{e.question}</p></div>
              <div className="mt-4 mr-10"><button className="text-button-secondary text-button-2">ثبت پاسخ &#62;</button></div>
            </article>)}
            {/* <article> //whit answer
              <div className="flex"><span><img src="/icons/question.svg" className="w-10"/></span><p className="text-subtitle">Ssd رو ننوشتید که چند هست؟</p></div>
              <div><div className="mt-4 text-neutral-600 flex"><p className="text-caption ml-4">پاسخ</p><p className="text-body-1">فقظ یک ترابایت ssd داره و hdd نداره</p></div><div className="mr-10"><p className="text-caption text-neutral-400">حسین مقری</p></div></div>
              <div className="mt-4 mr-10"><button className="text-button-secondary text-button-2">ثبت پاسخ جدید &#62;</button></div>
            </article> */}
          </div>
  
        </div>

        {show&&<Portal className="w-full md:w-1/2" closeHandler={()=>setShow(false)}>
          <div className="flex justify-between"><p className="text-h5 py-3">پرسش خود را درباره این کالا مطرح کنید</p><img src="/icons/close.svg" className="cursor-pointer" onClick={()=>setShow(false)}/></div>
          <form>
            <textarea className="px-5 py-4" maxLength="100" value={question} onChange={e=>{setQuestion(e.target.value)}}></textarea>
          </form>       
          <div className="text-neutral-400 text-body-2 text-left">100/{question.length}</div>
          <div>
            <button className="primary-button mt-16" onClick={submitQuestionHandler}>ثبت پرسش</button>
            <p className="text-center mt-2">ثبت پاسخ به معنی موافقت باقوانین سایت است.</p>
          </div> 
        </Portal>}
      </div>
    )
}
export default ProductQuestion;