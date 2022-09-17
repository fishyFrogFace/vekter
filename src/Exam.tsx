import { useParams } from "react-router-dom";

export default function Exam() {
  let params = useParams();

  return (
    <div id="error-page">
      <h1>{params.title}</h1>
    </div>
  );
}
