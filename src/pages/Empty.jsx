import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../api/todoList";

export default function Empty() {
  const query = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
  console.log("빈페이지에서 todos: ", query.data);
  //   console.log("isFetching: ", query.isFetching);
  return <h1>빈 페이지입니다.</h1>;
}
