import propTypes from "prop-types";

function Student(props) {
  return (
    <>
      <p>{props.name}</p>
      <p>{props.age}</p>
      <p>{props.isStudent ? "学生" : "老师"}</p>
      <hr />
    </>
  );
}

Student.propTypes = {
  name: propTypes.string,
  age: propTypes.number,
  isStudent: propTypes.bool,
};

Student.defaultProps = {
  name: "Gusts",
  age: 101,
  isStudent: false,
};
export default Student;
