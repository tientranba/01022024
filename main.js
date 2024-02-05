function moveToPassword(event) {
if (event.key === "Enter") {
  document.getElementById("ngaySinhBe").focus();
}
}
  
function moveToSubmit(event) {
if (event.key === "Enter") {
  document.getElementById("submitBtn").click();
}
}


function checkLogin() {
    var tenBe = document.getElementById('tenBe').value;
    var ngaySinhBe = document.getElementById('ngaySinhBe').value;
  
    
    if (tenBe === 'ngocthao' && ngaySinhBe === '09012005') {
  
      window.location.href = 'https://tientranba.github.io/countlove/';
    } else {
      alert('Có phải bồ tui khong đó???');
    }
  }
