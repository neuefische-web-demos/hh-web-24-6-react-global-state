import CounterStats from "../components/CounterStats";
import Link from "../components/Link";

export default function HomePage({ dragonCount, countSum, countAverage }) {
  return (
    <>
      <CounterStats
        dragonCount={dragonCount}
        countAverage={countAverage}
        countSum={countSum}
      />

      <Link href="/counters">To the counters →</Link>
    </>
  );
}
