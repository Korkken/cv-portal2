import data from '../../data.json'
import './CV.css'
export default function CV() {

    return (
        <>
        <section>
            <h1>CV</h1>
        <div className="project-container">
                
                {data.map((data) => {
                    return (
                        <article className="cv-card">
                            <div className="cv-card-head">


                            </div>
                            <div className="cv-card-body">
                                <h3>{data.Company}</h3>
                                <p>{data.Role}</p>
                                <p>{data.Date}</p>

                                <p className="cv-desc">{data.Description}</p>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
            
        </>
    )
}