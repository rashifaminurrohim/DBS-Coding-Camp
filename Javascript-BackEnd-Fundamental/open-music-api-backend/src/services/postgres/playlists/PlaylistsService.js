const { nanoid } = require('nanoid');
const { Pool } = require('pg');
const NotFoundError = require('./../../../exceptions/NotFoundError');
const InvariantError = require('./../../../exceptions/InvariantError');
const AuthorizationError = require('../../../exceptions/AuthorizationError');

class PlaylistsService {
  constructor() {
    this._pool = new Pool();
  }

  async addPlaylist({name, owner}) {
    const id = `playlist-${nanoid(16)}`;
    const query = {
      text: 'INSERT INTO playlist (id, name, owner) VALUES ($1, $2, $3) RETURNING id',
      values: [id, name, owner],
    }

    const result = await this._pool.query(query);

    if(!result.rows.length) {
      throw new InvariantError('Playlist gagal ditambahkan');
    }

    return result.rows[0].id;
  }

  async getPlaylist ({owner}) {
    const query = {
      text: 'SELECT * FROM playlist WHERE owner = $1',
      values: [owner],
    }

    const result = await this._pool.query(query);

    return result.rows.map(row => ({
      id: row.id,
      name: row.name,
      username: row.owner,
    }));
  }

  async deletePlaylistById(playlistId) {
    const query = {
      text: 'DELETE FROM playlist WHERE id = $1 RETURNING id',
      values: [playlistId],
    }

    const result = await this._pool.query(query);
    if(!result.rows.length) {
      throw new NotFoundError('Gagal menghapus playlist, id tidak ditemukan')
    }
  }

  async verifyPlaylistOwner(id, owner) {
    const query = {
      text: 'SELECT * FROM playlist WHERE id = $1',
      values: [id],
    }

    const result = await this._pool.query(query);

    if(!result.rows.length) {
      throw new NotFoundError('Playlist tidak ditemukan');
    }

    const playlist = result.rows[0];
    if(playlist.owner !== owner) {
      throw new AuthorizationError('Anda tidak berhak mengakses resource ini');
    }
  }

}

module.exports = PlaylistsService;