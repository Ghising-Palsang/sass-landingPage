document.addEventListener("DOMContentLoaded", () => {
  const groupContainer = document.querySelector(".faq-content");
  groupContainer.addEventListener("click", (e) => {
    const faqHeader = e.target.closest(".faq-group-header");
    if (!faqHeader) return;

    //toggle plus minus icon
    const faqGroup = faqHeader.parentElement;
    const icon = faqHeader.querySelector("i");
    const faqBody = faqGroup.querySelector(".faq-group-body");

    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-minus");

    faqBody.classList.toggle("open");

    //toggle close for otherGroup

    const otherGroups = groupContainer.querySelectorAll(".faq-group");

    otherGroups.forEach((otherGroup) => {
      if (otherGroup !== faqGroup) {
        groupIcon = otherGroup.querySelector(".faq-group-header i");
        groupBody = otherGroup.querySelector(".faq-group-body");

        groupBody.classList.remove("open");
        groupIcon.classList.add("fa-plus");
      }
    });
  });
});



// Mobile menu

document.addEventListener('DOMContentLoaded', ()=>{
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const mobileMenu = document.querySelector('.mobile-menu');

  hamburgerBtn.addEventListener('click',()=>{
    mobileMenu.classList.toggle('active')
  })

})