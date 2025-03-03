import { useEffect, useRef, useState } from 'react'
import './newPrompt.css'
import model from "../../lib/gemini.js"
import Markdown from 'react-markdown'

const NewPrompt = () => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('')

    const add = async (prompt) => {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        setAnswer(response.text());
        console.log(ans)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const text = e.target.text.value;
        if(!text) return;
        setQuestion(text);
        add(text)
    }

    return(
        <>

        {question && <div className='message user'>{question}</div>}
        {answer && <div className='message'><Markdown>{answer}</Markdown></div>}

        <div className='endChat'></div>
        <form className='newForm' onSubmit={handleSubmit}>
            <label htmlFor='file'>
                <img src='/attachment.png' alt='' />
            </label>
            <input id='file' type='file' multiple={false} hidden/>
            <input type='text' name='text' placeholder='Ask anything' />
            <button>
                <img src='/arrow.png' alt='' />
            </button>
        </form>
        </>
    )
}

export default NewPrompt