import { CORE_CONCEPTS } from './assets/data.js';
import Header from "./components/Header/Header"





const CoreConcept = ({image,title,description}) => {
  return (
    <div>
      <li>
        <img src={image} alt="" />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>

    </div>
  )
}





function App() {
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;