let submissions = [
    { "name": "jane", "score": 95, "date": "2020-01-24", "passed": true}, {"name": "joe","score": 77, "date": "2018-05-14", "passed": true},{"name": "jack", "score": 59, "date": "2019-07-05",  "passed": false},{"name": "jill", "score": 88, "date": "2020-04-22", "passed": true}];

function addSubmission(array, newName, newScore,newDate) {
(newScore >= 60 ? array.push({"name": newName, "score": newScore, "date": newDate, "passed": true}) : array.push({"name": newName, "score": newScore, "date": newDate, "passed": false}));
}

function deleteSubmissionByIndex(array, index) {
    array.splice(index,1);
}


function deleteSubmissionByName(array, name) {
    let removeMe = array.findIndex((thing) => {
        return thing.name === name;
        });
    return array.splice(removeMe,1);
}

 function editSubmission(array, index, score) {
    array[index].score = score;
    (score >= 60 ? array[index].passed = true : array[index].passed = false);
    return array 
 }


function findSubmissionByName(array, name) {
    return array.find((thing) => {
    return thing.name === name;
    });
    }


function findLowestScore(array) {
  let currentLowest = array[0];
  array.forEach((thing) => {
    if (thing.score < currentLowest.score) {
      currentLowest = thing;
    }
  });
  return currentLowest;
};


console.log(findLowestScore(submissions));

function findAverageScore(array) {
    let sum = 0;
    for (let element of array) {
        sum += element.score;
    }
return sum / array.length;
}

function filterPassing(array) {
    return array.filter((thing) => {
        return thing.passed;
    });
}


function filter90AndAbove(array) {
    return array.filter((thing) => {
        return thing.score >= 90;
    });
}
