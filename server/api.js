import {Configuration,OpenAIApi} from "openai"
import dotenv from "dotenv"
dotenv.config();

const openaiApikey=process.env.OPENAI

if (!openaiApikey){
    console.error("OPENAI is not set")
    process.exit(1)

}
const configu=new Configuration({
    apiKey:openaiApikey
})

const openai=new OpenAIApi(configu)

export default openai