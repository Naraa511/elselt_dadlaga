import useFetch from "../useFetch";
import "../style/CreateDepartment.css";
import { useState } from "react";
import { useFormState } from "react-dom";
const CreateDepartment = () => {
  const { data: schools, isPending, error } = useFetch("http://localhost:8000/children");
    const [schoolId, setSchoolId] =useState('');
    const [departmentName, setDepartmentName] = useState('');
    const [departmentEngName, setDepartmentEngName] = useState('');
    const [departmenId, setDepartmentId] = useState('');

  const handleSubmit = (e) => {
  e.preventDefault();
const now = new Date().toISOString();

  const department = {
    id: departmenId,
    title: departmentName,
    englishTitle: departmentEngName,
    created_at: now,
    updated_at: now
  };

  // Find the school object
  const selectedSchool = schools.find(school => school.id === schoolId);

  if (!selectedSchool) {
    console.error("Сургууль олдсонгүй");
    return;
  }

  const updatedSchool = {
    ...selectedSchool,
    children: [...selectedSchool.children, department]
  };

  fetch(`http://localhost:8000/children/${selectedSchool.id}`, {
    method: "PUT", // or PATCH depending on your backend
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedSchool)
  })
    .then(() => {
      console.log("New department added to school");
    });
};
  return (
    <div className="container">
      <h1 className="header">Тэнхим нэмэх</h1>

      {isPending && <p>Түр хүлээнэ үү...</p>}
      {error && <p>Алдаа: {error}</p>}

      <form className="form" onSubmit={handleSubmit}>
        {schools && (
          <select
            className="select"
            value={schoolId}
            onChange={(e) => setSchoolId(e.target.value)}
          >
            <option value="" disabled>
              Сургуулиа сонгоно уу
            </option>
            {schools.map((school) => (
              <option key={school.id} value={school.id}>
                {school.title}
              </option>
            ))}
          </select>
        )}
        <label>Албан ёсны нэр</label>
        <input 
            type="text"
            required
            placeholder="нэр"
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
        ></input>
        <label>Англи нэр</label>
        <input 
            type="text"
            required
            placeholder="Англи нэр"
            value={departmentEngName}
            onChange={(e) => setDepartmentEngName(e.target.value)}
        ></input>    
        <label>Тэнхимийн код</label>
        <input 
        type="text"
        required
        placeholder="Тэнхимийн код"
        value={departmenId}
        onChange={(e) => setDepartmentId(e.target.value)}
        ></input>
        <button>Буцах</button>
        <button>Хадгалах</button>
      </form>
    </div>
  );
};

export default CreateDepartment;
