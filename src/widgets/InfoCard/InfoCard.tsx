const InfoCard = () => (
  <section id="services" className="section-container pb-12">
    <div className="card grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      <div>
        <h3 className="text-subtitle mb-2 font-bold">Подбор освещения</h3>
        <p className="text-muted">
          Подберём решения под магазин, склад, дом или улицу. Помощь с расчётом
          света.
        </p>
      </div>
      <div>
        <h3 className="text-subtitle mb-2 font-bold">Опт и розница</h3>
        <p className="text-muted">
          Скидки для партнёров, быстрая логистика по Украине и ЕС.
        </p>
      </div>
      <div>
        <h3 className="text-subtitle mb-2 font-bold">Гарантия</h3>
        <p className="text-muted">
          Официальная гарантия производителей, поддержка и обмен при браке.
        </p>
      </div>
    </div>
  </section>
);

export { InfoCard };
