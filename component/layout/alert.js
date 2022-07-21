
const Alert = (props) => {
  const { message, status } = props;
  return (
      <div class={`${status === "success" && "bg-green-500"}`}>
        <div class="ml-5 text-body-1">{message}</div>
      </div>
  );
};
export default Alert;
