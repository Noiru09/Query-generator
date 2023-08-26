import openaiClient from "./api.js";

const generate = async (queryDescription, dbName) => {

  const chatGPT = async (queryDescription, dbName) => {
    
    const message = [
      { role: "system", content: `You are a translator from plain English to ${dbName}.` },
      { role: "user", content: `Convert the following natural language description into a ${dbName} query:
      Answer only the query
      \n\n ${queryDescription} ` },    
    ];
    const response = await openaiClient.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: message,
      max_tokens:100
    });

    return response.data.choices[0].message.content;
  }

  const dbQuery = await chatGPT(queryDescription, dbName);
  return dbQuery;

};

export default generate;