const ClientError = require("../../exceptions/ClientError");

class PlaylistsHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;
    
    this.postPlaylistHandler = this.postPlaylistHandler.bind(this);
    this.getPlaylistHandler = this.getPlaylistHandler.bind(this);
    this.deletePlaylistByIdHandler = this.deletePlaylistByIdHandler.bind(this);
  
  }

  async postPlaylistHandler(request, h) {
    try {
      this._validator.validatePlaylistPayload(request.payload);
      const { name } = request.payload;
      const { id: userId } = request.auth.credentials; 
      const playlistId = await this._service.addPlaylist({name, owner: userId});
      
      const response = h.response({
        status: 'success',
        data: {
          playlistId,
        }
      });
      response.code(201);
      return response;
    } catch (error) {
      if (error instanceof ClientError) {
        const response = h.response({
          status: 'fail',
          message: error.message,
        });
        response.code(error.statusCode);
        return response;
      }
      // Server Error
      const response = h.response({
        status: 'error',
        message: 'maaf terjadi kesalahan pada server kami.',
      });
      response.code(500);
      console.error(error);
      return response;
    }
  }

  async getPlaylistHandler(request) {
    const { id: userId } = request.auth.credentials;
    const playlists = await this._service.getPlaylist({owner: userId});
    return {
      status: 'success',
      data: {
        playlists
      }
    }
  }

  async deletePlaylistByIdHandler(request) {
    const { playlistId } = request.params;
    const { id: userId } = request.auth.credentials;
    await this._service.verifyPlaylistOwner(playlistId, userId);
    await this._service.deletePlaylistById(playlistId);
    return {
        status: 'success',
        message: 'Playlist berhasil dihapus',
      };
  }
}

module.exports = PlaylistsHandler;