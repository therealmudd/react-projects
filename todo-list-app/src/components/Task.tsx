import { useState } from "react";

interface Props {
  id: string;
  children: string;
  onDelete: () => void;
}

function Task({ id, children, onDelete }: Props) {
  const [complete, setComplete] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <li
        className="list-group-item"
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <input
          className="form-check-input me-1"
          type="checkbox"
          value=""
          id={id}
          onClick={() => {
            setComplete(!complete);
          }}
        />
        <label className="form-check-label" htmlFor={id}>
          {complete ? <del>{children}</del> : children}
        </label>
        {hovered && (
          <>
          <br />
          <br />
          <button onClick={onDelete} className="btn btn-danger" type="button">
            Delete
          </button>
          </>
        )}
      </li>
    </>
  );
}

export default Task;
