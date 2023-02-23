import React, { useState, useEffect } from 'react';
import { Main } from './components/Avg_Components/Main';
import { Navbar } from './components/Avg_Components/Navbar';
import { Projects } from './components/Avg_Components/Projects';
import { About } from './components/Avg_Components/About';
import { Reviews } from './components/Dynamic_Components/Reviews';
import { Animate } from './components/Avg_Components/Animate';
import { ContactForm } from './components/Dynamic_Components/ContactForm';



function App() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    console.log(modalOpen);
  }, [modalOpen]);

  return (
    <div className="bg-gray-800" >
      <Navbar />
      <Main />
      {modalOpen && <ContactForm modal={modalOpen} setModal={setModalOpen} />}
      <Animate>
        <About />
      </Animate>
      <Animate>
        <Projects />
      </Animate>
      <Animate>
        <Reviews />
      </Animate>
    </div>
  );
}

export default App;
