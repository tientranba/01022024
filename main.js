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
<<<<<<< HEAD
      // Chuyển hướng đến trang Google.com khi đăng nhập đúng
      window.location.href = 'https://tientranba.github.io/countlove/';
    }
    else if (tenBe === 'nguyenthingocthao' && ngaySinhBe === '09012005') {
      // Chuyển hướng đến trang Google.com khi đăng nhập đúng
      window.location.href = 'https://tientranba.github.io/countlove/';
    }
    else if (tenBe === 'thao' && ngaySinhBe === '09012005') {
      // Chuyển hướng đến trang Google.com khi đăng nhập đúng
      window.location.href = 'https://tientranba.github.io/countlove/';
    }
    else if (tenBe === 'batien' && ngaySinhBe === '28032005') {
        // Chuyển hướng đến trang Google.com khi đăng nhập đúng
      window.location.href = 'https://tientranba.github.io/countlove/';
    }
     else {
=======
  
      window.location.href = 'https://tientranba.github.io/countlove/';
    } else {
>>>>>>> 59c5dcdf5c1017f2d61dfb313b8eed676712551b
      alert('Có phải bồ tui khong đó???');
    }
  }
