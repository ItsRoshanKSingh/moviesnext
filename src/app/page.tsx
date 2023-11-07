import styles from "@/lib/style/style";
import Dashboard from "./dashboard/page";

export default function Home() {
  return (
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Dashboard />
      </div>
    </div>
  )
}
