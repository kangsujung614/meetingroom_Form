// 회의실 예약 정보 추가하는 함수(일단 콘솔에 출력)
const addReservation= () => {
    
    // 필요 장비(checkbox 요소)
    allEquipments = document.querySelectorAll('.checkbox-label')

    let checkedEquipments = []
    allEquipments.forEach(element => {
        checkedEquipments.push(element.innerText)
    });
    console.log(`필요한 장비: ${checkedEquipments}`) // 일단 모든 장비 출력

    // 예약자 성함(input 요소)
    let userName = document.getElementById('user-name').value
    console.log(`예약자 성함: ${userName}`)

    // 회의 주제(textarea 요소)
    let meetingTopic = document.getElementById('meeting-topic').value
    console.log(`회의 주제: ${meetingTopic}`)
}