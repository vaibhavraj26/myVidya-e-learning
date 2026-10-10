import { useState } from "react";
import StudentForm from "./StudentForm";
import TeacherForm from "./TeacherForm";
import ParentForm from "./ParentForm";
import ManagementForm from "./ManagementForm";
import "./LoginSignupForm.css";

export default function LoginSignupForm() {
  const [role, setRole] = useState(""); // initially no role selected

  // If role is selected, show respective component
  if (role === "student") return <StudentForm goBack={() => setRole("")} />;
  if (role === "teacher") return <TeacherForm goBack={() => setRole("")} />;
  if (role === "parent") return <ParentForm goBack={() => setRole("")} />;
  if (role === "management") return <ManagementForm goBack={() => setRole("")} />;

  // Otherwise show only role selection
  return (
    <div className="auth-right">
      <h2>Who are you?  👀 </h2>
      <p className="short-msg">Select your role to continue</p>

      <div className="role-container">
        {[
          { id: "student", label: "Student", emoji: "🎓" },
          { id: "teacher", label: "Teacher", emoji: "👨‍🏫" },
          { id: "parent", label: "Parent", emoji: "👩‍👦" },
          { id: "management", label: "Management", emoji: "🏫" },
        ].map((r) => (
          <button
            key={r.id}
            className="role-btn"
            onClick={() => setRole(r.id)}
          >
            <span>{r.emoji}</span> {r.label}
          </button>
        ))}
      </div>
    </div>
  );
}
