import { Column } from "../common/ui-library/app-repository-admin-panel/src/views/table/mui/TableStickyHeader";

const rapidKey = "4ba68e9f0emsh365d8594c1e2cf3p1d5bf2jsn158770d5835d";
const rapidHost = "judge0-ce.p.rapidapi.com";

export const rapidApi = {
  key: rapidKey,
  host: rapidHost,
};

export const codingCollection = {
  id: "",
  type: "CODING",
  title: "Tic-Tac-Toe",
  question:
    "There are 3 people Ramu, Abhi, and Kishore. Age of all 3 of them is not the same. One day they went to a swimming pool where there is an age limit. Among them, one's age is under the age limit. Find who is not allowed to go to the swimming pool. \nComplete the below code by referring to the above problem statement use our compiler towards your right and find who is young and print his name.",
  input_format:
    "3 integers a1,a2,a3 which are the ages of the person Ramu, Abhi and Kishore respectively. \n -128 < a1 <127 \n -128 < a2 <127 \n -128 < a3 < 127",
  constraint: "",
  output_format:
    "A single line output that will display the name of the person who is not allowed to go to the swimming pool.",
  samples: [
    {
      input: "8",
      output: "24",
    },
    {
      input: "3",
      output: "9",
    },
  ],
  base_code:
    "Y2xhc3MgWW91bmdlc3QKewoJYnl0ZSB5b3VuZyhieXRlIGEsIGJ5dGUgYiwgYnl0ZSBjKQoJewoJCWJ5dGUgcmVzOwoKCgoJCS8vd3JpdGUgeW91ciBjb2RlIGhlcmUKCgoKCQlyZXR1cm4gIHJlczsKCX0KfQpwdWJsaWMgY2xhc3MgUG9vbEFwcAp7CglwdWJsaWMgc3RhdGljIHZvaWQgbWFpbihTdHJpbmdbXSBhcmdzKQoJewoJCVNjYW5uZXIgc2Nhbj1uZXcgU2Nhbm5lcihTeXN0ZW0uaW4pOwoJCWJ5dGUgUmFtdT1zY2FuLm5leHRJbnQoKTsKYnl0ZSBBYmhpPXNjYW4ubmV4dEludCgpOwpieXRlIEtpc2hvcmU9c2Nhbi5uZXh0SW50KCk7CgkJWW91bmdlc3QgeSA9IG5ldyBZb3VuZ2VzdCgpOwoKCgkJLy9jb21wbGV0ZSB0aGUgbWFpbiBtZXRob2QKCX0KfQo=",
  max_time_complexity: "20ms",
  max_space_complexity: "500b",
  test_cases: [
    {
      input: "base_64_string",
      output: "base_64_string",
    },
    {
      input: "base_64_string",
      output: "base_64_string",
    },
    {
      input: "base_64_string",
      output: "base_64_string",
    },
  ],
  min_score: 3,
  created_by: "KODNEST",
  language: "JAVA",
  meta: {
    something: "",
  },
  enabled: true,
  created_at: "",
};

