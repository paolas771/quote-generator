export default function Quote(props){
    return(
        <main>
            <h2 className="adviceNumber">advice #{props.number}</h2>
            <h1 className="quote">"{props.quote}"</h1>
        </main>
    )
}