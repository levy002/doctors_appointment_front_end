import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDoctor, deleteDoctorAction } from '../../redux/mainpage/mainpage';
import './doctor.css';

const Doctor = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctorReducer);

  useEffect(() => {
    dispatch(getDoctor());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteDoctorAction(id));
  };

  return (
    <div className="all-doctors">
      <h2>Doctors</h2>
      <ul className="div list-group">
        {doctors.length > 0 && doctors.map((doctor) => (
          <li key={doctor.id} className="list-group-item">
            {' '}
            <Link to={`/details/${doctor.id}`}>{doctor.name}</Link>
            <p>{doctor.details}</p>
            <i>{doctor.image}</i>
            <button type="button" onClick={() => handleDelete(doctor.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Doctor;
