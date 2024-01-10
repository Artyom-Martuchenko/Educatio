import { NavLink } from 'react-router-dom';

function Transform({name, level, amount, id}){
    return <tr>
        <td>{name}</td>
        <td>{level}</td>
        <td>{amount}</td>
        <td><NavLink to={id}>Начать тест</NavLink></td>
    </tr>
}

export default function TestsList({tests}){
    return (
    <div class="flex justify-center w-full h-full"> 
        <table class="table-auto mt-6">
            <thead class="bg-green-400">
                <tr>
                    <th>Name</th>
                    <th>Level</th>
                    <th>Amount of question</th>
                    <th>Start Test</th>
                </tr>
            </thead>
            <tbody>
                {tests.map((arr)=>{return <Transform name={arr.name} level={arr.level} amount={arr.questions.length} id={arr.id}/>})}
            </tbody>
        </table>
    </div>
  );
}