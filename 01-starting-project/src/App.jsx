import { CORE_CONCEPTS } from './assets/data.js';
import Header from "./components/Header/Header"
import TabButton from './components/TabButton/TabButton.jsx';
import { useState } from 'react';
import { EXAMPLES } from './assets/data.js';



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
  const [selectedTopic, setSelectedTopic] = useState('');


    function handleClick(selectedButton) {
      setSelectedTopic(selectedButton);
    }
    

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
        <section id='examples' >
          <h2>Examples</h2>
          <menu>
        <TabButton onSelect={() => handleClick("components")} >Components</TabButton>
        <TabButton onSelect={() => handleClick("jsx")} >JSX</TabButton>
        <TabButton onSelect={() => handleClick("props")} >Props</TabButton>
        <TabButton onSelect={() => handleClick("state")} >State</TabButton>
          </menu>
          {!selectedTopic ? <p>Please select topic</p>:
          <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>} 
        </section>
      </main>
    </div>
  );
}

export default App;