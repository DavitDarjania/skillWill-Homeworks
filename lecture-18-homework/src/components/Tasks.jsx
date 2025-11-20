import CompleteIcon from "../assets/complete.png";
import DeleteIcon from "../assets/delete.png";
import ReturnIcon from "../assets/return.png";
const Tasks = ({ id, name, isCompleted }) => {
  return (
    <div className="flex flex-col gap-3 mt-2">
      <div className="bg-gray-100 shadow rounded p-2 text-green-900 flex justify-between">
        <p>{name}</p>
        <aside className="flex gap-2">
          {isCompleted && (
            <button>
              <div className="w-5 h-5 p-1 bg-green-600 rounded-full cursor-pointer">
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
              />
            </button>
          )}
          <button>
            <img
              className="w-5 h-5 cursor-pointer"
              src={DeleteIcon}
              alt="delete"
            />
          </button>
        </aside>
      </div>
    </div>
  );
};

export default Tasks;
