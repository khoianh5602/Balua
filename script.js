
function suggestTime(count) {
  const suggestion = document.getElementById("suggestion");
  if (count <= 300) {
    suggestion.innerHTML = "\u2714️ Đây là thời điểm lý tưởng để gửi xe!";
  } else if (count <= 600) {
    suggestion.innerHTML = "\u26A0️ Bãi xe đang dần đầy, nên tranh thủ!";
  } else {
    suggestion.innerHTML = "\uD83D\uDD34 Bãi xe sắp quá tải, nên cân nhắc gửi!";
  }
}

function checkCapacity(total) {
  const alt = document.getElementById("altSuggestion");
  if (total > 1000) {
    alt.innerHTML =
      "\uD83D\uDED1 Vượt quá giới hạn! Hiện chỉ còn gợi ý gửi xe ngoài trường.";
  }
}

function showTrafficTime() {
  alert("Giờ cao điểm là 9h30, 12h10, 14h40. Cập nhật theo thời gian thực.");
}

function login() {
  const id = document.getElementById("studentId").value;
  const pw = document.getElementById("password").value;
  if (id === "" || pw === "") {
    alert("Vui lòng nhập đầy đủ mã số sinh viên và mật khẩu.");
  } else {
    // Đánh dấu đã đăng nhập
    localStorage.setItem("loggedIn", "true");

    document.getElementById("login-section").classList.add("hidden");
    document.getElementById("main-section").classList.remove("hidden");
    alert(`Chào mừng ${id}! Hệ thống sẽ hiển thị gợi ý gửi xe hôm nay.`);
  }
}

function logout() {
  // Xóa trạng thái đăng nhập
  localStorage.removeItem("loggedIn");
  document.getElementById("main-section").classList.add("hidden");
  document.getElementById("login-section").classList.remove("hidden");
}

// Khi trang index.html được load
window.onload = function () {
  if (localStorage.getItem("loggedIn") === "true") {
    document.getElementById("login-section").classList.add("hidden");
    document.getElementById("main-section").classList.remove("hidden");
  }
};

