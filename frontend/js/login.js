console.log("THIS IS THE LOGIN.JS FILE THANK YOU");

// You can add your JavaScript code for the login page here
// For example, you might want to handle form submission or validation

document.getElementById("loginBtn").addEventListener("click", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Please fill in all fields");
    return;
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    alert(error.message);
    return;
  }

  window.location.href = "student.html";
});