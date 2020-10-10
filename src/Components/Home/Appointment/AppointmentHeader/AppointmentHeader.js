import React from 'react';
import bannar from '../../../Images/bannar.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
   const AppointmentHeader = ({handleDateChange}) => {
  
    return (
        <main>
             <div className="container-fluid">
            <div className="container">
                <div style={{height:'430px'}} className="row d-flex align-items-center">
                    <div className="col-md-4 offset-md-1">
                        <h1 className='font-weight-bolder textColor2'>Appointment</h1>
                        <Calendar
                            onChange={handleDateChange}
                            value={new Date()}
                            />
                    </div>
                    <div className="col-md-6">
                        <img className='img-fluid' src={bannar} alt=""/>
                    </div>
                </div>
            </div>
        </div>
        </main>
    );
};

export default AppointmentHeader;