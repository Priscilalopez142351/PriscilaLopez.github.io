<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html>
            <head>
            <link rel="stylesheet" href="xmlStylesAlt.css"/>
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
                <!-- Header/Menu -->
                    <div class="navbar">
                        <a href="alternateview.html">Home</a>
                        <a href="info2.html">Info</a>
                        <a href="Contact2.html">Contact</a>
                        <a href="compu2.html">Build Computer</a>
                        <a href="AdodeAnimate2.html">Adobe Animate</a>
                        <a href="index.html">Alternate View</a>
                        <a href="textbooksAlt.xml">Textbooks</a>    
                        
                        
                        </div>
                        

                <!-- End of Header/Menu -->

                <!-- Table to display textbooks -->
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Publisher</th>
                            <th>Year of Publication</th>
                            <th>ISBN</th>
                            <th>Book Website</th>
                            <th>Edition</th>
                            <th>Cover Type</th>
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
