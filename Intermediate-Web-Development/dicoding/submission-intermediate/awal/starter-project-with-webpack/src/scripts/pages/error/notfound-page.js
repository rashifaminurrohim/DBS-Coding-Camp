export default class NotFoundPage {
  async render() {
    return `
      <section class="not-found">
        <h1>404</h1>
        <p>Halaman tidak ditemukan</p>
        <a href="#/" class="btn">Kembali ke Beranda</a>
      </section>
    `;
  }

  async afterRender() {
    return true;
  }
}
