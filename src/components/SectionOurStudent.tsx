const SectionOurStudent = () => {
  return (
    <section className="py-5">
      <div className="text-center">
        <h2 className="fs-2">Venha ser nosso aluno</h2>
        <p className="fw-light fs-4">
          Seu diploma carrega histórias e impactos reais
        </p>
        <button
          type="button"
          className="btn btn-lg bg-orange text-white rounded-pill border mt-5 px-4"
          data-bs-toggle="modal"
          data-bs-target="#registerModal"
        >
          Inscreva-se
          <i className="bi bi-arrow-right-short"></i>
        </button>
      </div>
    </section>
  );
};

export default SectionOurStudent;
