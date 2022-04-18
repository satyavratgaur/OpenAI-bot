import Head from 'next/head';
import { useState } from 'react';
import styles from './index.module.css';

export default function Home() {
  const [questionInput, setQuestionInput] = useState('');
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question: questionInput }),
    });
    const data = await response.json();
    setResult(data.result);
    setAnswer('');
  }

  return (
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
      </Head>

      <main className={styles.main}>
        <h3>Hey I'm Sat and they made me into a stupid bot.</h3>
        <h4>You can ask me questions if you want or not, idc</h4>
        <form onSubmit={onSubmit}>
          <input
            type='text'
            name='Question'
            placeholder='Ask a question'
            value={questionInput}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <input type='submit' value='Get answers' />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}
