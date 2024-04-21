import { Feature } from "../feature";
import { features } from "../../data/features";

export default function Features() {
  return (
    <section className="grid grid-cols-1 gap-12 py-28 container mx-auto px-4 md:px-8">
      {features.map((feature) => (
        <Feature feature={feature} key={feature.id} />
      ))}
    </section>
  );
}
