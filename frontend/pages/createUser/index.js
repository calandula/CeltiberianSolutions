import { useState } from 'react';
import styles from '@/styles/CreateUser.module.css'

function CreateUser({ addUser }) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        console.log(process.env)
        const response = await fetch(process.env.apiURL + '/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, surname, username, password }),
        });
        const data = await response.json();
        if (response.ok) {
            console.log(data);
            setName('');
            setSurname('');
            setUsername('');
            setPassword('');
            setErrorMessage('');
        } else {
            setErrorMessage(data.message);
        }
    } catch (error) {
      setErrorMessage('An error occurred while adding the user.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.createuserform}>
      <div>
        <label htmlFor="name">*Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="surname">Surname:</label>
        <input
          type="text"
          id="surname"
          value={surname}
          onChange={(event) => setSurname(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="username">*Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">*Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </div>
      <button type="submit">Add User</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </form>
  );
}

export default CreateUser;