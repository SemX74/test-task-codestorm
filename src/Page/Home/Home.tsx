import { useEffect } from "react";
import { useAuth } from "../../Hooks/useAuth";
import { deleteToken } from "../../Redux/DataSlice";
import { useAppDispatch } from "../../Redux/Hooks";
import "./Home.scss";
interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const { onGetTasks, tasks } = useAuth();
  useEffect(() => {
    onGetTasks();
  }, []);
  const dispatch = useAppDispatch();
  return (
    <div className="home">
      <h1 className="home__title">
        Thing to do |{" "}
        <span onClick={() => dispatch(deleteToken())}>Logout</span>
      </h1>
      <ul className="home__task-wrapper">
        {tasks.map((task) => (
          <li className="home__task ">
            {task.id}. {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
