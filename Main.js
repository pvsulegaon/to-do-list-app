{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 function newTask() \{\
    var listItem = document.createElement("li");\
    var inputValue = document.getElementById("todoInput").value;\
    var text = document.createTextNode(inputValue);\
    listItem.appendChild(text);\
\
    if (inputValue === '') \{\
        alert("You must write something!");\
    \} else \{\
        document.getElementById("todoList").appendChild(listItem);\
    \}\
    document.getElementById("todoInput").value = "";\
\
    listItem.onclick = function() \{\
        this.classList.toggle('completed');\
    \}\
\}}