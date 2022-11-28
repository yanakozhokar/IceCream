(() => {
    const refs = {
      openModalBtn1: document.querySelector('[data-products-open1]'),
      openModalBtn2: document.querySelector('[data-products-open2]'),
      openModalBtn3: document.querySelector('[data-products-open3]'),
      closeModalBtn: document.querySelector('[data-products-close]'),
      modal: document.querySelector('[data-products]'),
      body: document.querySelector('body'),
    };

    refs.openModalBtn1.addEventListener('click', toggleModal);
    refs.openModalBtn2.addEventListener('click', toggleModal);
    refs.openModalBtn3.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
      refs.body.classList.toggle('no-scroll');
    }
  })();