import { Outlet, useParams, useSearchParams } from "react-router-dom";

export const Posts = () => {
  const params = useParams();
  const { id } = params;
  const [qs] = useSearchParams();

  return (
    <div>
      Posts Params: {id}, QS: {qs}
      <Outlet />
    </div>
  );
};