export const mcqCollection = {
  id: "1",
  type: "MCQ",
  questions: [
    {
      question:
        "Out of all the 2-digit integers between 1 and 100, a 2-digit number has to be selected at random. What is the probability that the selected number is not divisible by 7?",
      options: [
        {
          option_id: "1",
          option: "13/90",
          is_correct: false,
        },
        {
          option_id: "2",
          option: "12/90",
          is_correct: false,
        },
        {
          option_id: "3",
          option: "78/90",
          is_correct: false,
        },
        {
          option_id: "4",
          option: "77/90",
          is_correct: false,
        },
      ],
    },
    {
      question:
        "A deck of 5 cards (each carrying a distinct number from 1 to 5) is shuffled thoroughly. Two cards are then removed one at time from the deck. What is the probability that the two cards are selected with the number on the first card being one higher than the number on the second card?",
      options: [
        {
          option_id: "1",
          option: "1/5",
          is_correct: false,
        },
        {
          option_id: "2",
          option: "4/25",
          is_correct: false,
        },
        {
          option_id: "3",
          option: "1/4",
          is_correct: false,
        },
        {
          option_id: "4",
          option: "2/5",
          is_correct: false,
        },
      ],
    },
    {
      question: "Were you a bird, you ______________ in the sky.",
      options: [
        {
          option_id: "1",
          option: "would fly",
          is_correct: false,
        },
        {
          option_id: "2",
          option: "shall fly",
          is_correct: false,
        },
        {
          option_id: "3",
          option: "should fly",
          is_correct: false,
        },
        {
          option_id: "4",
          option: "will fly",
          is_correct: false,
        },
      ],
    },
    {
      question: "Which one is NOT divisible by 3 ?",
      options: [
        {
          option_id: "1",
          option: "5271",
          is_correct: false,
        },
        {
          option_id: "2",
          option: "6291",
          is_correct: false,
        },
        {
          option_id: "3",
          option: "4372",
          is_correct: false,
        },
        {
          option_id: "4",
          option: "8952",
          is_correct: false,
        },
      ],
    },
    {
      question:
        "The least perfect square, which is divisible by each of 15, 20 and 36 is:",
      options: [
        {
          option_id: "1",
          option: "1200",
          is_correct: false,
        },
        {
          option_id: "2",
          option: "800",
          is_correct: false,
        },
        {
          option_id: "3",
          option: "1000",
          is_correct: false,
        },
        {
          option_id: "4",
          option: "900",
          is_correct: false,
        },
      ],
    },
    {
      question:
        "A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
      options: [
        {
          option_id: "1",
          option: "13/90",
          is_correct: false,
        },
        {
          option_id: "2",
          option: "12/90",
          is_correct: false,
        },
        {
          option_id: "3",
          option: "78/90",
          is_correct: false,
        },
        {
          option_id: "4",
          option: "77/90",
          is_correct: false,
        },
      ],
    },
    {
      question:
        "A train 125 m long passes a man, running at 5 km/hr in the same direction in which the train is going, in 10 seconds. The speed of the train is:",
      options: [
        {
          option_id: "1",
          option: "1/5",
          is_correct: false,
        },
        {
          option_id: "2",
          option: "4/25",
          is_correct: false,
        },
        {
          option_id: "3",
          option: "1/4",
          is_correct: false,
        },
        {
          option_id: "4",
          option: "2/5",
          is_correct: false,
        },
      ],
    },
    {
      question:
        "The length of the bridge, which a train 130 metres long and travelling at 45 km/hr can cross in 30 seconds, is:",
      options: [
        {
          option_id: "1",
          option: "would fly",
          is_correct: false,
        },
        {
          option_id: "2",
          option: "shall fly",
          is_correct: false,
        },
        {
          option_id: "3",
          option: "should fly",
          is_correct: false,
        },
        {
          option_id: "4",
          option: "will fly",
          is_correct: false,
        },
      ],
    },
    {
      question:
        "Two trains running in opposite directions cross a man standing on the platform in 27 seconds and 17 seconds respectively and they cross each other in 23 seconds. The ratio of their speeds is:",
      options: [
        {
          option_id: "1",
          option: "5271",
          is_correct: false,
        },
        {
          option_id: "2",
          option: "6291",
          is_correct: false,
        },
        {
          option_id: "3",
          option: "4372",
          is_correct: false,
        },
        {
          option_id: "4",
          option: "8952",
          is_correct: false,
        },
      ],
    },
    {
      question:
        "A train passes a station platform in 36 seconds and a man standing on the platform in 20 seconds. If the speed of the train is 54 km/hr, what is the length of the platform?",
      options: [
        {
          option_id: "1",
          option: "1200",
          is_correct: false,
        },
        {
          option_id: "2",
          option: "800",
          is_correct: false,
        },
        {
          option_id: "3",
          option: "1000",
          is_correct: false,
        },
        {
          option_id: "4",
          option: "900",
          is_correct: false,
        },
      ],
    },
    {
      question:
        "A train passes a station platform in 36 seconds and a man standing on the platform in 20 seconds. If the speed of the train is 54 km/hr, what is the length of the platform?",
      options: [
        {
          option_id: "1",
          option: "1200",
          is_correct: false,
        },
        {
          option_id: "2",
          option: "800",
          is_correct: false,
        },
        {
          option_id: "3",
          option: "1000",
          is_correct: false,
        },
        {
          option_id: "4",
          option: "900",
          is_correct: false,
        },
      ],
    },
    {
      question:
        "A train passes a station platform in 36 seconds and a man standing on the platform in 20 seconds. If the speed of the train is 54 km/hr, what is the length of the platform?",
      options: [
        {
          option_id: "1",
          option: "1200",
          is_correct: false,
        },
        {
          option_id: "2",
          option: "800",
          is_correct: false,
        },
        {
          option_id: "3",
          option: "1000",
          is_correct: false,
        },
        {
          option_id: "4",
          option: "900",
          is_correct: false,
        },
      ],
    },
    {
      question:
        "A train passes a station platform in 36 seconds and a man standing on the platform in 20 seconds. If the speed of the train is 54 km/hr, what is the length of the platform?",
      options: [
        {
          option_id: "1",
          option: "1200",
          is_correct: false,
        },
        {
          option_id: "2",
          option: "800",
          is_correct: false,
        },
        {
          option_id: "3",
          option: "1000",
          is_correct: false,
        },
        {
          option_id: "4",
          option: "900",
          is_correct: false,
        },
      ],
    },
    {
      question:
        "A train passes a station platform in 36 seconds and a man standing on the platform in 20 seconds. If the speed of the train is 54 km/hr, what is the length of the platform?",
      options: [
        {
          option_id: "1",
          option: "1200",
          is_correct: false,
        },
        {
          option_id: "2",
          option: "800",
          is_correct: false,
        },
        {
          option_id: "3",
          option: "1000",
          is_correct: false,
        },
        {
          option_id: "4",
          option: "900",
          is_correct: false,
        },
      ],
    },
    {
      question:
        "A train passes a station platform in 36 seconds and a man standing on the platform in 20 seconds. If the speed of the train is 54 km/hr, what is the length of the platform?",
      options: [
        {
          option_id: "1",
          option: "1200",
          is_correct: false,
        },
        {
          option_id: "2",
          option: "800",
          is_correct: false,
        },
        {
          option_id: "3",
          option: "1000",
          is_correct: false,
        },
        {
          option_id: "4",
          option: "900",
          is_correct: false,
        },
      ],
    },
    {
      question:
        "A train passes a station platform in 36 seconds and a man standing on the platform in 20 seconds. If the speed of the train is 54 km/hr, what is the length of the platform?",
      options: [
        {
          option_id: "1",
          option: "1200",
          is_correct: false,
        },
        {
          option_id: "2",
          option: "800",
          is_correct: false,
        },
        {
          option_id: "3",
          option: "1000",
          is_correct: false,
        },
        {
          option_id: "4",
          option: "900",
          is_correct: false,
        },
      ],
    },
    {
      question:
        "A train passes a station platform in 36 seconds and a man standing on the platform in 20 seconds. If the speed of the train is 54 km/hr, what is the length of the platform?",
      options: [
        {
          option_id: "1",
          option: "1200",
          is_correct: false,
        },
        {
          option_id: "2",
          option: "800",
          is_correct: false,
        },
        {
          option_id: "3",
          option: "1000",
          is_correct: false,
        },
        {
          option_id: "4",
          option: "900",
          is_correct: false,
        },
      ],
    },
    {
      question:
        "A train passes a station platform in 36 seconds and a man standing on the platform in 20 seconds. If the speed of the train is 54 km/hr, what is the length of the platform?",
      options: [
        {
          option_id: "1",
          option: "1200",
          is_correct: false,
        },
        {
          option_id: "2",
          option: "800",
          is_correct: false,
        },
        {
          option_id: "3",
          option: "1000",
          is_correct: false,
        },
        {
          option_id: "4",
          option: "900",
          is_correct: false,
        },
      ],
    },
    {
      question:
        "A train passes a station platform in 36 seconds and a man standing on the platform in 20 seconds. If the speed of the train is 54 km/hr, what is the length of the platform?",
      options: [
        {
          option_id: "1",
          option: "1200",
          is_correct: false,
        },
        {
          option_id: "2",
          option: "800",
          is_correct: false,
        },
        {
          option_id: "3",
          option: "1000",
          is_correct: false,
        },
        {
          option_id: "4",
          option: "900",
          is_correct: false,
        },
      ],
    },
    {
      question:
        "A train passes a station platform in 36 seconds and a man standing on the platform in 20 seconds. If the speed of the train is 54 km/hr, what is the length of the platform?",
      options: [
        {
          option_id: "1",
          option: "1200",
          is_correct: false,
        },
        {
          option_id: "2",
          option: "800",
          is_correct: false,
        },
        {
          option_id: "3",
          option: "1000",
          is_correct: false,
        },
        {
          option_id: "4",
          option: "900",
          is_correct: false,
        },
      ],
    },
  ],
  created_by: "KODNEST",
  min_score: 3,
  meta: {},
  enabled: true,
  created_at: "",
};

