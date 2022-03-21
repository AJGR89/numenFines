const mostrarModal = (prod) => {
    console.log(prod);
    dispach({
      types: types.showProduct,
      payload: prod,
    });

    setShowModal(true);
  };