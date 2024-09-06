// 회의실 예약 정보 추가하는 함수(일단 콘솔에 출력)
const addReservation= () => {
    // 1. 선택한 회의실 용도(select)를 출력하는 부분
    const use = document.querySelector('.use option:checked').innerText;
    console.log(`회의 용도: ${use}`);

    // 2. 선택한 회의(input[type="radio"])의 규모를 출력하는 부분
    const scale = document.querySelector('.scale:checked').parentNode.innerText;
    console.log(`회의 규모: ${scale}`);

    // 3. 선택한 장비(input[type="checkbox"])를 출력하는 부분 
    const allEquipments = document.querySelectorAll('.equipment'); // 장비 선택을 위한 input 요소들을 모두 선택하여 Nodelist로 할당
    const checkedEquipments = []; // 선택한 장비를 담을 배열 선언
    allEquipments.forEach(element => { // Nodelist는 유사 배열이므로 배열 순회하는 forEach 함수 사용 가능
        if(element.checked){ // 객체의 속성에 접근하기 위해 점 연산자를 사용한 문법: .checked 사용(.checked는 체크박스나 라디오 버튼의 선택 상태를 나타내는 불리언(boolean) 속성)
            checkedEquipments.push(element.parentNode.innerText); // 장비 이름을 출력하기 위해 부모 요소(parentNode)안의 텍스트 값만(innerText) 배열에 추가(push)
        }
    });
    console.log(`필요 장비: ${checkedEquipments}`);

    // 4. 예약자 성함(input[type="text"]) 요소의 현재 값을 가져오는 부분
    const userName = document.getElementById('user-name').value;
    console.log(`예약자 성함: ${userName}`);

    // 5. 회의 주제(textarea 요소)
    const meetingTopic = document.getElementById('meeting-topic').value;
    console.log(`회의 주제: ${meetingTopic}`);
}