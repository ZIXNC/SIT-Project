function selectRoute(price, carbon, name) {
    // อัปเดตตัวเลขในส่วนสรุปยอด
    document.getElementById('total-price').innerText = price + " บาท";
    document.getElementById('total-carbon').innerText = (carbon / 1000).toFixed(3) + " tCO₂eq";
    
    alert("คุณได้เลือก: " + name);
}

document.getElementById('confirm-btn').addEventListener('click', function() {
    const start = document.getElementById('start-point').value;
    const end = document.getElementById('end-point').value;
    
    if(start && end) {
        alert("กำลังค้นหาเส้นทางจาก " + start + " ไปยัง " + end);
    } else {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    }
});