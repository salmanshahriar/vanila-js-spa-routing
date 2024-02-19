const toggleMenuOpen = () => document.body.classList.toggle("menu-open");

const toggleModal = () => {
    const bodyClassList = document.body.classList;

    if (bodyClassList.contains("open")) {
      bodyClassList.remove("open");
      bodyClassList.add("closed");
    } else {
      bodyClassList.remove("closed");
      bodyClassList.add("open");
    }
}

const signup = document.querySelector(".signup");
const login = document.querySelector(".login");
const slider = document.querySelector(".slider");
const formSection = document.querySelector(".form-section");
 
signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
    setTimeout(() => {
      signup.classList.add("activeBtn");
      login.classList.remove("activeBtn");
    },200)
});
 
login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
    setTimeout(() => {
      login.classList.add("activeBtn");
      signup.classList.remove("activeBtn");
    },200)
});