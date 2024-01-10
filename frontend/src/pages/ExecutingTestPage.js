import { Suspense } from "react";
import { useLoaderData, json, defer, Await } from "react-router-dom";
import ExecutingTest from '../components/ExecutingTest';

export default function ExecutingTestPage(){
  const { tests } = useLoaderData();
  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={tests}>
        {(loadedTests) => <ExecutingTest tests={loadedTests} />}
      </Await>
    </Suspense>
  );
}

async function loadedTests() {
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
    return resData.tests;
  }
}
  
export function Testloader() {
  return defer({
    tests: loadedTests(),
  });
}