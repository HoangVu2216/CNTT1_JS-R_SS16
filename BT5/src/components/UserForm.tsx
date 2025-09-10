import { useState, FormEvent } from "react";
import "./UserForm.css";

interface UserData {
  name: string;
  email: string;
  age: number;
}

function UserForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [age, setAge] = useState<string>(""); // lưu dưới dạng string để dễ nhập input
  const [error, setError] = useState<string>("");
  const [submittedData, setSubmittedData] = useState<UserData | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // validate email
    if (!email.includes("@")) {
      setError("Email không hợp lệ");
      setSubmittedData(null);
      return;
    }

    const ageNumber = Number(age);

    // validate tuổi
    if (isNaN(ageNumber) || ageNumber < 0) {
      setError("Tuổi không được âm");
      setSubmittedData(null);
      return;
    }

    // nếu hợp lệ
    setError("");
    setSubmittedData({ name, email, age: ageNumber });
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setAge("");
    setError("");
    setSubmittedData(null);
  };

  return (
    <div className="form-container">
      <h2>📄 Nhập thông tin người dùng</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Họ tên"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          placeholder="Tuổi"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <div className="btn-group">
          <button type="submit">Gửi</button>
          <button type="button" onClick={handleReset}>Xóa tất cả</button>
        </div>
      </form>

      {error && <p className="error">⚠️ {error}</p>}

      {submittedData && (
        <div className="result">
          <h3>✅ Thông tin đã nhập:</h3>
          <p>Họ tên: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Tuổi: {submittedData.age}</p>
        </div>
      )}
    </div>
  );
}

export default UserForm;
