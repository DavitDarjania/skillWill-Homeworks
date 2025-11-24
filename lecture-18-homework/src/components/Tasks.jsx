import CompleteIcon from "../assets/complete.png";
import DeleteIcon from "../assets/delete.png";
import ReturnIcon from "../assets/return.png";
import EditIcon from "../assets/edit.png";
import { useNavigate } from "react-router-dom";
const Tasks = ({ id, name, isCompleted, action, actionPut }) => {
  const navigate = useNavigate();
  const editFunc = () => {
    navigate(`/update/${id}`);
  };
  return (
    <div className="flex flex-col gap-3 mt-2">
      <div className="bg-gray-100 shadow rounded p-2 text-green-900 flex justify-between">
        <p>{name}</p>
        <aside className="flex gap-2">
          {isCompleted && (
            <button>
              <div
                className="w-5 h-5 p-1 bg-green-600 rounded-full cursor-pointer"
                onClick={() => actionPut(id)}
              >
                <img src={ReturnIcon} alt="complete" />
              </div>
            </button>
          )}
          {!isCompleted && (
            <button>
              <img
                className="w-5 h-5 cursor-pointer"
                src={CompleteIcon}
                alt="complete"
                onClick={() => actionPut(id)}
              />
            </button>
          )}
          <button>
            <img
              className="w-5 h-5 cursor-pointer"
              src={EditIcon}
              alt="edit"
              onClick={editFunc}
            />
          </button>
          <button>
            <img
              className="w-5 h-5 cursor-pointer"
              src={DeleteIcon}
              alt="delete"
              onClick={() => action(id)}
            />
          </button>
        </aside>
      </div>
    </div>
  );
};

export default Tasks;
