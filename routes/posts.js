const express = require('express');
const router = express.Router();

// Import koneksi database
const connection = require('../library/database');

/**
 * GET /posts
 * Tampilkan semua post
 */
router.get('/', function (req, res) {
  // Jalankan query ke database
  connection.query('SELECT * FROM posts ORDER BY id DESC', function (err, rows) {
    if (err) {
      // Jika terjadi error, tampilkan pesan error dan kirimkan data kosong
      req.flash('error', err);
      res.render('posts', {
        data: []
      });
    } else {
      // Jika berhasil, render halaman dengan data posts
      res.render('posts/index', {
        data: rows
      });
    }
  });
});

module.exports = router;
