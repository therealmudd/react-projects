interface Props {
  children: string;
  colour?: "primary" | "secondary" | "danger" | "success";
  onClick: () => void;
}

function Button({ children, colour = "primary", onClick }: Props) {
  return (
    <button type="button" className={"btn btn-" + colour} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
