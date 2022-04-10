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
