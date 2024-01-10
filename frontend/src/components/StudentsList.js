function Transform({name, group, course}){
    return <tr>
        <td>{name}</td>
        <td>{group}</td>
        <td>{course}</td>
    </tr>
}

export default function StudentsList({students}){
    return (
    <div class="flex justify-center w-full h-full"> 
        <table class="table-auto mt-6">
            <thead class="bg-green-400">
                <tr>
                    <th>Name</th>
                    <th>Group</th>
                    <th>Course</th>
                </tr>
            </thead>
            <tbody>
                {students.map((arr)=>{return <Transform name={arr.name} group={arr.group} course={arr.course}/>})}
            </tbody>
        </table>
    </div>
  );
}