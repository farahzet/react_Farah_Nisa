import "./ChatAi.css"
import OpenAI from "openai"
import { useState } from "react"
import {ColorRing} from "react-loader-spinner"

const OpenAi = () => {
    const [command, setCommand] = useState('') // state input user
    const [loading, setLoading] = useState(false) // state loader nunggu resposn
    const [result, setResult] = useState([]) // menyimpan respone

    const openai =  new OpenAI({
        apiKey: "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",
        // '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'
        // apiKey: process.env.OPEN_AI_KEY,
        dangerouslyAllowBrowser: true
    });

    // const handleSubmit = async (e) =>{
    //     e.preventDefault()
    //     setLoading(true)
    //     const res = await openai.chat.completions.create({
    //         messages: [{ role: "system", content: command}],
    //         model: "gpt-3.5-turbo",
    //         //max_tokens: 7,
    //         // temperature: 0,
    //         // presence_penalty: 0.0,
    //         // frequency_penalty: 0.0,
    //         // top_p: 1.0
    //     })
    //     setResult(res.choices)
    //     console.log('result ', res);
    //     setLoading(false)
    // }

    const handleSubmit = async (e) =>{
        e.preventDefault()

        setLoading(true)
        const res = await openai.completions.create({
            // prompt: command,
            prompt : "A summarizing article from this url : " + command,
            model: 'text-davinci-003',
            // message: [{ role: "system", content: command}],
            // model: "gpt-3.5-turbo",
            max_tokens: 1500,
            temperature: 0,
            presence_penalty: 1,
            frequency_penalty: 0.0,
            top_p: 1.0
        })
        setResult(res.choices[0].text)
        console.log('result ', res);
        setLoading(false)
    }

    return(
        <div id="kotak">
            <div id="kotak-content">
                <div id="kotak-title">
                    <h2>Input Kalimat</h2>
                </div>
                <table align="center">
                    <label>
                        <div>
                            <textarea
                                name="command"
                                id="command"
                                value={command}
                                onChange={(e) => setCommand(e.target.value)}
                                placeholder={'Masukkan Perintah..'}
                                className="command-gpt"
                            />
                            <br></br>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={(e) => handleSubmit(e)}
                                >
                                Submit
                            </button>
                            {
                                loading ? (
                                    <ColorRing
                                    visible={true}
                                    height="80"
                                    width="80"
                                    ariaLabel="blocks-loading"
                                    wrapperStyle={{}}
                                    wrapperClass="blocks-wrapper"
                                    colors={['#e15b64', '#f476e60', '#f8b26a', '#abbd81', '#849b87']}
                                    /> 
                                ):(
                                <div>
                                    {
                                        result.length > 0 ? result?.map((item, index) => (
                                            <div key={index}>
                                                <p>{item.text}</p>
                                            </div>
                                        )) : <div></div>
                                    }
                                    {/* <p>{result}</p> */}
                                </div>
                           ) }
                        </div>
                    </label>
                </table>
            </div>
        </div>
    )
}

export default OpenAi