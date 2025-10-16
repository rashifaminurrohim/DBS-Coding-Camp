class AlbumsHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;

    this.postAlbumHandler = this.postAlbumHandler.bind(this);
  }

  postAlbumHandler(request, h) {
      this._validator.validateAlbumPayload(request.payload);
      const { name = 'untitled', year } = request.payload;
      const albumId = this._service.addAlbum({name, year});
  
      const response = h.response({
        status: 'success',
        message: 'Album berhasil ditambahkan',
        data: {
          albumId,
        },
      });
      response.code(201);
      return response;
  };

}

module.exports = AlbumsHandler;