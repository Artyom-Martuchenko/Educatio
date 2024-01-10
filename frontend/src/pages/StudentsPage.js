import { Suspense } from "react";
import { useLoaderData, json, defer, Await } from "react-router-dom";
import StudentsList from "../components/StudentsList";

export default function StudentsPage(){
    
  const { students } = useLoaderData();
  console.log('Загрузился список студентов')
  return (
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
          <Await resolve={students}>
              {(loadedStudents) => <StudentsList students={loadedStudents} />}
          </Await>
      </Suspense>
  );
}

async function loadStudents() {
    const response = await fetch('http://localhost:8080/events');
  
    if (!response.ok) {
      // return { isError: true, message: 'Could not fetch events.' };
      // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
      //   status: 500,
      // });
      throw json(
        { message: 'Could not fetch students.' },
        {
          status: 500,
        }
      );
    } else {
      const resData = await response.json();
      return resData.students;
    }
}
  
export function Studentsloader() {
    return defer({
        students: loadStudents(),
    });
}