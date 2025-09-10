import React from "react";
import "./SubjectList.css"; // import CSS

const SubjectList: React.FC = () => {
  const subjects = ["Toán", "Văn", "Anh", "Hóa", "Sinh"];

  return (
    <div className="subject-container">
      <h1 className="title">📚 Danh sách môn học</h1>
      <div className="subject-list">
        {subjects.map((subject, index) => (
          <div key={index} className="subject-item">
            {subject}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectList;
