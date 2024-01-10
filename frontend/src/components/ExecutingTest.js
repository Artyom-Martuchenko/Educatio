import { useParams } from "react-router-dom";
import { useState } from "react";

function Transform({ data, IncreaseFunction, finish}) {
    function valueHandler(value){
        if(value === data.answer){
            IncreaseFunction()
        }
    }
    return (
        <div class="mb-12 flex flex-wrap md:mb-0">
        <div class="w-full md:w-10/12 shrink-0 grow-0 basis-auto md:pl-6">
            <p class="mb-3 font-semibold">{data.quastion}</p>
            <input type="text" placeholder="Answer" onChange={(e)=>valueHandler(e.target.value)} disabled={finish ? 'disabled' : ''}/>
        </div>
        </div>
    );
}

export default function ExecutingTest({ tests }) {
    const [mark, setMark] = useState(0)
    const [finish, setFinish] = useState(false)

    const markHandler = () => {
        setMark((prevState)=>{return prevState + 1})
    }
    
    const params = useParams();
    const id = params.testId;
    const test = tests.find((element) => element.id === id);
    console.log(test);
    return (
    <div class="container my-24 mx-auto md:px-6">
        {/* <!-- Section: Design Block --> */}
        <section class="mb-32">
        <h5 class="mb-10 text-center text-xl font-semibold md:mb-6">
            Test Name: {test.name}
        </h5>
        {test.questions.map((quastion) => (
            <Transform IncreaseFunction={markHandler} data={quastion} finish={finish}/>
        ))}
        </section>
        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={()=>setFinish(true)}>
        {finish? mark : "Закончить"}
        </button>
        {/* <!-- Section: Design Block --> */}
    </div>
    // <!-- Container for demo purpose -->
    );
}
