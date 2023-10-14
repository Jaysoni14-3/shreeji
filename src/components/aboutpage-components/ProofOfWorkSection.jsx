const ProofOfWorkSection = () => {
  const proofData = [
    { id: 1, value: "99+", label: "Offers" },
    { id: 2, value: 6, label: "Years of Experience" },
    { id: 3, value: 3, label: "Specialists" },
    { id: 4, value: "99%", label: "Satisfied Clients" },
  ];

  return (
    <div className="bg-neutral-100">
      <section className="proof-of-work section max-container grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {proofData.map((proof) => (
          <div
            key={proof.id}
            className="proof-card p-4 flex-center flex-col gap-2"
          >
            <h2 className="text-neutral-950">{proof.value}</h2>
            <hr className="w-full border border-primary-color" />
            <p>{proof.label}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProofOfWorkSection;
