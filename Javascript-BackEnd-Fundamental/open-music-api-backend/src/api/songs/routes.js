const routes = (handler) => [
  // Tambah lagu
  {
    method: 'POST',
    path: '/songs',
    handler: handler.postSongHandler,
  },
  
  // Ambil semua lagu (nanti bisa ditambah query ?title & ?performer)
  {
    method: 'GET',
    path: '/songs',
    handler: handler.getSongsHandler,
  },
  
  // Detail lagu by id
  {
    method: 'GET',
    path: '/songs/{id}',
    handler: handler.getSongByIdHandler,
  },
  
  // Update lagu by id
  {
    method: 'PUT',
    path: '/songs/{id}',
    handler: handler.putSongByIdHandler,
  },
  
  // Hapus lagu by id
  {
    method: 'DELETE',
    path: '/songs/{id}',
    handler: handler.deleteSongByIdHandler,
  },
];

module.exports = routes;