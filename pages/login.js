import styles from "../styles/Home.module.css";

export default function Login() {
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <form action="/dashboard">
            <button
              className="btn bg-sky-500 hover:bg-white hover:border-sky-500 hover:border-2 text-white hover:text-black p-5 rounded-lg"
              onClick={() => {
                document.cookie = "token=1234; path=/";
              }}
            >
              Login
            </button>
          </form>
        </main>
      </div>
    </>
  );
}