export const questionLegends = [
  {
    id: 1,
    name: "Not Visited",
    className: "",
    number: 14,
  },
  {
    id: 2,
    name: "Answered",
    className: "answered",
    number: 11,
  },
  {
    id: 3,
    name: "Not Answered",
    className: "not-answered",
    number: 16,
  },
  {
    id: 4,
    name: "Marked for Review",
    className: "is-marked",
    number: 15,
  },
];

export const mcqResultCollection = {
  submission_id: "46456ac4-a097-11ed-9e19-acde48001122",
  assessment_id: "1",
  assessment_name: "pyton basics - test",
  user_id: "1",
  questions: [
    {
      question_id: 1,
      question: "Question 1",
      options: [
        {
          option_id: "1",
          option: "Option 1",
          user_response: false,
          correct_response: true,
        },
        {
          option_id: "2",
          option: "Option 2",
          user_response: false,
          correct_response: true,
        },
        {
          option_id: "3",
          option: "Option 3",
          user_response: false,
          correct_response: true,
        },
        {
          option_id: "4",
          option: "Option 4",
          user_response: false,
          correct_response: true,
        },
      ],
      score: 0,
      maximum_marks: 5,
    },
    {
      question_id: 1,
      question: "Question 1",
      options: [
        {
          option_id: "1",
          option: "Option 1",
          user_response: false,
          correct_response: true,
        },
        {
          option_id: "2",
          option: "Option 2",
          user_response: false,
          correct_response: true,
        },
        {
          option_id: "3",
          option: "Option 3",
          user_response: false,
          correct_response: true,
        },
        {
          option_id: "4",
          option: "Option 4",
          user_response: false,
          correct_response: true,
        },
      ],
      score: 0,
      maximum_marks: 5,
    },
  ],
  maximum_marks: 12,
  total_score: 3,
  minimum_score: 3,
  status: "1",
  total_correct: 6,
  total_unattempted: 2,
  total_incorrect: 5,
  time_taken: 3600000,
  total_time: 5400000,
};

