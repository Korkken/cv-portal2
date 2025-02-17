import { useState } from 'react';
import { useEffect } from 'react';
import './Projects.css'
import programmingpicture from './programmingpicture.jpg'
import ClockLoader from 'react-spinners/Clockloader';

export default function Projects() {
const [projects, setProjects] = useState([]);
const [loading, setLoading] = useState(true);
useEffect(()=>{
    fetch("https://api.github.com/users/korkken/repos")
    .then((response)=> response.json())
    .then((data)=>{
        console.log(data);
        setProjects(data);
        setLoading(false)
    })
    .catch((error)=> {
        console.log(error)
    })
}, []);
return (
    <>
        <main>
            <section>
                <h1>My projects</h1>
                <div className="project-container">
                        {loading ? (
                            <div>
                                <ClockLoader className="spinner"/>
                                <div className="loader">Loading projects</div>
                            </div>
                        ) : (
                            projects.map((p) => {
                                return (
                                    <article className="card" key={p.id}>
                                        <div className="card-head">
                                            <a href={p.html_url}><img src={programmingpicture} alt="Programmingpicture" /></a>
                                        </div>
                                        <div className="card-body">
                                            <h3>{p.name}</h3>
                                            <p>Language: {p.language}</p>
                                        </div>
                                    </article>
                                );
                            })
                        )}
                    </div>
            </section>
        </main>
    </>
)

}