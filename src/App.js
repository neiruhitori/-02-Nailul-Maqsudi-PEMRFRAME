import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Greeting from './Greeting';
import TodoList from './TodoList';

import React, {useState} from 'react';

function Example() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('0');
  const [email, setEmail] = useState('');

  const handeNameChange = (e) => {
    setName(e.target.value);
  };

  const handeAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handeEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <input type='text' placeholder='Nama' value={name} onChange={handeNameChange} />
      <input type='number' placeholder='Umer' value={age} onChange={handeAgeChange} />
      <input type='email' placeholder='Email' value={email} onChange={handeEmailChange} />

      <p>
        {name} berumur {age} tahun dan  emailnya adalah {email}.
      </p>
    </div>
  );

}

function Header() {
  return (
    <header>
      <h1>
        Aplikasi React Saya
      </h1>
    </header>
  );
}

function Main() {
  return (
    <main>
      <h2>
        Selamat Datang di Aplikasi React Saya
        <p>
          Ini adalah area konten utama
        </p>
      </h2>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <p>
        &copy; 2025 Aplikasi React Saya
      </p>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
      <Counter />
      <Greeting name="Nailul" />
      <Example />
      <TodoList />
    </div>
  );
}

export default App;
