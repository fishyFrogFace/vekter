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
      <h1>404 Not Found</h1>
      <p>Denne siden finnes ikke.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
