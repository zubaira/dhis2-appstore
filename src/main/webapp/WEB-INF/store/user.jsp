<%--
  Created by IntelliJ IDEA.
  User: zubair
  Date: 27.12.16
  Time: 19:09
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>User Page</title>
</head>
<body>
<h1>User Page</h1>
<form name="fileUploadForm" action="/upload" method="post" enctype="multipart/form-data">
    <label>Select file</label>
    <input type="file" name="uploadedFile" id="uploadedFile" />

    <input type="submit" value="Upload" />

</form>
</body>
</html>