export const mcqCollectionWithTabs = {
  id: "1",
  type: "MCQ",
  sections: [
    {
      section_id: "1",
      section_name: "english",
      questions: [
        {
          question: "Were you a bird, you ______________ in the sky.",
          options: [
            {
              option_id: "1",
              option: "would fly",
              is_correct: false,
            },
            {
              option_id: "2",
              option: "shall fly",
              is_correct: false,
            },
            {
              option_id: "3",
              option: "should fly",
              is_correct: false,
            },
            {
              option_id: "4",
              option: "will fly",
              is_correct: false,
            },
          ],
        },
      ],
    },
    {
      section_id: "2",
      section_name: "aptitude",
      questions: [
        {
          question:
            "Out of all the 2-digit integers between 1 and 100, a 2-digit number has to be selected at random. What is the probability that the selected number is not divisible by 7?",
          options: [
            {
              option_id: "1",
              option: "13/90",
              is_correct: false,
            },
            {
              option_id: "2",
              option: "12/90",
              is_correct: false,
            },
            {
              option_id: "3",
              option: "78/90",
              is_correct: false,
            },
            {
              option_id: "4",
              option: "77/90",
              is_correct: false,
            },
          ],
        },
      ],
    },
  ],
  created_by: "KODNEST",
  min_score: 3,
  meta: {},
  enabled: true,
  created_at: "",
};

const mcqResultColumns1 = [
  {
    title: "Section",
    dataIndex: "section",
    key: "section",
  },
  {
    title: "Score",
    dataIndex: "score",
    key: "score",
  },
  {
    title: "Accuracy",
    dataIndex: "accuracy",
    key: "accuracy",
  },
  {
    title: "Time Spent",
    dataIndex: "time",
    key: "time",
  },
];

export const mcqResultColumns: Column[] = [
  { id: "section", label: "Section", minWidth: 100 },
  {
    id: "score",
    label: "Score",
    minWidth: 100,
    // align: "right",
    // format: (value: any) => {
    //   // return()
    // },
  },
  {
    id: "accuracy",
    label: "Accuracy",
    minWidth: 100,
    // align: "right",
    // format: (value: number) => `${value.toFixed(2)} %`,
  },
  {
    id: "time",
    label: "Time Spent",
    minWidth: 170,
    // align: "right",
    // format: (value: any) => `${value?.time_taken} / ${value?.total_time}`,
  },
];

export const apiFetchErrMsg = "Some error has occurred";

export const serviceMapping = {
  profile: "UMS",
  assessment: "AS",
  placement: "PMS",
  course: "LMS",
  product: "POS",
};

export const responseObj = {
  message: "Success",
  ok: "200",
};

export const apiResponseMapping = {
  message: "Success",
  profileResCode: `${serviceMapping.profile}200`,
  assessmentResCode: `${serviceMapping.assessment}200`,
};
