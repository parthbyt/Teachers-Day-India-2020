//          Copyright Parth Agrawal 2020.
// Distributed under the Boost Software License, Version 1.0.
//    (See accompanying file LICENSE or copy at
//          https://www.boost.org/LICENSE_1_0.txt)
function onSubmit () {
	name = document.getElementById("name").value;
	subject = document.getElementById("subject")[document.getElementById("subject").selectedIndex].id;
	document.getElementById("form").className = "container d-none";
	document.getElementById("content").className = "container";
	document.getElementById("names").innerHTML = name;
	document.getElementById("subjectss").innerHTML = document.getElementById("subject").value;;
	$.get("data.txt", function (datas) {
		data = JSON.parse(datas);
		var i;
		for (i = 0; i < data.main.length ; i++) {
			if (subject == data.main[i].id) {
				document.getElementById("con").innerHTML = data.main[i].content;
			}
		}
	});
}
