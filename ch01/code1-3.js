function showStudent(ssn) {
  // 지금은 동기 방식으로 호출
  let student = db.find(ssn);
  if (student !== null) {
    // 함수 밖에서 ID가 elementId인 요소를 찾는다
    (document.querySelector(`#${elementId}`).innerHTML = `${student.ssn}`),
      `${student.firstname}`,
      `${student.lastname}`;
  } else {
    throw new Error('학생을 찾을 수 없습니다!');
  }
}

showStudent('444-444-444');

//refactoring

var find = curry((db, id) => {
  let obj = db.find(id);
  if (obj === null) {
    throw new Error('객체를 찾을 수 없습니다');
  }
  return obj;
});
// 검색할 학생 id 와 객체를 찾는다

var csv = (student) =>
  `${student.ssn}, ${student.firstname} ${studentlastname}`;

var append = curry((selector, info) => {
  document.querySelector(selector).innerHTML = info;
});
