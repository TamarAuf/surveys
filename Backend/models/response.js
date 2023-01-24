const mongoose = require("mongoose");

const responseSchema = new mongoose.Schema({
  B1Responses: {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    gender: {
      type: String,
    },
  },
  B2Responses: {
    clean: {
      type: String,
    },
    winter: {
      type: String,
    },
    sun: {
      type: String,
    },
    sensitive: [
      {
        type: String,
      },
    ],
  },
  B3Responses: {
    agree: {
      type: String,
    },
    skinType: {
      type: String,
    },
  },
  B4Responses: {
    ageRelated: [
      {
        type: String,
      },
    ],
    acneRelated: [
      {
        type: String,
      },
    ],
    redness: [
      {
        type: String,
      },
    ],
    flakes: [
      {
        type: String,
      },
    ],
    facialHair: {
      type: String,
    },
  },
  B5Responses: {
    Acne: {
      pimpels: {
        type: String,
      },
      changes: [
        {
          type: String,
        },
      ],
      skinReact: {
        type: String,
      },
    },
    Pigmentation: {
      problem: [
        {
          type: String,
        },
      ],
      sunExposure: {
        type: String,
      },
      otherFactor: [
        {
          type: String,
        },
      ],
    },
    Shave: {
      often: {
        type: String,
      },
      razor: {
        type: String,
      },
    },
  },
  B6Responses: {
    smoke: {
      type: String,
    },
    allergy: [
      {
        type: String,
      },
    ],
    circumstance: {
      type: String,
    },
    hormonal: {
      type: String,
    },
    impact: {
      type: String,
    },
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",   
  },
  recommendation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "recommendation",   
  },
});

module.exports = mongoose.model("response", responseSchema);
