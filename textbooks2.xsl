<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html>
            <head>
            <link rel="stylesheet" href="xmlStyle2.css"/>
                <style>
                    table {
                        width: 100%;
                        border-collapse: collapse;
                    }
                    table, th, td {
                        border: 1px solid black;
                        padding: 10px;
                    }
                    th {
                        background-color: purple;
                        color: white;
                    }
                </style>
            </head>
            <body>
               
                    <div class="navbar">
                        <a href="alternateview.html">Home</a>
                        <a href="info2.html">Info</a>
                        <a href="Contact2.html">Contact</a>
                        <a href="compu2.html">Build Computer</a>
                        <a href="AdodeAnimate2.html">Adobe Animate</a>
                         <a href="textbooks2.xml">Textbooks</a>
                        <a href="index.html">Alternate View</a>
                          
                        
                        
                        </div>
                        

               
                <table>
                    <thead>
                        <tr>
                          <th>Title</th>
                            <th>Author(s)</th>
                            <th>Publisher</th>
                            <th>Publication Year</th>
                            <th>ISBN</th>
                            <th>Website</th>
                            <th>Edition</th>
                            <th>Cover</th>
                        </tr>
                    </thead>
                    <tbody>
                        <xsl:for-each select="textbooks/textbook">
                            <tr>
                                <td><xsl:value-of select="title"/></td>
                                <td><xsl:value-of select="author/firstName"/>
                                  <xsl:text> </xsl:text>
                                 <xsl:value-of select="author/lastName"/></td>
                                <td><xsl:value-of select="publisher/name"/></td>
                                <td><xsl:value-of select="publicationYear"/></td>
                                <td><xsl:value-of select="ISBN"/></td>
                                <td><a href="{bookWebsite}"><xsl:value-of select="bookWebsite"/></a></td>
                                <td><xsl:value-of select="edition"/></td>
                                <td><xsl:value-of select="coverType"/></td>
                            </tr>
                        </xsl:for-each>
                    </tbody>
                </table>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>
