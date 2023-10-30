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
            {CORE_CONCEPTS.map((concept) => <CoreConcept key={concept.title}{...concept} /> )}
          </ul>
        </section>
        <section id='examples' >
          <h2>Examples</h2>
          <menu>
        <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleClick("components")} >Components</TabButton>
        <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleClick("jsx")} >JSX</TabButton>
        <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleClick("props")} >Props</TabButton>
        <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleClick("state")} >State</TabButton>
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