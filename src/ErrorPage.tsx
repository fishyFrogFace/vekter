import { useRouteError } from "react-router-dom";

interface RouterError {
  status: string;
  statusText?: string;
  message?: string;
}

export default function ErrorPage() {
  const error = useRouteError() as RouterError;

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, en uventet feil har oppstått.</p>
      <p>
        <i>{`${error.status} ${error.statusText || error.message}`}</i>
      </p>
    </div>
  );
}
