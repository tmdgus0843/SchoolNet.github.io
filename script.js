function showSection(section) {
  // 각 섹션 표시 로직
  alert(section + ' 섹션을 보려면 로그인이 필요합니다.');
}

function selectUserType(type) {
  const buttons = document.querySelectorAll('.user-type-selection button');
  buttons.forEach(button => button.classList.remove('active'));
  event.target.classList.add('active');
}

function showLogin() {
  document.getElementById('mainContent').style.display = 'none';
  document.getElementById('signupForm').style.display = 'none';
  document.getElementById('loginForm').style.display = 'block';
}

function showSignup() {
  document.getElementById('mainContent').style.display = 'none';
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('signupForm').style.display = 'block';
}

function login() {
  const id = document.getElementById('loginId').value;
  const pw = document.getElementById('loginPw').value;

  if (!id || !pw) {
    alert('아이디와 비밀번호를 모두 입력해주세요.');
    return;
  }

  // 로그인 시도
  alert('로그인 시도: ' + id);
}

function signup() {
  const id = document.getElementById('signupId').value;
  const studentInfo = document.getElementById('studentInfo').value;
  const pw = document.getElementById('signupPw').value;

  if (!id || !studentInfo || !pw) {
    alert('모든 필드를 입력해주세요.');
    return;
  }

  if (pw.length < 5) {
    document.getElementById('pwError').style.display = 'block';
    return;
  }

  // 회원가입 시도
  alert('회원가입 시도');
}

// 아이디 중복 체크
document.getElementById('signupId').addEventListener('input', function (e) {
  const id = e.target.value;
  const errorElement = document.getElementById('idError');

  if (id === 'ji_seunghyun') {
    errorElement.textContent = '이미 가입한 사용자입니다.';
    errorElement.style.display = 'block';
  } else {
    errorElement.style.display = 'none';
  }
});

// 비밀번호 유효성 검사
document.getElementById('signupPw').addEventListener('input', function (e) {
  const pw = e.target.value;
  const errorElement = document.getElementById('pwError');

  if (pw.length < 5) {
    errorElement.style.display = 'block';
  } else {
    errorElement.style.display = 'none';
  }
});