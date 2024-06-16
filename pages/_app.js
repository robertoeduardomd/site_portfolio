import "@/styles/global.css";
import "@/styles/header.css";
import "@/styles/article.css";
import "@/styles/autodigitavel.css";
import "@/styles/slide.css";
import "@/styles/footer.css";
import "@/styles/responsividade.css";
import "@/styles/carregar.css";

import "@/styles/itensgirando.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </>
  );
}

export default App;
