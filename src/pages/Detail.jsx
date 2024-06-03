import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getTodo } from "../api/todoList";

export default function Detail() {
  const { id } = useParams();
  const query = useQuery({
    queryKey: ["todo", id],
    queryFn: () => getTodo(id),
  });
  const { data: todo, isLoading } = query;
  console.log("todo: ", todo);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>투두 상세 id: {id}</h1>
      <h2>{todo.content}</h2>
    </div>
  );
}
