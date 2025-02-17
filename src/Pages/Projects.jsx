import { useState } from 'react';
import { useEffect } from 'react';
import './Projects.css'
import programmingpicture from './programmingpicture.jpg'
export default function Projects() {
const [projects, setProjects] = useState([]);

useEffect(()=>{
    fetch("https://api.github.com/users/korkken/repos")
    .then((response)=> response.json())
    .then((data)=>{
        console.log(data);
        const filteredData = data.filter((r)=> r.language == "C#")
        setProjects(data);

    })
    .catch((error)=> {
        console.log(error)
    })
}, []);
(function(l) {
    if (l.search[1] === '/' ) {
      var decoded = l.search.slice(1).split('&').map(function(s) { 
        return s.replace(/~and~/g, '&')
      }).join('?');
      window.history.replaceState(null, null,
          l.pathname.slice(0, -1) + decoded + l.hash
      );
    }
  }(window.location));
return (
    <>
        <main>
            <section>
                <h1>My projects</h1>
                <div className="project-container">
                    {projects.map((p)=> {
                        return (
                            <article className="card" key={p.id}>
                                <div className="card-head">
                                    <a href={p.html_url}><img src={programmingpicture} alt="Programmingpicture" /></a>
                                    
                                </div>
                                <div className="card-body">
                                    <h3>{p.name}</h3>
                                    <p>Språk: {p.language}</p>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </section>
        </main>
    </>
)

}