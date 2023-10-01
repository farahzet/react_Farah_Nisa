import React from 'react';

const FormDetail = ({ match, form }) => {
  const { index } = match.params; // Ambil parameter indeks dari URL
  const product = form[index]; // Dapatkan data produk berdasarkan indeks

  if (!product) {
    return <div>Produk tidak ditemukan</div>;
  }

  return (
    <div>
      <h2>Detail Produk</h2>
      <ul>
        <li>Nama Produk: {product.productName}</li>
        <li>Kategori Produk: {product.productCategory}</li>
        <li>Kondisi Produk: {product.productFreshness}</li>
        <li>Harga Produk: ${product.productPrice}</li>
      </ul>
    </div>
  );
};

export default FormDetail