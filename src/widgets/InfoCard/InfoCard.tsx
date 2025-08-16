import { FC } from "react";

type TInfoCardProps = object;

const InfoCard: FC<TInfoCardProps> = () => {
  return (
    <section id="services" className="section-container pb-13">
      <div className="card flex justify-between gap-4">
        <div className="max-w-[350px]">
          <h3 className="text-subtitle mb-2 font-bold">Подбор освещения</h3>
          <p className="text-muted">
            Подберём решения под магазин, склад, дом или улицу. Помощь с
            расчётом света.
          </p>
        </div>
        <div className="max-w-[350px]">
          <h3 className="text-subtitle mb-2 font-bold">Опт и розница</h3>
          <p className="text-muted">
            Скидки для партнёров, быстрая логистика по Украине и ЕС.
          </p>
        </div>
        <div className="max-w-[350px]">
          <h3 className="text-subtitle mb-2 font-bold">Гарантия</h3>
          <p className="text-muted">
            Официальная гарантия производителей, поддержка и обмен при браке.
          </p>
        </div>
      </div>
    </section>
  );
};

export { InfoCard };
