// 예약 완료하기 버튼 클릭 시 실행
// 회의실 예약 정보를 모달 팝업의 요소로 추가하는 함수
const addReservation = () => {
    // 1. 선택한 회의실 용도(select)를 출력하는 부분
    const selectedUseNode = document.querySelector('.use option:checked').innerText;
    const printUseNode = document.getElementById('printUse');
    printUseNode.innerHTML = `<span>회의 용도:</span> ${selectedUseNode}`;

    // 2. 선택한 회의(input[type="radio"])의 규모를 출력하는 부분
    const scale = document.querySelector('.scale:checked').parentNode.innerText;
    const printScaleNode = document.getElementById('printScale');
    printScaleNode.innerHTML = `<span>회의 규모:</span> ${scale}`;

    // 3. 선택한 장비(input[type="checkbox"])를 출력하는 부분 
    const allEquipments = document.querySelectorAll('.equipment'); // 장비 선택을 위한 input 요소들을 모두 선택하여 Nodelist로 할당
    const checkedEquipments = []; // 선택한 장비를 담을 배열 선언
    allEquipments.forEach(element => { // Nodelist는 유사 배열이므로 배열 순회하는 forEach 함수 사용 가능
        if(element.checked){ // 객체의 속성에 접근하기 위해 점 연산자를 사용한 문법: .checked 사용(.checked는 체크박스나 라디오 버튼의 선택 상태를 나타내는 불리언(boolean) 속성)
            checkedEquipments.push(element.parentNode.innerText); // 장비 이름을 출력하기 위해 부모 요소(parentNode)안의 텍스트 값만(innerText) 배열에 추가(push)
        }
    });
    const printEquipmentNode = document.getElementById('printEquipment');
    printEquipmentNode.innerHTML = `<span>필요 장비:</span> ${checkedEquipments.join(', ')}`;

    // 4. 예약자 성함(input[type="text"]) 요소의 현재 값을 가져오는 부분
    const userName = document.getElementById('user-name').value;
    const printNameNode = document.getElementById('printName');
    printNameNode.innerHTML = `<span>예약자 성함:</span> ${userName}`;

    // 5. 회의 주제(textarea 요소)
    const meetingTopic = document.getElementById('meeting-topic').value;
    const printTopicNode = document.getElementById('printTopic');
    printTopicNode.innerHTML = `<span>회의 주제:</span> ${meetingTopic}`;

    let spanNode = document.querySelectorAll('span');
    spanNode.forEach((element) => {
        element.style.color="#666";
    })
    console.log(spanNode);
}

// 예약 확인하기 버튼 클릭 시 모달 팝업 화면 띄우는 함수
const confirmReservation = () => {
    let modalNode = document.querySelector('.modal-wrapper');
    modalNode.style.display="unset";
}

// 모달 팝업 화면에서 닫기 버튼 클릭 시 모달 팝업 화면 닫기
const modalClose = () => {
    let modalNode = document.querySelector('.modal-wrapper');
    modalNode.style.display="none";
}