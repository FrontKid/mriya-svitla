const InfoCard = () => (
  <section id="services" className="section-container pb-12">
    <div className="card grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      <div>
        <h3 className="text-subtitle mb-2 font-bold">Підбір освітлення</h3>
        <p className="text-muted">
          Підберемо рішення під магазин, склад, будинок чи вулицю. Допомога з
          розрахунком світла.
        </p>
      </div>
      <div>
        <h3 className="text-subtitle mb-2 font-bold">Опт та роздріб</h3>
        <p className="text-muted">
          Знижки для партнерів, швидка логістика по Україні.
        </p>
      </div>
      <div>
        <h3 className="text-subtitle mb-2 font-bold">Гарантія</h3>
        <p className="text-muted">
          Офіційна гарантія виробників, підтримка та обмін при шлюбі.
        </p>
      </div>
    </div>
  </section>
);

export { InfoCard };
