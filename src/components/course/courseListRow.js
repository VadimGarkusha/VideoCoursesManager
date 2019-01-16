import React, { PropTypes } from "react";
import { Link } from "react-router";

const CourseListRow = ({ course, deleteCourse, deleting }) => {
  return (
    <tr>
      <td>
        <a href={course.watchHref} target="_blank">
          Watch
        </a>
      </td>
      <td>
        <Link to={"/course/" + course.id}>{course.title}</Link>
      </td>
      <td>{course.authorId}</td>
      <td>{course.category}</td>
      <td>{course.length}</td>
      <td>
        <input
          type="submit"
          value={(deleting.isDeleting && deleting.courseId == course.id)? 'Deleting...' :"Delete Course"}
          className="btn btn-primary"
          onClick={() => deleteCourse(course)}
        />
      </td>
    </tr>
  );
};

CourseListRow.propTypes = {
  course: PropTypes.object.isRequired,
  deleteCourse: PropTypes.func.isRequired,
  deleting: PropTypes.object.isRequired
};

export default CourseListRow;