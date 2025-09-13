
import PropTypes from 'prop-types'

function Students(props) {
   return (
      <div className="Card">
         <p><b>username:</b> {props.username}</p>
         <p><b>Age:</b> {props.age}</p>
         <p><b>Student:</b> {props.isStudent ? "Yes" : "No"}</p>
      </div>
   );
}

Students.propTypes = {
    username: PropTypes.string,
    age: PropTypes.number,
    Students: PropTypes.bool,
}

export default Students