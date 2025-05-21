import React, { useState } from "react";

const MyRegisteredCourses = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const courses = [
    { id: 1, code: "DC528T301", name: "DATA SCIENCE USING PYTHON", category: "REGULAR", component: "THEORY", credit: 3, section: "MCA_D_NGP", faculty: "ANSHIKA GUPTA" },
    { id: 2, code: "DC528T302", name: "SYSTEM ANALYSIS AND DESIGN", category: "REGULAR", component: "THEORY", credit: 3, section: "MCA_D_NGP", faculty: "SUJATA KHOBRAGADE" },
    { id: 3, code: "PR528P310", name: "MINI PROJECT AND SEMINAR", category: "REGULAR", component: "PRACTICAL", credit: 6, section: "SEC_D_NGP", faculty: "ANSHIKA GUPTA" },
    { id: 4, code: "DC528T303", name: "ARTIFICIAL INTELLIGENCE", category: "REGULAR", component: "THEORY", credit: 3, section: "MCA_D_NGP", faculty: "NAJEEFA NASREEN" },
    { id: 5, code: "UC528T307", name: "SOFT SKILLS", category: "REGULAR", component: "THEORY", credit: 2, section: "MCA_D_NGP", faculty: "VAIBHAVI DESHMUKH" },
    { id: 6, code: "DE528T304", name: "CYBERSECURITY", category: "REGULAR", component: "THEORY", credit: 3, section: "MCA_D_NGP", faculty: "PRIYA DUBE" },
    { id: 7, code: "DC528P308", name: "DATA SCIENCE USING PYTHON LAB", category: "REGULAR", component: "PRACTICAL", credit: 2, section: "MCA_D_NGP", faculty: "NAJEEFA NASREEN" },
    { id: 8, code: "DC528P309", name: "SYSTEM ANALYSIS AND DESIGN LAB", category: "REGULAR", component: "PRACTICAL", credit: 2, section: "MCA_D_NGP", faculty: "SUJATA KHOBRAGADE" }
  ];

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ fontWeight: "bold" }}>My Registered Courses</h2>
      <div style={{ backgroundColor: "#fff", padding: "20px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)", marginTop: "20px", borderRadius: "5px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
          <h3>Current Registered Courses</h3>
          <div>
            <button style={{ backgroundColor: "#1ed61e", color: "white", fontWeight: "bold", padding: "10px 20px", border: "none", borderRadius: "5px", marginRight: "10px" }}>
              Registered Course Slip
            </button>
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
            />
          </div>
        </div>

        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ backgroundColor: "#333", color: "white" }}>
            <tr>
              <th>S.No.</th>
              <th>Course Code</th>
              <th>Course Name</th>
              <th>Register Category</th>
              <th>Component</th>
              <th>Credit</th>
              <th>Course Section</th>
              <th>Faculty</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {filteredCourses.map((course, index) => (
              <tr key={course.id} style={{ textAlign: "center", borderBottom: "1px solid #ddd" }}>
                <td>{index + 1}</td>
                <td>{course.code}</td>
                <td>{course.name}</td>
                <td>{course.category}</td>
                <td>{course.component}</td>
                <td>{course.credit}</td>
                <td>{course.section}</td>
                <td>{course.faculty}</td>
                <td>👁️</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyRegisteredCourses;