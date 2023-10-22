<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html>
            <head>
            
                <title>Textbooks List</title>
                <style>
                    table {
                        width: 100%;
                        border-collapse: collapse;
                    }
                    table, th, td {
                        border: 1px solid black;
                        padding: 8px;
                    }
                    th {
                        background-color: #f2f2f2;
                    }
                </style>
            </head>
            <body>
   <div class="navbar">
        <a href="index.html">Home</a>
        <a href="info.html">Info</a>
        <a href="Contact.html">Contact</a>
        <a href="compu.html">Build Computer</a> 
        <a href="AdobeAnimate.html">Adobe Animate</a>
        <a href="textbooks.xml">Textbooks</a>
        <a href="alternateview.html">Alternate View</a></div>
        <br><br>
     
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Publisher</th>
                            <th>Year</th>
                            <th>ISBN</th>
                            <th>Edition</th>
                            <th>Cover Type</th>
                            <th>Website</th>
                        </tr>
                    </thead>
                    <tbody>
                        <xsl:for-each select="textbooks/textbook">
                            <tr>
                                <td><xsl:value-of select="title"/></td>
                                <td>
                        <xsl:for-each select="author">
                            <xsl:value-of select="concat(firstName, ' ', lastName)"/>
                            <xsl:if test="position() != last()">, </xsl:if>
                        </xsl:for-each>
                        </td>
                                <td><xsl:value-of select="publisher"/></td>
                                <td><xsl:value-of select="year"/></td>
                                <td><xsl:value-of select="isbn"/></td>
                                <td><xsl:value-of select="edition"/></td>
                                <td><xsl:value-of select="covertype"/></td>
                                <td><a href="{website}"><xsl:value-of select="website"/></a></td>
                            </tr>
                        </xsl:for-each>
                    </tbody>
                </table>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>