import "./EducationStyles.css";
import React from 'react';

const EducationPage = () => {
    return (
        <div className="container">
            <div className="education">
                <h1>EDUCATION:</h1>
                <div className="education-details">
                    <h2>Masters's Degree in Information Technology</h2>
                    <p>Mumbai University</p>
                    <p>Graduation Year: 2023</p>
                </div>
                <div className="education-details">
                    <h2>Bachelor's Degree in Information Technology</h2>
                    <p>Mumbai University</p>
                    <p>Graduation Year: 2021</p>
                </div>
                <div className="education-details">
                    <h2>Data Science Course</h2>
                    <p>Excelr Institute, Pune</p>
                    <p>August 2023</p>
                </div>
            </div>
            <div className="skills">
                <div className="skills-heading">
                    <h2>Skills:</h2>
                </div>
                <ul>
                    <li>Data Visualization,</li>
                    <li>Data Analysis,</li>
                    <li>Machine Learning,</li>
                    <li>Python Programming,</li>
                    <li>Deployment using Streamlit library.</li>
                </ul>
            </div>
        </div>
    );
}

export default EducationPage;
