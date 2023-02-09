import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
   const error = useRouteError();
   console.error(error);
   return (
      <div id='error-page'>
         <h1>이런..!!</h1>
         <p>페이지가 없습니다. </p>
         <p>
            <i>{error.statusText || error.message}</i>
         </p>
      </div>
   );
}
