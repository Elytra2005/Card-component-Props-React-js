
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

// proptypes just for debugging purpouses it will still pass
Students.propTypes = {
    username: PropTypes.string,
    age: PropTypes.number,
    Students: PropTypes.bool,
}

// if nothing is assigned this will be passed to app.jsx (component)
Students.defaultProps = {
   username: "Guest",
   age: 0, 
   Student: true,
}

export default Students
