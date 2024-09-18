let validation = true; // 검증 상태

// 예약 완료하기 버튼 클릭 시 실행(회의실 예약 정보를 모달 팝업의 요소로 추가하는 함수)
const addReservation = () => {
    validation = true; // 리셋
    controlUse();
    controlScale();
    controlEquipment();
    controlUserName();
    controlTopic();
}

// 예약 확인하기 버튼 클릭 시 모달 팝업 화면 띄우는 함수
const confirmReservation = () => {
    if(validation === true){
        let modalNode = document.querySelector('.modal-wrapper');
        modalNode.style.display="unset";
    } else {
        alert("예약이 정상적으로 이루어지지 않았거나 예약 내역이 없습니다.");
    }
}

// 모달 팝업 화면에서 닫기 버튼 클릭 시 모달 팝업 화면 닫기
const modalClose = () => {
    let modalNode = document.querySelector('.modal-wrapper');
    modalNode.style.display="none";
}

// 회의실 용도 부분 검증 및 출력하는 함수
function controlUse() {
    const defaultValue = document.querySelector('.use option:checked').value;
    if(defaultValue === "default"){
        alert("어떤 용도로 이용할 예정이신지 선택해주세요.");
        validation = false;
    } else {
        // 선택한 회의실 용도(select)를 출력하는 부분
        const selectedUseNode = document.querySelector('.use option:checked').innerText;
        const printUseNode = document.getElementById('printUse');
        printUseNode.innerText = `회의 용도: ${selectedUseNode}`;
    }
}

// 회의 규모 부분 검증 및 출력하는 함수
function controlScale() {
    const scale = document.querySelector('.scale:checked');
    if(scale === null){
        alert("회의의 규모를 선택해주세요.");
        validation = false;
    } else { // 선택한 회의(input[type="radio"])의 규모를 출력하는 부분
        const printScaleNode = document.getElementById('printScale');
        printScaleNode.innerText = `회의 규모: ${scale.parentNode.innerText}`;
    }
}

// 필요 장비 부분 검증 및 출력하는 함수
function controlEquipment() {
    const allEquipments = document.querySelectorAll('.equipment'); // 장비 선택을 위한 input 요소들을 모두 선택하여 Nodelist로 할당
    const checkedEquipments = []; // 선택한 장비를 담을 배열 선언
    allEquipments.forEach(element => { // Nodelist는 유사 배열이므로 배열 순회하는 forEach 함수 사용 가능
        if(element.checked){ // 객체의 속성에 접근하기 위해 점 연산자를 사용한 문법: .checked 사용(.checked는 체크박스나 라디오 버튼의 선택 상태를 나타내는 불리언(boolean) 속성)
            checkedEquipments.push(element.parentNode.innerText); // 장비 이름을 출력하기 위해 부모 요소(parentNode)안의 텍스트 값만(innerText) 배열에 추가(push)
        }
    });

    // 선택한 장비가 없다면(선택한 장비를 담는 배열이 비었다면)
    const printEquipmentNode = document.getElementById('printEquipment');
    if(Array.isArray(checkedEquipments) && checkedEquipments.length === 0){
        printEquipmentNode.innerText = `필요 장비: 없음`;
    } else
    {
        // 선택한 장비(input[type="checkbox"])를 출력하는 부분 
        printEquipmentNode.innerText = `필요 장비: ${checkedEquipments.join(', ')}`;
    }
}

// 예약자 성함 부분 검증 및 출력하는 함수
function controlUserName() {
    let userName = document.getElementById('user-name').value;
    const regExp = /[^a-zA-Z\p{Script=Hangul}]/u; // 알파벳, 한글만 입력 가능

    userName = userName.trim(); // 앞, 뒤 공백 제거
    if(userName === ''){ // 미입력 시
        alert("예약자의 성함을 입력해주세요.");
        validation = false;
    } else if(regExp.test(userName)){
        alert("성함은 알파벳, 한글로만 입력해주세요.");
        validation = false;
    } else {
        // 예약자 성함(input[type="text"]) 요소의 현재 값을 출력하는 부분
        const printNameNode = document.getElementById('printName');
        printNameNode.innerText = `예약자 성함: ${userName}`;
    }
}

// 회의 주제 부분 검증 및 출력하는 함수
function controlTopic() {
    // 회의 주제(textarea 요소)
    let meetingTopic = document.getElementById('meeting-topic').value;
    meetingTopic = meetingTopic.trim();
    if(meetingTopic === ''){
        alert("회의의 주제를 입력해주세요.");
        validation = false;
    } else {
        const printTopicNode = document.getElementById('printTopic');
        printTopicNode.innerText = `회의 주제: ${meetingTopic}`;
    }
}