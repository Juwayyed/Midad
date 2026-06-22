import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router";
import { formatDate } from "../lib/utilities";

const MemoCard = ({ memo }) => {
  return (
    <Link
      to={`/memo/${memo._id}`}
      className="card bg-base-200 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-base-300"
    >
      <div className="card-body">
        <h3 className="card-title text-base-content">{memo.title}</h3>
        <p className="text-base-content/70 line-clamp-3">{memo.content}</p>
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm text-base-content/60">
            {formatDate(new Date(memo.createdAt))}
          </span>
          <div className="flex items-center gap-1">
            <PenSquareIcon className="size-4" />
            <button className="btn btn-ghost btn-xs text-error">
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MemoCard;
