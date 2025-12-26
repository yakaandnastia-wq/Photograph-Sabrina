// ==== ФОРМА МОДАЛКИ (КАРТОЧКИ) ====
const modal = document.getElementById("modalOverlay");

if (modal) {
  const modalClose = document.getElementById("modalClose");
  const packageNameDisplay = document.getElementById("packageName");
  const packageHidden = document.getElementById("packageHidden");
  const modalForm = document.getElementById("orderForm");
  const modalFormContainer = document.getElementById("formContainer");
  const modalSuccessMessage = document.getElementById("successMessage");
  const cardButtons = document.querySelectorAll(".card-button");

  // Открытие модального окна
  function openModal(packageName) {
    packageNameDisplay.textContent = packageName;
    packageHidden.value = packageName;
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  // Закрытие модального окна
  function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";

    setTimeout(() => {
      modalForm.reset();
      modalFormContainer.style.display = "block";
      modalSuccessMessage.classList.remove("active");
    }, 300);
  }

  // Клик по кнопкам карточек
  cardButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const packageName = button.dataset.package;
      openModal(packageName);
    });
  });

  // Закрытие по крестику
  modalClose.addEventListener("click", closeModal);

  // Закрытие по клику вне модального окна
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Закрытие по клавише Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });

  // Отправка формы модалки
  modalForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = {
      name: document.getElementById("userName").value,
      phone: document.getElementById("userPhone").value,
      email: document.getElementById("userEmail").value,
      package: packageHidden.value,
    };

    console.log("Данные заказа:", formData);

    modalFormContainer.style.display = "none";
    modalSuccessMessage.classList.add("active");

    setTimeout(closeModal, 3000);
  });
}

// ==== ФОРМА ПОДПИСКИ (ФУТЕР) ====
const subscribeForm = document.getElementById("subscribeForm");

if (subscribeForm) {
  const subscribeFormContainer = document.getElementById(
    "subscribeFormContainer"
  );
  const subscribeSuccessMessage = document.getElementById(
    "subscribeSuccessMessage"
  );

  subscribeForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("subscribeEmail").value;
    const name = document.getElementById("subscribeName").value;

    console.log("Данные подписки:", { email, name });

    subscribeFormContainer.style.display = "none";
    subscribeSuccessMessage.classList.add("active");

    setTimeout(function () {
      subscribeFormContainer.style.display = "block";
      subscribeSuccessMessage.classList.remove("active");
      subscribeForm.reset();
    }, 4000);
  });
}
