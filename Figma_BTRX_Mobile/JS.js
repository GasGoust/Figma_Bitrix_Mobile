        /* ========  1 Анкета  ========== */
// Get the modal
var modal = document.getElementById("Ancet");

// Get the button that opens the modal
// Связаться с нами
var btn = document.getElementById("Сontact_us");
        
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
        
// When the user clicks the button, open the modal 
btn.onclick = function() {
modal.style.display = "block";
modal.style.position ="absolute";
modal.style.transition ="1s"
}
        
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}
        
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        }
}

//Приложить файл
function uploadFile() {
    var fileInput = document.getElementById("file");
    var file = fileInput.files[0];
    var formData = new FormData();
    formData.append("file", file);
  
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/upload");
    xhr.send(formData);
  }
        /*=====Связаться с нами - 2 Анкета====*/

 var next_one = document.getElementById("next_Ancet");
 var modal_two = document.getElementById("Ancet_two");
 next_one.onclick = function(){
    modal_two.style.display ="block";
    modal_two.style.position ="absolute";
    modal_two.style.transition ="1s";
 }
 window.onclick = function(event) {
    if(event.target == modal_two) {
        modal_two.style.display = "none";
    }
 }
 // Кнопка закрыть
var close_two = document.getElementsByClassName("close_two")[0];
close_two.onclick = function() {
    modal_two.style.display = "none";
    }

// Кнопка вернуться на сайт
var Go_to_Header = document.getElementById("Main_Menu");
Go_to_Header.onclick = function(){
    modal_two.style.display = "none";
    modal.style.display ="none";
    nav_li.id ="Main_Nav";
}

            /*==== Свайпы смайликов ===*/
var swiper = new Swiper(".mySwiper", {
slidesPerView: 3,
spaceBetween: 30,
freeMode: true,
pagination: {
el: ".swiper-pagination",
clickable: true,
},
});

//==============Блоки с ответами
var Qviz_One = document.getElementById('Blok_One');
var Quiz_Two = document.getElementById('Blok_Two');
var Quiz_Three = document.getElementById('Blok_Three');
// Кнопка   ПРОДОЛЖИТЬ [1 Блок]
var Proda_One = document.getElementById('btn_Proda_One');
Proda_One.onclick = function(){
    Quiz_Two.style.display ="block";
}
// Кнопка   ПРОДОЛЖИТЬ [2 Блок]
var Proda_Two = document.getElementById('btn_Proda_Two');
Proda_Two.onclick = function(){
    Quiz_Three.style.display ="block";
}
// Кнопка НАЗАД [2 Блок]
var Back_One = document.getElementById('btn_Back_One');
Back_One.onclick = function(event) {
    Quiz_Two.style.display ="none";
}
//Кнопка ПРОДОЛЖИТЬ [3 Блок]
var Proda_Three = document.getElementById('btn_Proda_Three');
Proda_Three.onclick = function(){
    Quiz_Three.style.display="none";
    Quiz_Two.style.display ="none"
}
// Кнопка НАЗАД [3 Блок]
var Back_Two = document.getElementById('btn_Back_Two');
Back_Two.onclick = function(event){
    Quiz_Three.style.display ="none";
}


//====Выбор эмоций -Очень нравится- 1911 CSS
//Выбор класса input-box
var input = document.querySelector(".input-box")
input.onclick = function(){
    //Указываем после class (сам класс) без точки List
    this.classList.toggle("open");
    let list = this.nextElementSibling
    // Если
    if(list.style.maxHeight){
        list.style.maxHeight = null;
        list.style.boxShadow = null;
    }
    // То будет
    else{list.style.maxHeight = list.scrollHeight + "px"
         list.style.boxShadow = "0 1px 2px 0 black;"}
};
//Чтобы выбор пользоователя отображался на рамка
var rad = document.querySelectorAll(".radio");
rad.forEach((item)=>{
    item.addEventListener("change", ()=>{
        input.innerHTML = item.nextElementSibling.innerHTML;
        input.click();
    });
});


//Показ ответов на галвный экран, после клака на ответы в блоках
function displayAnswer (answer){
    const question = document.getElementById('question_One').innerText;
    const selectedAnswerContainer = document.getElementById('selected-answer-container');
    selectedAnswerContainer.innerHTML = `<p>${question}</p><p>${answer}</p>`}//Через клавишу Ё

function displayAnswer_Two (answer){
    const question = document.getElementById('question_Two').innerText;
    const selectedAnswerContainer = document.getElementById('selected-answer-container_Two');
    selectedAnswerContainer.innerHTML = `<p>${question}</p><p>${answer}</p>`}//Через клавишу Ё
    

//Показ комментария на главный экран, после того как пользователь нажмет на продолжить
function displayComment() {
    const comment = document.getElementById('comment-input').value;
    
    const commentContainer = document.createElement('div');
    commentContainer.style.marginTop="10px"
    
    commentContainer.innerText = comment;
    
    const selectedAnswerContainer = document.getElementById('selected-answer-container_Three');
    selectedAnswerContainer.appendChild(commentContainer);
}

// Свайп польщователей
var swiper = new Swiper(".my_Swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-User_pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-User_button-next",
      prevEl: ".swiper-User_button-prev",
    },
  });