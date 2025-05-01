const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const chatBox = express();
chatBox.use(cors());
chatBox.use(bodyParser.json());
