import {configuration, OpenAIApi} from "openai";
import dotenv from "dotenv"
dotenv.config();

const openaiApikey=process.env.OPENAI

if (!openaiApikey){
    console.error("OPENAI is not set")
    process.exit(1)

}
const configuration=new configuration({
    apiKey:openaiApikey
})

const openai=new OpenAIApi(configuration)

export default openai