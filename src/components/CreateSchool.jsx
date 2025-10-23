import { useState } from "react";
import '../style/CreateSchool.css';

// npx json-server --watch data/data.json --port 8000
const CreateSchool = () => {
    const [isShown, setIsShown] = useState(true);
    const [title, setTitle] = useState('');
    const [englishTitle, setEnglishTitle] = useState('');
    const [about, setAbout]=useState('');
    const toggleShown = () =>{
        setIsShown(prevShown => !prevShown)
    }
   
    const handleSubmit =(e)=>{
        e.preventDefault();
        const now = new Date().toISOString();

        const schools = {
            title, 
            englishTitle, 
            about,
            created_at: now,
            updated_at: now
        
        };
        fetch("http://localhost:8000/children",{
            method: 'POST',
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(schools)
        }).then(()=>{
            console.log('New school added');
        })   
    }
    return ( 
        <div>
            <button className="add-school-btn" onClick={toggleShown}>Бүрэлдэхүүн сургууль нэмэх</button>

            { isShown && <div className="create">
                        <h2>Бүрэлдэхүүн сургууль нэмэх</h2>
                        <form onSubmit={handleSubmit}>
                            <label>Нэр</label>
                            <input 
                            type="text" 
                            required
                            placeholder="Нэр"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            ></input>
                            <label>Нэр/Англи/</label>
                            <input 
                            type="text" 
                            required
                            placeholder="Нэр/Англи/"
                            value={englishTitle}
                            onChange={(e) => setEnglishTitle(e.target.value)}
                            ></input>
                            <label>Товч мэдээлэл</label>
                            <textarea required
                            value={about}
                            onChange={(e) => setAbout(e.target.value)}
                            ></textarea>
                            <button>Буцах</button>
                            <button>Хадгалах</button>
                        </form>
                    </div>
            }


        </div>
    );
}
 
export default CreateSchool;