let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

const examWeight = 0.65;
const exerciseWeight = 0.35;

//need to get

function generateClassRecordSummary(scores) {
  //an array of score objects with both exams and exercises
  let scoreData = Object.keys(scores).map(student => scores[student].scores);

  //transform the above score objects into an array of arrays for exam scores:
  let examData = scoreData.map(studObj => studObj.exams);

  return {
    studentGrades: scoreData.map(scoreObj => getStudentScore(scoreObj)),
    exams: getExamSummary(examData),
  };
}

function getStudentScore(scoreObj) {
//input is scoreObj which is
    return `${studentNumberScore(scoreObj)} ${studentLetterScore()}
};

function getExamSummary(examData) {
  let transpose = examData.reduce((prev, curr, idx, arr) => )
  return examData.map(getExamObj)
}

function getExamObj(exam) {
  let transpose =
  return {
    average: getAverage()
  }
}
//
// function generateClassRecordSummary(scores) {
//   return {
//     studentGrades: getStudentGrades(scores),
//     exams: getExams(scores)
//   }
// };
//
// function getExams(scores) {
//   //for each exam, obtain the avg, min, and max
//   //place these in an object
//   //round avg to tens place
//   return scores.map()
// }
//
// function generateClassRecordSummary(scores) {
//   scores.map(score => { Object.assign({}, {
//     studentGrades
//
//   exams: {
//               average: getAverage(score),
//               minimum: getMinimum(score),
//               maximum: getMaximum(score)
//
//             })
// }
//
// generateClassRecordSummary(studentScores);
//
// // returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }
