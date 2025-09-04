<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html lang="en">
    <head>
      <meta charset="UTF-8"/>
      <title>Book Wishlist</title>
      <style>
        .wishlist {
          list-style-type: none;
          padding: 0;
        }
        .wishlist li {
          border: 1px solid #ccc;
          margin-bottom: 10px;
          padding: 10px;
        }
        .wishlist h3 {
          margin: 0;
          font-size: 16px;
        }
        .wishlist p {
          margin: 0;
          font-size: 14px;
        }
      </style>
    </head>
    <body>
      <h1>My Wishlist</h1>
      <ul class="wishlist" id="wishlist">
        <xsl:apply-templates select="/bookstore/book"/>
      </ul>
    </body>
  </html>
</xsl:template>

<xsl:template match="book">
  <li>
    <h3><xsl:value-of select="title"/></h3>
    <p>Author: <xsl:value-of select="author"/></p>
    <p>Year: <xsl:value-of select="year"/></p>
    <p>Price: $<xsl:value-of select="price"/></p>
  </li>
</xsl:template>

</xsl:stylesheet>
