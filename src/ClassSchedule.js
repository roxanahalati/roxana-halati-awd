import React from 'react';
import './ClassSchedule.css'
const ClassSchedule = () => {
    return (
        <div className="table-container">
            <h2>Class Schedule</h2>
            <table className="class-schedule-table">
                <thead>
                    <tr>
                        <th>Ziua</th>
                        <th>Ora</th>
                        <th>Sala</th>
                        <th>Formația</th>
                        <th>Tipul</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Luni</td>
                        <td>16-18</td>
                        <td>L306</td>
                        <td>914/1</td>
                        <td>laborator</td>
                    </tr>
                    <tr>
                        <td>Marti</td>
                        <td>12-14</td>
                        <td>L306</td>
                        <td>914/2</td>
                        <td>laborator</td>
                    </tr>
                    <tr>
                        <td>Miercuri</td>
                        <td>10-12</td>
                        <td>L306</td>
                        <td>915/2</td>
                        <td>laborator</td>
                    </tr>
                    <tr>
                        <td>Miercuri</td>
                        <td>10-12</td>
                        <td>L306</td>
                        <td>915/1</td>
                        <td>laborator</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
export default ClassSchedule;
