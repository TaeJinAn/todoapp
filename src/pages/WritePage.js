import { useRecoilState } from "recoil";
import { todosAtom } from "../states/todo";

function WritePage() {
  const [todos, setTodos] = useRecoilState(todosAtom);
  return (
    <>
      <h1>Write Page</h1>
      <div>현재 글 개수 : {todos.length}</div>
      <form>
        <input type="text" placeholder="please input todo" />
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default WritePage;
