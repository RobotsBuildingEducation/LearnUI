const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express");
const cors = require("cors");
const { Configuration, OpenAIApi } = require("openai");
const bodyParser = require("body-parser");
// import express from 'express';
// import * as dotenv from 'dotenv';
// import cors from 'cors';
// import { Configuration, OpenAIApi } from 'openai';

// dotenv.config();

// console.log("keys", process.env.OPENAI_API_KEY)

const configuration = new Configuration({
  // apiKey: process.env.OPENAI_API_KEY,
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.get("/", async (req, res) => {
  res.status(200).send({
    message: "Hello from codeX",
  });
});

app.post("/prompt", async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${prompt}`,
      temperature: 0,
      max_tokens: 2047,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop: ['"""'],
    });

    res.status(200).send({
      bot: response.data.choices[0].text,
    });
  } catch (error) {
    console.log("post error", error);
    res.status(500).send({ error });
  }
});

exports.app = functions.https.onRequest(app);
